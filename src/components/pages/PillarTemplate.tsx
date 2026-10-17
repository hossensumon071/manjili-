import type { PillarPageData } from "@/content/pillars/types";
import { routes } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { StatusPanel } from "@/components/sections/StatusPanel";
import { FeatureRows } from "@/components/sections/FeatureRows";
import { ToursShowcase } from "@/components/sections/ToursShowcase";
import { ProofCards } from "@/components/sections/ProofCards";
import { StepsGrid } from "@/components/sections/StepsGrid";
import { DataTable } from "@/components/sections/DataTable";
import { FaqSection } from "@/components/sections/FaqSection";
import { PillarNav } from "@/components/sections/PillarNav";
import { ConversionCta } from "@/components/sections/ConversionCta";

/** One template renders all six pillar pages from their data files. */
export function PillarTemplate({ data }: { data: PillarPageData }) {
  const { hero } = data;
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: routes.home }, { label: "Solutions", href: routes.solutions }, { label: hero.crumb }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subheader={hero.subheader}
        primary={hero.primary}
        secondary={hero.secondary}
        status={hero.status}
        visual={<StatusPanel {...hero.panel} />}
      />

      <FeatureRows id="architecture" {...data.architecture} />

      {data.tours && <ToursShowcase id="tours" {...data.tours} />}

      <ProofCards {...data.proof} />

      {data.pipeline && <StepsGrid {...data.pipeline} />}

      {data.matrix && <DataTable id="matrix" {...data.matrix} />}

      <FaqSection eyebrow={data.faq.eyebrow} headline={data.faq.headline} items={data.faq.items} />

      <PillarNav current={data.href} eyebrow={data.nav.eyebrow} ctaLabel={data.nav.ctaLabel} />

      <ConversionCta
        badge={data.conversion.trust}
        headline={data.conversion.headline}
        body={data.conversion.body}
        primary={data.conversion.primary}
      />
    </>
  );
}
