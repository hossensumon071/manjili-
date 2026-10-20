import { Reveal } from "@/components/ui/Reveal";
import { Sheen } from "@/components/ui/Sheen";
import { SectionHeader } from "./SectionHeader";

export type Proof = { metric: string; title: string; body: string };

type Props = { eyebrow: string; title: string; items: Proof[]; id?: string };

/** Commercial proof band: three outcomes, each led by its metric. */
export function ProofCards({ eyebrow, title, items, id }: Props) {
  return (
    <section id={id} className="scroll-mt-32 px-2 sm:px-3" aria-label={title}>
      <div className="stage surface-blue">
        <Sheen />
        <div className="container-x py-20 sm:py-24">
          <SectionHeader eyebrow={eyebrow} title={title} tone="dark" layout="stack" />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
            {items.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <article className="glass flex h-full flex-col rounded-card p-6 sm:p-7">
                  <p className="text-[clamp(1.6rem,2.6vw,2.1rem)] font-extrabold leading-tight tracking-[-0.02em] text-white">
                    {p.metric}
                  </p>
                  <span className="my-5 h-px w-12 bg-accent" aria-hidden="true" />
                  <h3 className="text-h4 font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/95">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
