import { NextResponse } from "next/server";
import { BLOCKED_EMAIL_DOMAINS } from "@/content/pages/contact";

const REQUIRED = [
  "name",
  "email",
  "role",
  "phone",
  "entity",
  "project",
  "location",
  "scale",
  "wafi",
  "launch",
  "staging",
  "brief",
] as const;

type Payload = Record<string, string | string[] | undefined>;

/**
 * Enterprise RFP intake.
 * Validates server-side, then forwards the submission to RFP_WEBHOOK_URL
 * (e.g. a CRM, Zapier/Make, Slack or email automation) when configured.
 */
export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields
  if (typeof data.company_website === "string" && data.company_website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const missing = REQUIRED.filter((k) => typeof data[k] !== "string" || !(data[k] as string).trim());
  const typologies = Array.isArray(data.typologies) ? data.typologies : [];
  const pillars = Array.isArray(data.pillars) ? data.pillars : [];
  if (!typologies.length) missing.push("typologies" as never);
  if (!pillars.length) missing.push("pillars" as never);
  if (missing.length) {
    return NextResponse.json({ ok: false, error: "Complete all required fields.", fields: missing }, { status: 422 });
  }

  const email = String(data.email).trim().toLowerCase();
  const domain = email.split("@")[1] ?? "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || BLOCKED_EMAIL_DOMAINS.includes(domain)) {
    return NextResponse.json(
      { ok: false, error: "Use your official developer corporate email address.", fields: ["email"] },
      { status: 422 },
    );
  }

  const submission = { ...data, email, submittedAt: new Date().toISOString(), source: "manzili.sa/contact" };
  delete (submission as Payload).company_website;

  const webhook = process.env.RFP_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("[rfp] forward failed", err);
      return NextResponse.json(
        { ok: false, error: "We could not record your submission. Email sales@manzili.sa directly." },
        { status: 502 },
      );
    }
  } else {
    console.info("[rfp] submission received (set RFP_WEBHOOK_URL to forward it)", submission);
  }

  return NextResponse.json({ ok: true });
}
