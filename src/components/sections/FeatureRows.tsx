import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "./SectionHeader";

export type Feature = {
  index?: string;
  tag: string;
  title: string;
  subtitle?: string;
  body: string;
  bullets: { title: string; body: string }[];
};

type Props = {
  id?: string;
  eyebrow: string;
  title: string;
  lead: string;
  features: Feature[];
};

/** Capability blocks: narrative on the left, spec checklist on the right. */
export function FeatureRows({ id, eyebrow, title, lead, features }: Props) {
  return (
    <section id={id} className="scroll-mt-32 py-24 sm:py-32" aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="container-x">
        <SectionHeader eyebrow={eyebrow} title={title} lead={lead} id={id ? `${id}-title` : undefined} />

        <div className="mt-14 space-y-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.05}>
              <article className="group grid grid-cols-1 gap-8 rounded-card bg-white p-6 shadow-card ring-1 ring-ink/5 transition-shadow duration-500 hover:shadow-float sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-10">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-bold text-muted">{f.index ?? String(i + 1).padStart(2, "0")}</span>
                    <span className="rounded-full bg-brand-light px-3 py-1 text-eyebrow font-semibold text-brand-dark">{f.tag}</span>
                  </div>
                  <h3 className="mt-5 text-h3 font-semibold text-ink">{f.title}</h3>
                  {f.subtitle && <p className="mt-1.5 text-sm font-semibold text-accent-dark">{f.subtitle}</p>}
                  <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed">{f.body}</p>
                </div>
                <ul className="space-y-3 self-center rounded-2xl bg-page p-4 sm:p-5">
                  {f.bullets.map((b) => (
                    <li key={b.title} className="flex gap-3 rounded-xl bg-white p-4 ring-1 ring-ink/5">
                      <span className="mt-0.5 grid grid-cols-1 size-6 shrink-0 place-items-center rounded-full bg-brand-dark text-white">
                        <Icon name="check" size={13} strokeWidth={2.5} />
                      </span>
                      <span>
                        <span className="block text-[15px] font-semibold text-ink">{b.title}</span>
                        <span className="block text-sm leading-relaxed text-body">{b.body}</span>
                      </span>
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
