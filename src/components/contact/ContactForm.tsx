"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useId, useRef, useState, type FocusEvent, type FormEvent, type ReactNode } from "react";
import { cn, EASE } from "@/lib/utils";
import { lp, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";
import { Bidi } from "@/components/ui/Bidi";
import { ButtonDisc, buttonClasses } from "@/components/ui/Button";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Copy = any;

const TEXT = ["name", "title", "entity", "email", "mobile", "project", "launch", "scale"] as const;
type TextKey = (typeof TEXT)[number];
type Key = TextKey | "assets" | "wafi" | "hardware" | "consent";
type Values = Record<TextKey | "assets" | "wafi" | "company_website", string> & { hardware: string[]; consent: boolean };
type Issue = { message: string; warning?: boolean };

const EMPTY: Values = {
  name: "", title: "", entity: "", email: "", mobile: "", project: "", launch: "", scale: "",
  assets: "", wafi: "", hardware: [], consent: false, company_website: "",
};
const FREE_MAIL = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com"];
const MAX = 120;
const AUTOCOMPLETE: Partial<Record<TextKey, string>> = { name: "name", title: "organization-title", entity: "organization", email: "email", mobile: "tel-national" };

function check(k: Key, v: Values, e: Copy): Issue | undefined {
  if ((TEXT as readonly string[]).includes(k)) {
    const s = (v[k as TextKey] as string).trim();
    if (!s) return { message: e.required[TEXT.indexOf(k as TextKey)] };
    if (s.length >= MAX) return { message: e.tooLong };
    if (k === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)) return { message: e.email };
      if (FREE_MAIL.includes(s.split("@")[1]?.toLowerCase())) return { message: e.freeMail, warning: true };
    }
    if (k === "mobile" && !/^5\d{8}$/.test(s.replace(/\s/g, ""))) return { message: e.mobile };
    if (k === "launch") {
      const now = new Date();
      const cur = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
      if (s < cur) return { message: e.pastDate };
    }
    if (k === "scale") {
      const m = s.replace(/[,٬]/g, "").match(/\d+(\.\d+)?/);
      if (!m) return { message: e.noNumber };
      const n = parseFloat(m[0]);
      const isArea = /m²|m2|sqm|gfa|م²|متر/i.test(s);
      if ((isArea && n < 50000) || (!isArea && n < 300)) return { message: e.belowThreshold, warning: true };
    }
    return undefined;
  }
  if (k === "assets" || k === "wafi") return v[k] ? undefined : { message: e.select };
  if (k === "hardware") return v.hardware.length ? undefined : { message: e.multi };
  if (k === "consent") return v.consent ? undefined : { message: e.consent };
}

const ALL: Key[] = [...TEXT, "assets", "wafi", "hardware", "consent"];

