import { home } from "@/content/home";
import { caseHref, getCaseStudy } from "@/content/case-studies";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CaseCard } from "@/components/case-studies/CaseCard";

const { caseStudies } = home;
const featured = ["masar-maab", "dyari-signature"].map((s) => getCaseStudy(s)!).filter(Boolean);

export function CaseStudies() {
  return (
    <section className="pb-24 sm:pb-32" aria-labelledby="cases-title">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow text-center">{caseStudies.eyebrow}</p>
          <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="cases-title" className="h-section max-w-[24ch]">
              {caseStudies.headline}
            </h2>
            <Button href={caseStudies.cta.href} variant="accent" className="w-fit shrink-0">
              {caseStudies.cta.label}
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {featured.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.12}>
              <CaseCard
                data={{
                  href: caseHref(c.slug),
                  badge: c.card.badge,
                  client: c.card.client,
                  project: c.card.project,
                  location: c.card.location,
                  summary: c.card.summary,
                  metrics: c.card.metrics.slice(0, 2),
                  scene: c.scene,
                }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
