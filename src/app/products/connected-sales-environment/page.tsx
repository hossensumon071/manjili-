import type { Metadata } from "next";
import { csePage } from "@/content/pages/cse";
import { routes } from "@/content/site";
import { images } from "@/content/images";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureRows } from "@/components/sections/FeatureRows";
import { DataTable } from "@/components/sections/DataTable";
import { FaqSection } from "@/components/sections/FaqSection";
import { ConversionCta } from "@/components/sections/ConversionCta";
import { Media } from "@/components/ui/Media";
import { CseMockup } from "@/components/mockups/CseMockup";
import { EcosystemStrip, TelemetrySection } from "@/components/pages/CseSections";

export const metadata: Metadata = {
  title: csePage.meta.title,
  description: csePage.meta.description,
  alternates: { canonical: routes.cse },
};

export default function CsePage() {
  const { hero } = csePage;
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: routes.home }, { label: "Products" }, { label: hero.crumb }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subheader={hero.subheader}
        primary={hero.primary}
        secondary={hero.secondary}
        status={hero.status}
        visual={
          <Media
            src={images.cse}
            alt="Connected Sales Environment showing live masterplan inventory and unit financing"
            fallback={<CseMockup />}
            className="aspect-[4/3.3] rounded-[22px] border border-white/15 shadow-float sm:aspect-auto sm:h-[480px]"
            sizes="(min-width: 1024px) 560px, 100vw"
            priority
          />
        }
      />
      <FeatureRows id="capabilities" {...csePage.capabilities} />
      <TelemetrySection />
      <DataTable id="comparison" {...csePage.comparison} highlight={2} />
      <FaqSection eyebrow={csePage.faq.eyebrow} headline={csePage.faq.headline} items={csePage.faq.items} />
      <EcosystemStrip />
      <ConversionCta
        badge={csePage.conversion.trust}
        headline={csePage.conversion.headline}
        body={csePage.conversion.body}
        primary={csePage.conversion.primary}
      />
    </>
  );
}
