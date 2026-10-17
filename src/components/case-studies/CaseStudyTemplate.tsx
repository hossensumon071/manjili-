import { caseHref, caseStudies, type CaseStudy } from "@/content/case-studies";
import { routes } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureRows } from "@/components/sections/FeatureRows";
import { DataTable } from "@/components/sections/DataTable";
import { StepsGrid } from "@/components/sections/StepsGrid";
import { ConversionCta } from "@/components/sections/ConversionCta";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SceneFrame } from "@/components/art/IsoScene";
import { Reveal } from "@/components/ui/Reveal";
import { CaseCard } from "./CaseCard";
import { ImpactMetrics, MetadataGrid, QuoteBlock, RiskCards, SolutionCards } from "./CaseSections";

/** One template renders every case study from its data file. */
export function CaseStudyTemplate({ cs }: { cs: CaseStudy }) {
  const more = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 3);
  // Rotate so each page shows different neighbours
  const idx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const neighbours = [1, 2, 3].map((o) => caseStudies[(idx + o) % caseStudies.length]).filter((c) => c.slug !== cs.slug);

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: routes.home }, { label: "Case Studies", href: routes.caseStudies }, { label: cs.hero.crumb }]}
        eyebrow={cs.hero.eyebrow}
        title={cs.hero.title}
        subheader={cs.hero.subheader}
        primary={{ label: "Schedule Case Review", href: routes.contact }}
        secondary={{ label: "Inspect Tech Architecture", href: "#solution" }}
        status={cs.hero.status}
        visual={
          <SceneFrame
            variant={cs.scene.variant}
            seed={cs.scene.seed}
            label={cs.scene.label}
            chips={cs.scene.chips}
            className="aspect-[4/3.2] rounded-[22px] border border-white/20 shadow-float"
          />
        }
      />

      <MetadataGrid items={cs.metadata} />

      {cs.challenge.risks ? (
        <RiskCards eyebrow={cs.challenge.eyebrow} title={cs.challenge.title} lead={cs.challenge.lead} risks={cs.challenge.risks} />
      ) : (
        <DataTable
          eyebrow={cs.challenge.eyebrow}
          title={cs.challenge.title}
          lead={cs.challenge.lead}
          columns={["Conventional Sales Friction", "The Commercial Risk", "Manzili Engineered Intervention"]}
          rows={cs.challenge.friction ?? []}
          highlight={2}
        />
      )}

      {cs.solution.features ? (
        <div className={cs.challenge.risks ? "-mt-24 sm:-mt-32" : "-mt-24 sm:-mt-32"}>
          <FeatureRows id="solution" eyebrow={cs.solution.eyebrow} title={cs.solution.title} lead={cs.solution.lead} features={cs.solution.features} />
        </div>
      ) : (
        <div className="-mt-24 sm:-mt-32">
          <SolutionCards id="solution" eyebrow={cs.solution.eyebrow} title={cs.solution.title} lead={cs.solution.lead} cards={cs.solution.cards ?? []} />
        </div>
      )}

      {cs.enablement && (
        <div className="-mt-24 sm:-mt-32">
          <StepsGrid eyebrow={cs.enablement.eyebrow} title={cs.enablement.title} steps={cs.enablement.steps} lead={cs.enablement.lead} />
        </div>
      )}

      <ImpactMetrics {...cs.impact} />

      <DataTable
        eyebrow={cs.governance.eyebrow}
        title={cs.governance.title}
        columns={["Enterprise Axis", "Standard Deployed", "Operational Impact"]}
        rows={cs.governance.rows}
      />

      {cs.quote && <QuoteBlock {...cs.quote} />}

      <section className="pb-24 sm:pb-32" aria-label="More case studies">
        <div className="container-x">
          <SectionHeader eyebrow="More Deployments" title="Explore Further Case Studies" layout="stack" />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {(neighbours.length ? neighbours : more).map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08}>
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

      <ConversionCta
        badge={cs.conversion.trust}
        headline={cs.conversion.headline}
        body={cs.conversion.body}
        primary={{ label: cs.conversion.primary, href: routes.contact }}
        secondary={cs.conversion.secondary ? { label: cs.conversion.secondary, href: routes.solutions } : undefined}
      />
    </>
  );
}
