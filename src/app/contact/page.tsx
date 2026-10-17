import type { Metadata } from "next";
import { contactPage } from "@/content/pages/contact";
import { routes, site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { StatusPanel } from "@/components/sections/StatusPanel";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { OfficeMap } from "@/components/contact/OfficeMap";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: contactPage.meta.title,
  description: contactPage.meta.description,
  alternates: { canonical: routes.contact },
};

export default function ContactPage() {
  const { hero, protocols, office } = contactPage;
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: routes.home }, { label: "Contact & RFP" }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subheader={hero.subheader}
        primary={{ label: "Start Qualification Intake", href: "#intake" }}
        status={["Minimum Engagement", ...hero.criteria]}
        visual={
          <StatusPanel
            title="Qualification gateway · Minimum engagement"
            live="Reviewing"
            items={[
              { icon: "building", label: "Development scale", meta: hero.criteria[0], state: "ok" },
              { icon: "shield", label: "Regulatory status", meta: hero.criteria[1], state: "ok" },
              { icon: "users", label: "Counterparty", meta: hero.criteria[2], state: "ok" },
              { icon: "mail", label: "Scoping memorandum", meta: "Within 2 operational business days", state: "active" },
            ]}
            footer="Verified corporate domains only"
          />
        }
      />

      <section id="intake" className="scroll-mt-24 py-16 sm:py-24" aria-label="Qualification intake">
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] lg:gap-10">
          <Reveal>
            <ContactForm />
          </Reveal>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal className="rounded-card bg-white p-6 shadow-card ring-1 ring-ink/5">
              <p className="eyebrow">{protocols.eyebrow}</p>
              <h2 className="mt-3 text-h4 font-semibold text-ink">{protocols.title}</h2>
              <ol className="relative mt-6 space-y-6">
                <span aria-hidden="true" className="absolute bottom-3 left-[17px] top-3 w-px bg-line" />
                {protocols.steps.map((s, i) => (
                  <li key={s.title} className="relative flex gap-4">
                    <span className="relative z-10 grid grid-cols-1 size-9 shrink-0 place-items-center rounded-full bg-brand text-sm font-bold text-white ring-4 ring-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold text-ink">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={0.08} className="stage surface-blue rounded-card p-6 text-white sm:rounded-card">
              <p className="text-sm font-semibold text-white/80">Prefer to speak directly?</p>
              <a href={site.phoneHref} className="mt-3 flex items-center gap-3 text-lg font-bold hover:underline">
                <Icon name="phone" size={18} /> {site.phone}
              </a>
              <a href={`mailto:${site.email.sales}`} className="mt-2 flex items-center gap-3 text-[15px] font-semibold text-white/90 hover:underline">
                <Icon name="mail" size={18} /> {site.email.sales}
              </a>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="pb-8" aria-labelledby="office-title">
        <div className="container-x">
          <SectionHeader eyebrow={office.eyebrow} title={office.title} id="office-title" layout="stack" />
          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.2fr]">
            <Reveal className="rounded-card bg-white p-6 shadow-card ring-1 ring-ink/5 sm:p-8">
              <dl className="space-y-6">
                {[
                  { icon: "mapPin" as const, label: "Headquarters Address", value: site.address },
                  { icon: "phone" as const, label: "Executive Switchboard", value: site.phone, href: site.phoneHref },
                  { icon: "mail" as const, label: "Enterprise RFP Desk", value: `${site.email.support} / ${site.email.sales}`, href: `mailto:${site.email.sales}` },
                  { icon: "activity" as const, label: "Operational Hours", value: office.hours },
                  { icon: "rocket" as const, label: "On-Site Dispatch Coverage", value: office.dispatch },
                ].map((row) => (
                  <div key={row.label} className="flex gap-4">
                    <span className="grid grid-cols-1 size-10 shrink-0 place-items-center rounded-xl bg-brand-light text-brand">
                      <Icon name={row.icon} size={18} />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold text-muted">{row.label}</dt>
                      <dd className="mt-0.5 text-[15px] font-semibold text-ink">
                        {row.href ? (
                          <a href={row.href} className="hover:text-brand">
                            {row.value}
                          </a>
                        ) : (
                          row.value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
              <a
                href={office.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
              >
                Open in Google Maps <Icon name="arrowUpRight" size={15} />
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <OfficeMap />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