export function ContactForm({ c, locale }: { c: Copy; locale: Locale }) {
  const f = c.form;
  const e = c.errors;
  const st = c.states;
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;
  const [v, setV] = useState<Values>(EMPTY);
  const [issues, setIssues] = useState<Partial<Record<Key, Issue>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failure" | "duplicate" | "spam">("idle");
  const [reference, setReference] = useState("");
  const [summary, setSummary] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const set = <K extends keyof Values>(k: K, val: Values[K]) => {
    setV((s) => ({ ...s, [k]: val }));
    if (k === "hardware" || k === "consent" || k === "assets" || k === "wafi") setIssues((s) => ({ ...s, [k]: undefined }));
    // live: show the 120-character message as soon as the limit is reached
    if (typeof val === "string" && (TEXT as readonly string[]).includes(k as string)) {
      setIssues((s) => ({ ...s, [k]: val.length >= MAX ? { message: e.tooLong } : s[k as Key]?.message === e.tooLong ? undefined : s[k as Key] }));
    }
  };
  const blur = (k: Key) => (_: FocusEvent) => setIssues((s) => ({ ...s, [k]: check(k, v, e) }));

  const summaryText = (n: number) =>
    n === 1 ? e.summary.one : n === 2 && e.summary.two ? e.summary.two : e.summary.many.replace("[n]", String(n));

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const next: Partial<Record<Key, Issue>> = {};
    for (const k of ALL) next[k] = check(k, v, e);
    setIssues(next);
    const errors = ALL.filter((k) => next[k] && !next[k]!.warning);
    if (errors.length) {
      setSummary(summaryText(errors.length));
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>(`[data-field="${errors[0]}"]`)?.focus());
      return;
    }
    setSummary("");
    setStatus("sending");
    try {
      const res = await fetch("/api/rfp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...v, locale }),
      });
      const json = (await res.json()) as { ok: boolean; code?: string; reference?: string };
      if (json.ok) {
        setReference(json.reference ?? "");
        setStatus("sent");
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else setStatus(json.code === "duplicate" ? "duplicate" : json.code === "spam" ? "spam" : "failure");
    } catch {
      setStatus("failure");
    }
  }

  const describedBy = (k: Key, helper?: string) => cn(issues[k] && id(`${k}-err`), helper && id(`${k}-help`)) || undefined;
  const inputCls = (k: Key) =>
    cn(
      "h-12 w-full rounded-xl border bg-page px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-muted focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10",
      issues[k] ? (issues[k]!.warning ? "border-[#B45309]" : "border-red-600") : "border-line",
    );

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        role="status"
        className="flex min-h-[480px] flex-col items-center justify-center rounded-card bg-white p-8 text-center shadow-card ring-1 ring-ink/5 sm:p-12"
      >
        <span className="grid size-16 place-items-center rounded-full bg-brand-dark text-white">
          <Icon name="check" size={30} strokeWidth={2.5} />
        </span>
        <h2 className="mt-6 text-h3 font-bold text-ink">{st.successTitle}</h2>
        <p className="mt-3 max-w-[46ch]">
          <Bidi text={st.successBody.replace("[MZ-0000]", reference)} />
        </p>
        <Link href={lp(locale, "/case-studies")} className="mt-6 text-sm font-semibold text-brand-dark underline-offset-2 hover:underline">
          {st.successLink}
        </Link>
      </motion.div>
    );
  }

  const field = (k: TextKey, n: number, extra?: { type?: string; wide?: boolean }) => {
    const fd = f.fields[n];
    const issue = issues[k];
    const input = (
      <input
        id={id(k)}
        name={k}
        data-field={k}
        type={extra?.type ?? "text"}
        maxLength={MAX}
        dir={k === "email" || k === "mobile" ? "ltr" : undefined}
        inputMode={k === "mobile" ? "numeric" : undefined}
        autoComplete={AUTOCOMPLETE[k]}
        placeholder={fd.placeholder ?? undefined}
        value={v[k]}
        onChange={(ev) => set(k, ev.target.value)}
        onBlur={blur(k)}
        aria-invalid={issue && !issue.warning ? true : undefined}
        aria-describedby={describedBy(k, fd.helper)}
        className={cn(inputCls(k), k === "mobile" && "ps-16", k === "email" && "text-start")}
      />
    );
    return (
      <Field key={k} htmlFor={id(k)} label={fd.label} helper={fd.helper} helperId={id(`${k}-help`)} issue={issue} issueId={id(`${k}-err`)} wide={extra?.wide}>
        {fd.prefix ? (
          <div className="relative" dir="ltr">
            <span className="pointer-events-none absolute inset-y-0 left-0 grid w-14 place-items-center border-e border-line text-sm font-semibold text-body">{fd.prefix}</span>
            {input}
          </div>
        ) : (
          input
        )}
      </Field>
    );
  };

  const select = (k: "assets" | "wafi", n: number) => {
    const fd = f.fields[n];
    return (
      <Field htmlFor={id(k)} label={fd.label} issue={issues[k]} issueId={id(`${k}-err`)}>
        <div className="relative">
          <select
            id={id(k)}
            name={k}
            data-field={k}
            value={v[k]}
            onChange={(ev) => set(k, ev.target.value)}
            onBlur={blur(k)}
            aria-invalid={issues[k] ? true : undefined}
            aria-describedby={describedBy(k)}
            className={cn(inputCls(k), "appearance-none pe-10", !v[k] && "text-muted")}
          >
            <option value="" disabled>
              {fd.placeholder}
            </option>
            {(fd.options as string[]).map((o) => (
              <option key={o} value={o} className="text-ink">
                {o}
              </option>
            ))}
          </select>
          <Icon name="chevronDown" size={18} className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-muted" />
        </div>
      </Field>
    );
  };

  const hw = f.fields[10];
  const consentParts = (f.consent as string).split(f.privacyLinkText);

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="scroll-mt-32 rounded-card bg-white p-6 shadow-card ring-1 ring-ink/5 sm:p-8 lg:p-10" aria-describedby={id("intro")}>
      <h2 className="text-h3 font-bold text-ink">{f.title}</h2>
      <p id={id("intro")} className="mt-2 text-[15px]">
        {f.body}
      </p>
      <p className="mt-2 text-sm text-muted">{f.reassurance}</p>
      <p className="mt-4 text-xs font-semibold text-body">{f.required}</p>

      {summary && (
        <p role="alert" className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {summary}
        </p>
      )}

      {/* Spam trap — invisible to people and assistive tech */}
      <div aria-hidden="true" className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0 [clip:rect(0,0,0,0)]">
        <label>
          Company website
          <input name="company_website" tabIndex={-1} autoComplete="off" value={v.company_website} onChange={(ev) => set("company_website", ev.target.value)} />
        </label>
      </div>

      <Group legend={f.legends[0]}>
        {field("name", 0)}
        {field("title", 1)}
        {field("entity", 2, { wide: true })}
        {field("email", 3, { type: "email" })}
        {field("mobile", 4, { type: "tel" })}
      </Group>
      <Group legend={f.legends[1]}>
        {field("project", 5, { wide: true })}
        {field("launch", 6, { type: "month" })}
        {field("scale", 7)}
      </Group>
      <Group legend={f.legends[2]}>
        {select("assets", 8)}
        {select("wafi", 9)}
        <fieldset className="sm:col-span-2" aria-describedby={describedBy("hardware", hw.helper)}>
          <legend className="mb-1 text-sm font-semibold text-ink">{hw.label}</legend>
          <p id={id("hardware-help")} className="mb-2 text-xs text-muted">
            {hw.helper}
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {(hw.options as string[]).map((o, i) => {
              const active = v.hardware.includes(o);
              return (
                <label
                  key={o}
                  className={cn(
                    "flex cursor-pointer items-start gap-2.5 rounded-xl border px-3.5 py-2.5 text-sm transition-all",
                    active ? "border-brand-dark bg-brand-dark text-white" : "border-line bg-page text-body hover:border-brand/40",
                  )}
                >
                  <input
                    type="checkbox"
                    name="hardware"
                    value={o}
                    data-field={i === 0 ? "hardware" : undefined}
                    checked={active}
                    onChange={() => set("hardware", active ? v.hardware.filter((x) => x !== o) : [...v.hardware, o])}
                    className="peer sr-only"
                  />
                  <span className={cn("mt-0.5 grid size-4 shrink-0 place-items-center rounded border peer-focus-visible:ring-4 peer-focus-visible:ring-brand/30", active ? "border-white bg-white text-brand-dark" : "border-muted")}>
                    {active && <Icon name="check" size={11} strokeWidth={3} />}
                  </span>
                  <span className={cn(active && "font-semibold")}>{o}</span>
                </label>
              );
            })}
          </div>
          <IssueText issue={issues.hardware} id={id("hardware-err")} />
        </fieldset>
      </Group>

      <div className="mt-8 border-t border-line pt-6">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-body">
          <input
            type="checkbox"
            name="consent"
            data-field="consent"
            checked={v.consent}
            onChange={(ev) => set("consent", ev.target.checked)}
            aria-describedby={describedBy("consent")}
            className="mt-0.5 size-4 shrink-0 accent-[#0474A1]"
          />
          <span>
            {consentParts[0]}
            <a href={lp(locale, "/privacy")} target="_blank" rel="noopener" className="font-semibold text-brand-dark underline underline-offset-2">
              {f.privacyLinkText}
            </a>
            {consentParts[1]}
          </span>
        </label>
        <IssueText issue={issues.consent} id={id("consent-err")} />
      </div>

      {status === "failure" && (
        <div role="alert" className="mt-6 flex flex-col gap-3 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 sm:flex-row sm:items-center sm:justify-between">
          <span>
            {(st.failure as string).split("sales@manzili.sa")[0]}
            <a href="mailto:sales@manzili.sa" className="underline">
              <bdi dir="ltr">sales@manzili.sa</bdi>
            </a>
            {(st.failure as string).split("sales@manzili.sa")[1]}
          </span>
          <button type="submit" className="shrink-0 rounded-full border border-red-700 px-4 py-1.5">
            {st.retry}
          </button>
        </div>
      )}
      {status === "duplicate" && (
        <p role="status" className="mt-6 rounded-xl bg-brand-light px-4 py-3 text-sm font-semibold text-brand-deep">
          {st.duplicate}
        </p>
      )}
      {status === "spam" && (
        <p role="alert" className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {st.spam}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-4">
        <button type="submit" disabled={status === "sending"} className={cn(buttonClasses("primary"), "w-full justify-between sm:w-fit")}>
          {status === "sending" ? st.loading : f.submit}
          {status === "sending" ? (
            <span className="grid size-9 place-items-center rounded-full bg-white">
              <span className="size-4 animate-spin rounded-full border-2 border-accent border-t-transparent" />
            </span>
          ) : (
            <ButtonDisc variant="primary" />
          )}
        </button>
        <p className="flex items-center gap-2 text-xs font-semibold text-body">
          <Icon name="shield" size={15} className="shrink-0 text-brand-dark" />
          {f.nda}
        </p>
      </div>
    </form>
  );
}

