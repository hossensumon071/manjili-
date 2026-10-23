import type { Head } from "@/content/copy";
import type { IconName } from "@/components/ui/Icon";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const ICONS: IconName[] = ["monitor", "unlink", "eye"];

export function ExecutionGap({ c }: { c: Head & { cards: Record<string, string>[] } }) {
  const problem = c;
  return (
    <section className="py-24 sm:py-32" aria-labelledby="gap-title">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">{problem.eyebrow}</p>
          <h2 id="gap-title" className="h-section mt-4 max-w-[20ch]">
            {problem.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {problem.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-card border border-white bg-white shadow-card transition-shadow duration-500 hover:shadow-float">
                <div className="relative h-28 overflow-hidden bg-gradient-to-b from-brand-light/70 to-white sm:h-44">
                  {/* Soft ripple rings — the "signal lost" motif from the design */}
                  <div
                    aria-hidden="true"
                    className="absolute -right-24 -top-28 size-[22rem] opacity-30 blur-[1px] transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-100"
                    style={{
                      background:
                        "repeating-radial-gradient(circle at center, rgba(6,154,215,0) 0 22px, rgba(6,154,215,0.45) 30px, rgba(6,154,215,0) 44px)",
                      maskImage: "radial-gradient(circle at center, #000 30%, transparent 70%)",
                      WebkitMaskImage: "radial-gradient(circle at center, #000 30%, transparent 70%)",
                    }}
                  />
                  <span className="absolute start-5 top-5 grid grid-cols-1 size-10 place-items-center rounded-full bg-accent text-white shadow-glow-orange">
                    <Icon name={ICONS[i % 3]} size={18} />
                  </span>
                  <span className="absolute end-5 top-6 font-display text-sm font-semibold text-muted">{card.number}</span>
                </div>
                <div className="p-6 pt-2">
                  <h3 className="text-h4 font-semibold text-ink">{card.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-body">{card.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
