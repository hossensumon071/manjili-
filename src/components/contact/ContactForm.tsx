"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { BLOCKED_EMAIL_DOMAINS, contactPage } from "@/content/pages/contact";
import { cn, EASE } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

const f = contactPage.form;

type Values = {
  name: string;
  email: string;
  role: string;
  phone: string;
  entity: string;
  project: string;
  location: string;
  scale: string;
  typologies: string[];
  wafi: string;
  launch: string;
  staging: string;
  pillars: string[];
  integrations: string;
  brief: string;
  company_website: string; // honeypot
};

const initial: Values = {
  name: "",
  email: "",
  role: "",
  phone: "",
  entity: "",
  project: "",
  location: "",
  scale: "",
  typologies: [],
  wafi: "",
  launch: "",
  staging: "",
  pillars: [],
  integrations: "",
  brief: "",
  company_website: "",
};

type Errors = Partial<Record<keyof Values, string>>;

function validate(v: Values): Errors {
  const e: Errors = {};
  const req = (k: keyof Values, msg = "Required.") => {
    const val = v[k];
    if (Array.isArray(val) ? !val.length : !String(val).trim()) e[k] = msg;
  };
  req("name", "Enter your full legal name.");
  req("role", "Select your executive title.");
  req("phone", "Enter a direct mobile or office line.");
  req("entity", "Enter your legal commercial entity name.");
  req("project", "Enter the project or master development name.");
  req("location", "Select the development location.");
  req("scale", "Select the total development scale.");
  req("typologies", "Select at least one asset typology.");
  req("wafi", "Select the Wafi regulatory status.");
  req("launch", "Select the target launch window.");
  req("staging", "Select your current sales staging.");
  req("pillars", "Select at least one infrastructure pillar.");
  req("brief", "Outline the project milestones and objectives.");

  const email = v.email.trim().toLowerCase();
  const domain = email.split("@")[1] ?? "";
  if (!email) e.email = "Enter your corporate email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email address.";
  else if (BLOCKED_EMAIL_DOMAINS.includes(domain)) e.email = "Free webmail is not accepted. Use your developer corporate domain.";
  return e;
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const uid = useId();

  const set = <K extends keyof Values>(k: K, v: Values[K]) => {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((s) => ({ ...s, [k]: undefined }));
  };
  const toggle = (k: "typologies" | "pillars", item: string) =>
    set(k, values[k].includes(item) ? values[k].filter((i) => i !== item) : [...values[k], item]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus();
      return;
    }
    setStatus("sending");
    setServerError("");
    try {
      const res = await fetch("/api/rfp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error || "Submission failed.");
      setStatus("sent");
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Submission failed. Email sales@manzili.sa directly.");
    }
  }

  const id = (k: string) => `${uid}-${k}`;

  return (
    <div className="relative overflow-hidden rounded-card bg-white shadow-card ring-1 ring-ink/5">
      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex min-h-[520px] flex-col items-center justify-center p-8 text-center sm:p-12"
            role="status"
          >
            <motion.span
              initial={{ scale: 0.4 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="grid grid-cols-1 size-16 place-items-center rounded-full bg-status text-white shadow-[0_12px_30px_-10px_rgba(16,185,129,0.6)]"
            >
              <Icon name="check" size={30} strokeWidth={2.5} />
            </motion.span>
            <h3 className="mt-6 text-h3 font-bold text-ink">Enterprise RFP received</h3>
            <p className="mt-3 max-w-[46ch]">
              Our commercial partnership directors in Riyadh will review {values.project || "your project"} and respond with a
              technical scoping memorandum within 2 operational business days.
            </p>
            <button
              type="button"
              onClick={() => {
                setValues(initial);
                setStatus("idle");
              }}
              className="mt-8 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              Submit another project
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="scroll-mt-28 p-6 sm:p-8 lg:p-10"
            aria-describedby={id("desc")}
          >
            <h2 className="text-h3 font-bold text-ink">{f.title}</h2>
            <p id={id("desc")} className="mt-2 max-w-[62ch] text-[15px]">
              {f.description}
            </p>

            {/* honeypot */}
            <div aria-hidden="true" className="absolute -left-[9999px]">
              <label>
                Company website
                <input tabIndex={-1} autoComplete="off" value={values.company_website} onChange={(e) => set("company_website", e.target.value)} />
              </label>
            </div>

            <Group n="01" title="Corporate Counterparty Verification">
              <Field id={id("name")} label="Full Legal Executive Name" error={errors.name}>
                <input data-field="name" id={id("name")} className={input(errors.name)} placeholder="First and Last Name" autoComplete="name" value={values.name} onChange={(e) => set("name", e.target.value)} />
              </Field>
              <Field id={id("email")} label="Corporate Email Address" error={errors.email} hint="Official developer corporate domain only. Free webmail (@gmail, @yahoo) is rejected.">
                <input data-field="email" id={id("email")} type="email" className={input(errors.email)} placeholder="name@developer.sa" autoComplete="email" value={values.email} onChange={(e) => set("email", e.target.value)} />
              </Field>
              <Field id={id("role")} label="Executive Title & Commercial Role" error={errors.role}>
                <Select data-field="role" id={id("role")} value={values.role} onChange={(v) => set("role", v)} options={f.roles} error={errors.role} />
              </Field>
              <Field id={id("phone")} label="Direct Mobile / Office Line" error={errors.phone}>
                <input data-field="phone" id={id("phone")} type="tel" className={input(errors.phone)} placeholder="+966 5X XXX XXXX" autoComplete="tel" value={values.phone} onChange={(e) => set("phone", e.target.value)} />
              </Field>
              <Field id={id("entity")} label="Real Estate Enterprise / Development Entity" error={errors.entity} wide>
                <input data-field="entity" id={id("entity")} className={input(errors.entity)} placeholder="Legal Commercial Entity Name" autoComplete="organization" value={values.entity} onChange={(e) => set("entity", e.target.value)} />
              </Field>
            </Group>

            <Group n="02" title="Development Scope & Asset Typology">
              <Field id={id("project")} label="Primary Masterplan / Project Name" error={errors.project}>
                <input data-field="project" id={id("project")} className={input(errors.project)} placeholder="Project / Master Development Name" value={values.project} onChange={(e) => set("project", e.target.value)} />
              </Field>
              <Field id={id("location")} label="Development Location in Kingdom" error={errors.location}>
                <Select data-field="location" id={id("location")} value={values.location} onChange={(v) => set("location", v)} options={f.locations} error={errors.location} />
              </Field>
              <Field id={id("scale")} label="Total Development Scale" error={errors.scale} wide>
                <Radios name="scale" field="scale" value={values.scale} onChange={(v) => set("scale", v)} options={f.scales} />
              </Field>
              <Field id={id("typologies")} label="Asset Typology Mix" error={errors.typologies} hint="Select all that apply." wide>
                <Chips field="typologies" options={f.typologies} selected={values.typologies} onToggle={(i) => toggle("typologies", i)} />
              </Field>
            </Group>

            <Group n="03" title="Regulatory Status & Commercial Horizon">
              <Field id={id("wafi")} label="Wafi Off-Plan Regulatory Status" error={errors.wafi} wide>
                <Radios name="wafi" field="wafi" value={values.wafi} onChange={(v) => set("wafi", v)} options={f.wafi} />
              </Field>
              <Field id={id("launch")} label="Target Commercial Sales Launch Window" error={errors.launch}>
                <Select data-field="launch" id={id("launch")} value={values.launch} onChange={(v) => set("launch", v)} options={f.launch} error={errors.launch} />
              </Field>
              <Field id={id("staging")} label="Current Sales Staging Infrastructure" error={errors.staging}>
                <Select data-field="staging" id={id("staging")} value={values.staging} onChange={(v) => set("staging", v)} options={f.staging} error={errors.staging} />
              </Field>
            </Group>

            <Group n="04" title="Technical & Operational Scope">
              <Field id={id("pillars")} label="Infrastructure Pillars Required" error={errors.pillars} hint="Select all that apply." wide>
                <Chips field="pillars" options={f.pillars} selected={values.pillars} onToggle={(i) => toggle("pillars", i)} stacked />
              </Field>
              <Field id={id("integrations")} label="Target Enterprise Software Integrations" optional wide>
                <input id={id("integrations")} className={input()} placeholder="e.g., Salesforce Real Estate Cloud, Yardi Voyager, SAP, Custom ERP" value={values.integrations} onChange={(e) => set("integrations", e.target.value)} />
              </Field>
              <Field id={id("brief")} label="Strategic Scoping Brief / Masterplan Context" error={errors.brief} wide>
                <textarea
                  data-field="brief"
                  id={id("brief")}
                  rows={5}
                  className={cn(input(errors.brief), "h-auto resize-y py-3")}
                  placeholder="Outline key development milestones, architectural scale, and primary commercial objectives for this project."
                  value={values.brief}
                  onChange={(e) => set("brief", e.target.value)}
                />
              </Field>
            </Group>

            {status === "error" && (
              <p role="alert" className="mt-8 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                {serverError}
              </p>
            )}
            {Object.values(errors).some(Boolean) && (
              <p role="alert" className="mt-8 rounded-xl bg-accent/10 px-4 py-3 text-sm font-semibold text-accent-hover">
                Some required fields need attention before submission.
              </p>
            )}

            <div className="mt-8 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-muted">
                <Icon name="shield" size={15} className="text-status" />
                {f.trust.join(" • ")}
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-accent to-accent-soft pe-2 ps-6 text-[15px] font-semibold text-white shadow-glow-orange transition-all hover:from-accent-hover hover:to-accent disabled:opacity-70"
              >
                {status === "sending" ? "Submitting…" : f.submit}
                <span className="grid grid-cols-1 size-8 place-items-center rounded-full bg-white text-accent transition-transform group-hover:translate-x-0.5">
                  {status === "sending" ? (
                    <span className="size-4 animate-spin rounded-full border-2 border-accent border-t-transparent" />
                  ) : (
                    <Icon name="arrowRight" size={16} />
                  )}
                </span>
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- field primitives ---------- */

const input = (error?: string) =>
  cn(
    "h-12 w-full rounded-xl border bg-page px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-muted focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10",
    error ? "border-red-400" : "border-line",
  );

function Group({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <fieldset className="mt-10 border-t border-line pt-8">
      <legend className="sr-only">{title}</legend>
      <div className="mb-6 flex items-center gap-3" aria-hidden="true">
        <span className="grid grid-cols-1 size-9 place-items-center rounded-full bg-brand text-sm font-bold text-white">{n}</span>
        <span className="text-h4 font-semibold text-ink">{title}</span>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

function Field({
  id,
  label,
  error,
  hint,
  optional,
  wide,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={cn(wide && "sm:col-span-2")}>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between gap-3 text-sm font-semibold text-ink">
        <span>
          {label}
          {!optional && <span className="text-accent"> *</span>}
        </span>
        {optional && <span className="text-xs font-medium text-muted">Optional</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-muted">{hint}</p>}
      {error && (
        <p className="mt-1.5 text-xs font-semibold text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function Select({
  id,
  value,
  onChange,
  options,
  error,
  ...rest
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  error?: string;
  "data-field"?: string;
}) {
  return (
    <div className="relative">
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={cn(input(error), "appearance-none pe-10", !value && "text-muted")} {...rest}>
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-ink">
            {o}
          </option>
        ))}
      </select>
      <Icon name="chevronDown" size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted" />
    </div>
  );
}

function Radios({ name, field, value, onChange, options }: { name: string; field: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div role="radiogroup" className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {options.map((o, i) => {
        const active = value === o;
        return (
          <label
            key={o}
            className={cn(
              "flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-sm transition-all",
              active ? "border-brand bg-brand-light/70 font-semibold text-ink" : "border-line bg-page text-body hover:border-brand/40",
            )}
          >
            <input
              type="radio"
              name={name}
              value={o}
              checked={active}
              onChange={() => onChange(o)}
              data-field={i === 0 ? field : undefined}
              className="peer sr-only"
            />
            <span className={cn("mt-0.5 grid grid-cols-1 size-4 shrink-0 place-items-center rounded-full border-2 peer-focus-visible:ring-4 peer-focus-visible:ring-brand/20", active ? "border-brand" : "border-muted")}>
              {active && <span className="size-1.5 rounded-full bg-brand" />}
            </span>
            {o}
          </label>
        );
      })}
    </div>
  );
}

function Chips({ field, options, selected, onToggle, stacked }: { field: string; options: string[]; selected: string[]; onToggle: (o: string) => void; stacked?: boolean }) {
  return (
    <div className={cn(stacked ? "grid gap-2 sm:grid-cols-2" : "flex flex-wrap gap-2")}>
      {options.map((o, i) => {
        const active = selected.includes(o);
        return (
          <label
            key={o}
            className={cn(
              "flex cursor-pointer items-start gap-2.5 rounded-xl border px-3.5 py-2.5 text-sm transition-all",
              active ? "border-brand bg-brand text-white" : "border-line bg-page text-body hover:border-brand/40",
            )}
          >
            <input type="checkbox" checked={active} onChange={() => onToggle(o)} data-field={i === 0 ? field : undefined} className="peer sr-only" />
            <span className={cn("mt-0.5 grid grid-cols-1 size-4 shrink-0 place-items-center rounded border peer-focus-visible:ring-4 peer-focus-visible:ring-brand/30", active ? "border-white bg-white text-brand" : "border-muted")}>
              {active && <Icon name="check" size={11} strokeWidth={3} />}
            </span>
            <span className={cn(active && "font-semibold")}>{o}</span>
          </label>
        );
      })}
    </div>
  );
}