function IssueText({ issue, id }: { issue?: Issue; id: string }) {
  return issue ? (
    <p id={id} role={issue.warning ? undefined : "alert"} className={cn("mt-1.5 text-xs font-semibold", issue.warning ? "text-[#B45309]" : "text-red-700")}>
      {issue.message}
    </p>
  ) : null;
}

function Group({ legend, children }: { legend: string; children: ReactNode }) {
  return (
    <fieldset className="mt-8 border-t border-line pt-6">
      <legend className="mb-5 text-h4 font-semibold text-ink">{legend}</legend>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

function Field({
  htmlFor, label, helper, helperId, issue, issueId, wide, children,
}: {
  htmlFor: string; label: string; helper?: string | null; helperId?: string; issue?: Issue; issueId: string; wide?: boolean; children: ReactNode;
}) {
  const required = label.endsWith("*");
  const text = required ? label.slice(0, -1) : label;
  return (
    <div className={cn(wide && "sm:col-span-2")}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-ink">
        {text}
        {required && <span className="text-accent-dark">*</span>}
      </label>
      {children}
      {helper && !issue && (
        <p id={helperId} className="mt-1.5 text-xs text-muted">
          {helper}
        </p>
      )}
      <IssueText issue={issue} id={issueId} />
    </div>
  );
}
