import { getPlatform } from "@/content/copy";
import { globalCopy, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureRows } from "@/components/sections/FeatureRows";
import { DataTable } from "@/components/sections/DataTable";
import { FaqSection } from "@/components/sections/FaqSection";
import { SharedCtaBanner } from "@/components/sections/SharedCtaBanner";
import { Media } from "@/components/ui/Media";
import { CseMockup } from "@/components/mockups/CseMockup";
import { EcosystemStrip, TelemetrySection } from "@/components/pages/CseSections";

export function PlatformView({ locale }: { locale: Locale }) {
  const c = getPlatform(locale);
  const shared = globalCopy(locale).faq.shared;
  return (
    <>
      <PageHero
        breadcrumb={c.hero.crumbs}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subheader={c.hero.body}
        primary={c.hero.primary}
        secondary={c.hero.secondary}
        status={c.hero.chips}
        visual={
          <Media
            alt=""
            fallback={<CseMockup />}
            className="aspect-[4/3.3] rounded-[22px] border border-white/15 shadow-float sm:aspect-auto sm:h-[480px]"
            sizes="(min-width: 1024px) 560px, 100vw"
            priority
          />
        }
      />
      <FeatureRows
        id="capabilities"
        eyebrow={c.capabilities.eyebrow}
        title={c.capabilities.title}
        lead={c.capabilities.body ?? ""}
        features={c.capabilities.blocks.map((b) => ({ index: b.index, tag: b.tag, title: b.title, subtitle: b.subtitle, body: b.body, bullets: b.bullets }))}
      />
      <TelemetrySection c={c.telemetry} />
      <DataTable id="comparison" eyebrow={c.comparison.eyebrow} title={c.comparison.title} lead={c.comparison.body} columns={c.comparison.columns} rows={c.comparison.rows} highlight={2} />
      <FaqSection locale={locale} items={[...shared, ...c.extraFaq]} />
      <EcosystemStrip c={c.powered} />
      <SharedCtaBanner locale={locale} />
    </>
  );
}
