import type { Metadata } from "next";
import { caseHub } from "@/content/pages/case-studies-hub";
import { routes } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { ConversionCta } from "@/components/sections/ConversionCta";
import { SceneFrame } from "@/components/art/IsoScene";
import { CaseStudiesHub } from "@/components/case-studies/CaseStudiesHub";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: caseHub.meta.title,
  description: caseHub.meta.description,
  alternates: { canonical: routes.caseStudies },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: routes.home }, { label: "Case Studies" }]}
        eyebrow={caseHub.hero.eyebrow}
        title={caseHub.hero.title}
        subheader={caseHub.hero.subheader}
        primary={{ label: "Book Technical Scoping", href: routes.contact }}
        status={["Cityscape Global", "RestateX Riyadh & Jeddah", "Riyadh • Jeddah • Makkah • Medina • Tabuk"]}
        visual={
          <SceneFrame
            variant="masterplan"
            seed={31}
            label="10 deployments · Live"
            chips={["Live twins", "Kingdom-wide"]}
            className="aspect-[4/3.2] rounded-[22px] border border-white/20 shadow-float"
          />
        }
      />
      <CaseStudiesHub />
      <section className="pb-24 sm:pb-32" aria-labelledby="standards-title">
        <div className="container-x">
          <Reveal className="rounded-card bg-white p-6 shadow-card ring-1 ring-ink/5 sm:p-10">
            <h2 id="standards-title" className="text-h3 font-semibold text-ink">
              {caseHub.standards.title}
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {caseHub.standards.items.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="grid grid-cols-1 size-11 shrink-0 place-items-center rounded-xl bg-brand-light text-brand">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <p className="text-[15px] leading-relaxed">{s.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <ConversionCta badge={caseHub.cta.badge} headline={caseHub.cta.headline} body={caseHub.cta.body} primary={caseHub.cta.primary} />
    </>
  );
}
