import { getPillar } from "@/content/copy";
import { panelStateLabels, pillarPanel } from "@/content/pillarPanels";
import type { Locale } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { StatusPanel } from "@/components/sections/StatusPanel";
import { FeatureRows } from "@/components/sections/FeatureRows";
import { ProofCards } from "@/components/sections/ProofCards";
import { StepsGrid } from "@/components/sections/StepsGrid";
import { DataTable } from "@/components/sections/DataTable";
import { ToursShowcase } from "@/components/sections/ToursShowcase";
import { FaqSection } from "@/components/sections/FaqSection";
import { PillarNav } from "@/components/sections/PillarNav";
import { ConversionCta } from "@/components/sections/ConversionCta";

/** One template for all six pillar pages (copy file Part 3), English or Arabic. */
export function PillarView({ locale, n }: { locale: Locale; n: 1 | 2 | 3 | 4 | 5 | 6 }) {
  const c = getPillar(locale, n);
  const panel = pillarPanel(locale, n); // decorative product mock-up
  const proof = (
    <ProofCards eyebrow={c.proof.eyebrow} title={c.proof.title} items={c.proof.cards.map((x) => ({ metric: x.chip, title: x.title, body: x.body }))} />
  );
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
          <div aria-hidden="true">
            <StatusPanel {...panel} stateLabels={panelStateLabels[locale]} />
          </div>
        }
      />
      <FeatureRows
        id="architecture"
        eyebrow={c.architecture.eyebrow}
        title={c.architecture.title}
        lead={c.architecture.body ?? ""}
        features={c.architecture.blocks.map((b) => ({ index: b.index, tag: b.tag, title: b.title, subtitle: b.subtitle, body: b.body, bullets: b.bullets }))}
      />
      {c.tours ? (
        <>
          <ToursShowcase
            id="tours"
            eyebrow={c.tours.eyebrow}
            title={c.tours.title}
            lead={c.tours.body ?? ""}
            tours={c.tours.cards.map((t) => ({ title: t.title, type: t.tag, description: t.body, previewLabel: t.label, embedUrl: "" }))}
          />
          {proof}
        </>
      ) : (
        proof
      )}
      {c.steps && <StepsGrid eyebrow={c.steps.eyebrow} title={c.steps.title} steps={c.steps.steps} />}
      {c.matrix && <DataTable id="matrix" eyebrow={c.matrix.eyebrow} title={c.matrix.title} lead={c.matrix.body} columns={c.matrix.columns} rows={c.matrix.rows} />}
      <FaqSection locale={locale} items={c.faq} />
      <PillarNav {...c.nav} />
      <ConversionCta
        badge={[c.banner.eyebrow]}
        headline={c.banner.title}
        body={c.banner.body ?? ""}
        primary={c.banner.primary}
        secondary={c.banner.secondary}
      />
    </>
  );
}
