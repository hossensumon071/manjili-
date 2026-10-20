import { getCase, getCaseIndex, getCaseTemplate } from "@/content/copy";
import { caseScenes } from "@/content/caseScenes";
import { globalCopy, lp, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureRows } from "@/components/sections/FeatureRows";
import { DataTable } from "@/components/sections/DataTable";
import { StepsGrid } from "@/components/sections/StepsGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { FaqSection } from "@/components/sections/FaqSection";
import { SharedCtaBanner } from "@/components/sections/SharedCtaBanner";
import { SceneFrame } from "@/components/art/IsoScene";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { CaseCard, type CaseCardData } from "@/components/case-studies/CaseCard";
import { CaseStudiesHub } from "@/components/case-studies/CaseStudiesHub";
import { ImpactMetrics, MetadataGrid, RiskCards, SolutionCards } from "@/components/case-studies/CaseSections";

/* eslint-disable @typescript-eslint/no-explicit-any */
const slugOf = (href: string) => href.split("/").pop()!;

export function caseCards(locale: Locale): (CaseCardData & { filters: number[]; slug: string })[] {
  const idx = getCaseIndex(locale);
  return idx.cards.map((c: any) => {
    const slug = slugOf(c.href);
    return {
      slug,
      href: lp(locale, `/case-studies/${slug}`),
      tag: c.tag,
      client: c.client,
      title: c.title,
      location: c.location,
      body: c.body,
      linkLabel: idx.cardLink,
      filters: c.filters,
      scene: caseScenes[slug],
    };
  });
}

/* ---------------- Case Studies index ---------------- */
export function CaseIndexView({ locale }: { locale: Locale }) {
  const idx = getCaseIndex(locale);
  const h = idx.hero;
  const std = idx.standards;
  return (
    <>
      <PageHero
        breadcrumb={h.crumbs}
        eyebrow={h.eyebrow}
        title={h.h1}
        subheader={h.subheadingBodyCopy}
        primary={{ label: h.primaryCta, href: h.primaryCtaHref }}
        status={h.specStrip}
        visual={<SceneFrame variant="masterplan" seed={31} className="aspect-[4/3.2] rounded-[22px] border border-white/20 shadow-float" />}
      />
      <CaseStudiesHub tabs={idx.tabs} cards={caseCards(locale)} counter={idx.counter} locale={locale} />
      <section className="pb-24 sm:pb-32" aria-labelledby="standards-title">
        <div className="container-x">
          <Reveal className="rounded-card bg-white p-6 shadow-card ring-1 ring-ink/5 sm:p-10">
            <p className="eyebrow">{std.eyebrow}</p>
            <h2 id="standards-title" className="mt-3 text-h3 font-semibold text-ink">
              {std.h2}
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {(std.item as string[]).map((body, i) => (
                <li key={i} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-light text-brand-dark">
                    <Icon name={(["shield", "rocket", "building"] as const)[i % 3]} size={20} />
                  </span>
                  <p className="text-[15px] leading-relaxed">{body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <SharedCtaBanner locale={locale} onCaseStudiesIndex />
    </>
  );
}

/* ---------------- Case study detail (templates A & B) ---------------- */
export function CaseStudyView({ locale, slug }: { locale: Locale; slug: string }) {
  const c = getCase(locale, slug);
  const t = getCaseTemplate(locale);
  const cards = caseCards(locale);
  const me = cards.find((x) => x.slug === slug)!;
  const order = cards.findIndex((x) => x.slug === slug);
  const related = [1, 2, 3].map((o) => cards[(order + o) % cards.length]);
  const scene = caseScenes[slug];
  const shared = globalCopy(locale).faq.shared;

  return (
    <>
      <PageHero
        breadcrumb={[
          { label: t.home, href: lp(locale, "/") },
          { label: t.cases, href: lp(locale, "/case-studies") },
          { label: me.title },
        ]}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subheader={c.hero.body}
        primary={{ label: t.primary, href: lp(locale, "/contact-us") }}
        secondary={{ label: t.secondary, href: "#solution" }}
        status={c.hero.chips}
        visual={
          <SceneFrame
            variant={scene.variant}
            seed={scene.seed}
            chips={c.hero.mockupChips}
            className="aspect-[4/3.2] rounded-[22px] border border-white/20 shadow-float"
          />
        }
      />

      <MetadataGrid items={(t.sidebar as string[]).map((label, i) => ({ label, value: c.sidebar[i] }))} />

      {c.template === "A" ? (
        <RiskCards eyebrow={c.challenge.eyebrow} title={c.challenge.title} lead={c.challenge.body} risks={c.challenge.cards} />
      ) : (
        <DataTable
          eyebrow={c.challenge.eyebrow}
          title={c.challenge.title}
          lead={c.challenge.body}
          columns={c.challenge.header}
          rows={c.challenge.rows}
          highlight={2}
        />
      )}

      <div className="-mt-24 sm:-mt-32">
        {c.template === "A" ? (
          <FeatureRows
            id="solution"
            eyebrow={c.solution.eyebrow}
            title={c.solution.title}
            lead={c.solution.body}
            features={c.solution.blocks.map((b: any) => ({ index: b.index, tag: b.label, title: b.title, body: b.body, bullets: b.features }))}
          />
        ) : (
          <SolutionCards id="solution" eyebrow={c.solution.eyebrow} title={c.solution.title} lead={c.solution.body} cards={c.solution.blocks} />
        )}
      </div>

      {c.enablement && (
        <div className="-mt-24 sm:-mt-32">
          <StepsGrid eyebrow={c.enablement.eyebrow} title={c.enablement.title} lead={c.enablement.body} steps={c.enablement.steps} />
        </div>
      )}

      <ImpactMetrics eyebrow={c.outcomes.eyebrow} title={c.outcomes.title} metrics={c.outcomes.stats} outcomePrefix={t.outcomePrefix} />

      <DataTable eyebrow={c.standards.eyebrow} title={c.standards.title} columns={t.header} rows={c.standards.rows} />

      <section className="pb-8" aria-label={t.relatedTitle}>
        <div className="container-x">
          <SectionHeader eyebrow={t.relatedEyebrow} title={t.relatedTitle} layout="stack" />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.08}>
                <CaseCard data={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection locale={locale} items={shared} />
      <SharedCtaBanner locale={locale} />
    </>
  );
}
