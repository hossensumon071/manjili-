import type { Metadata } from "next";
import { solutions } from "@/content/pages/solutions";
import { pillars, routes } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { StatusPanel } from "@/components/sections/StatusPanel";
import { DataTable } from "@/components/sections/DataTable";
import { FaqSection } from "@/components/sections/FaqSection";
import { ConversionCta } from "@/components/sections/ConversionCta";
import { SolutionsPillarGrid, ThesisSection } from "@/components/pages/SolutionsSections";

export const metadata: Metadata = {
  title: solutions.meta.title,
  description: solutions.meta.description,
  alternates: { canonical: routes.solutions },
};

export default function SolutionsPage() {
  const { hero } = solutions;
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: routes.home }, { label: "Solutions" }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subheader={hero.subheader}
        primary={hero.primary}
        secondary={hero.secondary}
        status={hero.status}
        visual={
          <StatusPanel
            title="Master Service Agreement · 6 pillars"
            live="1 counterparty"
            items={pillars.map((p, i) => ({
              icon: p.icon,
              label: p.title,
              meta: solutions.pillars.items[i].metric,
              state: i === 4 ? ("active" as const) : ("ok" as const),
            }))}
            footer="Single-point accountability from pre-launch to 100% sell-out"
          />
        }
      />
      <ThesisSection />
      <SolutionsPillarGrid />
      <DataTable id="comparison" {...solutions.comparison} highlight={2} />
      <FaqSection eyebrow={solutions.faq.eyebrow} headline={solutions.faq.headline} items={solutions.faq.items} />
      <ConversionCta
        badge={solutions.conversion.trust}
        headline={solutions.conversion.headline}
        body={solutions.conversion.body}
        primary={solutions.conversion.primary}
      />
    </>
  );
}
