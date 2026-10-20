import { NextResponse } from "next/server";

const REQUIRED = ["name", "title", "entity", "email", "mobile", "project", "launch", "scale", "assets", "wafi"] as const;

type Payload = Record<string, string | string[] | boolean | undefined>;

// Duplicate guard (copy file: same email within 24 h). Best-effort, per server instance.
const recent = new Map<string, number>();
const DAY = 24 * 60 * 60 * 1000;

/**
 * Technical Scoping intake (copy file Part 5).
 * Validates server-side, emails the RFP inbox via Resend and/or forwards to RFP_WEBHOOK_URL.
 * Free-mail domains are allowed (the form only warns). Responses carry a `code` the form maps to its states.
 */
export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, code: "invalid" }, { status: 400 });
  }

  // Spam trap: the hidden "Company website" field must stay empty
  if (typeof data.company_website === "string" && data.company_website.trim()) {
    return NextResponse.json({ ok: false, code: "spam" }, { status: 400 });
  }

  const missing: string[] = REQUIRED.filter((k) => typeof data[k] !== "string" || !(data[k] as string).trim());
  if (!Array.isArray(data.hardware) || !data.hardware.length) missing.push("hardware");
  if (data.consent !== true) missing.push("consent");
  const email = String(data.email ?? "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) missing.push("email");
  if (!/^5\d{8}$/.test(String(data.mobile ?? "").replace(/\s/g, ""))) missing.push("mobile");
  if (missing.length) return NextResponse.json({ ok: false, code: "invalid", fields: missing }, { status: 422 });

  const last = recent.get(email);
  if (last && Date.now() - last < DAY) return NextResponse.json({ ok: false, code: "duplicate" }, { status: 409 });

  const reference = `MZ-${String(Math.floor(1000 + Math.random() * 9000))}`;
  const submission = { ...data, email, reference, mobile: `+966 ${data.mobile}`, submittedAt: new Date().toISOString(), source: "manzili.sa/contact-us" };
  delete (submission as Payload).company_website;

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.RFP_TO_EMAIL;
  const webhook = process.env.RFP_WEBHOOK_URL;

  if (!(resendKey && to) && !webhook) {
    console.error("[rfp] no delivery configured — set RESEND_API_KEY + RFP_TO_EMAIL or RFP_WEBHOOK_URL");
    return NextResponse.json({ ok: false, code: "failure" }, { status: 503 });
  }

  try {
    // 1) Email to the RFP inbox via Resend (https://resend.com)
    if (resendKey && to) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.RFP_FROM_EMAIL || "Manzili RFP <onboarding@resend.dev>",
          to: to.split(",").map((t) => t.trim()),
          reply_to: email,
          subject: `Technical Scoping ${reference} — ${String(data.project)} (${String(data.entity)})`,
          html: renderEmail(submission),
        }),
      });
      if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
    }
    // 2) Optional JSON copy to a CRM / automation webhook
    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    }
  } catch (err) {
    console.error("[rfp] delivery failed", err);
    return NextResponse.json({ ok: false, code: "failure" }, { status: 502 });
  }

  recent.set(email, Date.now());
  return NextResponse.json({ ok: true, reference });
}

const LABELS: Record<string, string> = {
  reference: "Reference",
  name: "Full name",
  title: "Job title",
  entity: "Developer entity",
  email: "Work email",
  mobile: "Mobile",
  project: "Masterplan name & location",
  launch: "Target launch date",
  scale: "Project scale",
  assets: "Technical asset state",
  wafi: "Wafi licensing status",
  hardware: "Hardware & showroom scope",
  locale: "Language",
  submittedAt: "Submitted at",
};

const esc = (v: string) => v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function renderEmail(data: Payload & { submittedAt: string }) {
  const rows = Object.keys(LABELS)
    .map((k) => {
      const v = data[k];
      const text = Array.isArray(v) ? v.join(", ") : String(v ?? "—");
      return `<tr><td style="padding:8px 12px;border-bottom:1px solid #E4E3E3;color:#6B6969;font:13px Arial;vertical-align:top;width:180px">${LABELS[k]}</td><td style="padding:8px 12px;border-bottom:1px solid #E4E3E3;color:#373535;font:14px Arial;white-space:pre-wrap">${esc(text)}</td></tr>`;
    })
    .join("");
  return `<div style="font-family:Arial;color:#373535"><h2 style="color:#045A86">New Enterprise RFP</h2><table style="border-collapse:collapse;width:100%;max-width:720px">${rows}</table></div>`;
}
