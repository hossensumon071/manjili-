import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Sheen } from "@/components/ui/Sheen";
import { SectionHeader } from "@/components/sections/SectionHeader";
type CaseMetric = { value: string; label: string; title?: string; body: string; outcome?: string };

/** Project metadata strip directly under the hero. */
export function MetadataGrid({ items }: { items: { label: string; value: string }[] }) {
  return (
    <section className="relative z-10 -mt-px pt-10 sm:pt-14">
      <div className="container-x">
        <Reveal>
          <div className="overflow-hidden rounded-card bg-white shadow-card ring-1 ring-ink/5">
          <dl className="-mb-px -mr-px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((m) => (
              <div key={m.label} className="border-b border-r border-line p-5 sm:p-6">
                <dt className="text-xs font-semibold text-muted">{m.label}</dt>
                <dd className="mt-1.5 text-[15px] font-semibold leading-snug text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Three risk cards for the mandate section. */
export function RiskCards({ eyebrow, title, lead, risks }: { eyebrow: string; title: string; lead: string; risks: { title: string; category: string; body: string }[] }) {
  return (
    <section className="py-24 sm:py-32" aria-label={title}>
      <div className="container-x">
        <SectionHeader eyebrow={eyebrow} title={title} lead={lead} />
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {risks.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-card bg-white p-6 shadow-card ring-1 ring-ink/5 sm:p-7">
                <div
                  aria-hidden="true"
                  className="absolute -right-24 -top-24 size-72 opacity-25 transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
                  style={{
                    background: "repeating-radial-gradient(circle, rgba(242,142,33,0) 0 20px, rgba(242,142,33,.25) 26px, rgba(242,142,33,0) 38px)",
                    maskImage: "radial-gradient(circle, #000 30%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(circle, #000 30%, transparent 70%)",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="grid grid-cols-1 size-10 place-items-center rounded-full bg-accent text-white shadow-glow-orange">
                      <Icon name="activity" size={18} />
                    </span>
                    <span className="text-sm font-bold text-muted">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-6 text-xs font-semibold text-accent-dark">{r.category}</p>
                  <h3 className="mt-1.5 text-h4 font-semibold text-ink">{r.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed">{r.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** 2×2 feature cards (format B solutions). */
export function SolutionCards({ id, eyebrow, title, lead, cards }: { id?: string; eyebrow: string; title: string; lead: string; cards: { title: string; points: string[] }[] }) {
  return (
    <section id={id} className="scroll-mt-32 py-24 sm:py-32" aria-label={title}>
      <div className="container-x">
        <SectionHeader eyebrow={eyebrow} title={title} lead={lead} />
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.08}>
              <article className="group h-full rounded-card bg-white p-6 shadow-card ring-1 ring-ink/5 transition-shadow duration-500 hover:shadow-float sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="grid grid-cols-1 size-11 place-items-center rounded-xl bg-brand-light text-brand-dark transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                    <Icon name={(["cube", "map", "monitor", "globe"] as const)[i % 4]} size={20} />
                  </span>
                  <span aria-hidden="true" className="text-3xl font-extrabold text-ink/10">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 text-h3 font-semibold text-ink">{c.title}</h3>
                <ul className="mt-4 space-y-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-relaxed">
                      <span className="mt-1 grid grid-cols-1 size-5 shrink-0 place-items-center rounded-full bg-brand-dark text-white">
                        <Icon name="check" size={11} strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Four-metric impact band. */
export function ImpactMetrics({ eyebrow, title, lead, metrics, outcomePrefix = "Outcome:" }: { eyebrow: string; title: string; lead?: string; metrics: CaseMetric[]; outcomePrefix?: string }) {
  return (
    <section className="px-2 sm:px-3" aria-label={title}>
      <div className="stage surface-blue">
        <Sheen />
        <div className="container-x py-20 sm:py-24">
          <SectionHeader eyebrow={eyebrow} title={title} lead={lead} tone="dark" />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <Reveal key={m.label + i} delay={i * 0.08}>
                <article className="glass flex h-full flex-col rounded-card p-6">
                  <p className="text-[clamp(2rem,3.2vw,2.75rem)] font-extrabold leading-none tracking-[-0.03em] text-white">{m.value}</p>
                  <p className="mt-3 text-sm font-semibold text-[#FFFFFF]">{m.label}</p>
                  <span className="my-5 h-px w-10 bg-white/30" aria-hidden="true" />
                  {m.title && <h3 className="text-h4 font-semibold text-white">{m.title}</h3>}
                  <p className={cn("text-sm leading-relaxed text-white/95", m.title && "mt-2")}>{m.body}</p>
                  {m.outcome && (
                    <p className="mt-auto border-t border-white/15 pt-4 text-sm leading-relaxed text-white">
                      <span className="font-semibold">{outcomePrefix} </span>
                      {m.outcome}
                    </p>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Executive endorsement. */
export function QuoteBlock({ text, name, role, context }: { text: string; name: string; role: string; context: string }) {
  return (
    <section className="pb-24 sm:pb-32" aria-label="Executive endorsement">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-card bg-white p-8 shadow-card ring-1 ring-ink/5 sm:p-12 lg:p-16">
          <svg aria-hidden="true" viewBox="0 0 64 48" className="absolute right-8 top-8 h-16 w-20 text-brand-light sm:h-24 sm:w-32">
            <path fill="currentColor" d="M0 48V28C0 12 8 2 24 0l3 7C18 10 14 16 14 24h12v24H0Zm37 0V28c0-16 8-26 24-28l3 7c-9 3-13 9-13 17h12v24H37Z" />
          </svg>
          <blockquote className="relative max-w-[60ch] text-[clamp(1.2rem,2.1vw,1.65rem)] font-semibold leading-[1.5] text-ink">
            “{text}”
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <span className="grid grid-cols-1 size-12 place-items-center rounded-full bg-brand-dark text-white">
              <Icon name="building" size={20} />
            </span>
            <div>
              <p className="font-bold text-ink">{name}</p>
              <p className="text-sm text-body">{role}</p>
              <p className="text-xs text-muted">{context}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
