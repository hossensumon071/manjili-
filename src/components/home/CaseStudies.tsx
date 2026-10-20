import Link from "next/link";
import type { Cta, Head } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SceneFrame, type SceneVariant } from "@/components/art/IsoScene";

type Card = { tag: string; client: string; title: string; location: string; body: string; badge: string; link: Cta };

const SCENES: Record<string, { variant: SceneVariant; seed: number }> = {
  "nhc-alwareef": { variant: "suburb", seed: 9 },
  "thee-erth": { variant: "masterplan", seed: 3 },
  "masar-maab": { variant: "towers", seed: 6 },
};
const sceneFor = (href: string) => SCENES[href.split("/").pop() ?? ""] ?? { variant: "masterplan" as SceneVariant, seed: 1 };

/** Homepage case preview (#case-studies): Tag · Client · Project · Location · outcome · one badge · link. */
export function CaseStudies({ c }: { c: Head & { cta: Cta; cards: Card[] } }) {
  return (
    <section id="case-studies" className="scroll-mt-32 pb-24 sm:pb-32" aria-labelledby="cases-title">
      <div className="container-x">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">{c.eyebrow}</p>
            <h2 id="cases-title" className="h-section mt-4 max-w-[24ch]">
              {c.title}
            </h2>
          </div>
          <Button href={c.cta.href} variant="primary" className="w-fit shrink-0">
            {c.cta.label}
          </Button>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {c.cards.map((card, i) => (
            <Reveal key={card.link.href} delay={i * 0.1}>
              <Link
                href={card.link.href}
                className="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-float"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]">
                    <SceneFrame {...sceneFor(card.link.href)} density="card" className="h-full w-full" />
                  </div>
                  <span className="absolute start-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-ink shadow-[0_6px_16px_-6px_rgba(55,53,53,0.45)] ring-1 ring-ink/5">
                    {card.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold text-accent-dark">{card.client}</p>
                  <h3 className="mt-2 text-h3 font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
                    <Icon name="mapPin" size={15} />
                    {card.location}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed">{card.body}</p>
                  <p className="mt-5 w-fit rounded-full bg-brand-light px-3 py-1.5 text-xs font-semibold text-brand-dark">{card.badge}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-dark">
                    {card.link.label}
                    <Icon name="arrowRight" size={15} className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
