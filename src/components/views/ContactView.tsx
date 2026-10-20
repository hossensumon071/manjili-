import { getContact } from "@/content/copy";
import { site } from "@/content/site";
import { lp, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { OfficeMap } from "@/components/contact/OfficeMap";
import { Button } from "@/components/ui/Button";
import { Bidi } from "@/components/ui/Bidi";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const ROW_HREFS = [site.mapsUrl, site.phoneHref, site.whatsapp, `mailto:${site.email.sales}`, `mailto:${site.email.support}`, null, null];
const ROW_ICONS: IconName[] = ["mapPin", "phone", "whatsapp", "mail", "mail", "activity", "rocket"];

export function ContactView({ locale }: { locale: Locale }) {
  const c = getContact(locale);
  const h = c.hero;
  return (
    <>
      <PageHero
        breadcrumb={[{ label: locale === "ar" ? "الرئيسية" : "Home", href: lp(locale, "/") }, { label: h.crumb }]}
        eyebrow={h.eyebrow}
        title={h.title}
        subheader={h.body}
        secondary={{ label: h.cta, href: "#intake" }}
        status={[]}
        visual={
          <div className="rounded-[22px] bg-white/95 p-6 shadow-[0_40px_80px_-30px_rgba(3,40,62,0.6)] ring-1 ring-white/60 backdrop-blur-xl sm:p-7">
            <p className="text-sm font-bold text-ink">{h.fitTitle}</p>
            <dl className="mt-4 divide-y divide-line">
              {(h.fitRows as string[][]).map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-6">
                  <dt className="text-sm text-muted">{label}</dt>
                  <dd className="text-sm font-semibold text-ink sm:text-end">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 border-t border-line pt-4 text-xs text-body">{h.fitFooter}</p>
          </div>
        }
      />

      <section id="intake" className="scroll-mt-32 py-16 sm:py-24" aria-label={c.form.title}>
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] lg:gap-10">
          <Reveal>
            <ContactForm c={c} locale={locale} />
          </Reveal>
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal className="rounded-card bg-white p-6 shadow-card ring-1 ring-ink/5">
              <p className="eyebrow">{c.next.eyebrow}</p>
              <h2 className="mt-3 text-h4 font-semibold text-ink">{c.next.title}</h2>
              <ol className="relative mt-6 space-y-6">
                <span aria-hidden="true" className="absolute bottom-3 start-[17px] top-3 w-px bg-line" />
                {(c.next.steps as { index: string; title: string; body: string }[]).map((s) => (
                  <li key={s.title} className="relative flex gap-4">
                    <span className="relative z-10 grid size-9 shrink-0 place-items-center rounded-full bg-brand-dark text-sm font-bold text-white ring-4 ring-white">{s.index}</span>
                    <div>
                      <h3 className="text-[15px] font-semibold text-ink">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={0.08} className="stage surface-blue rounded-card p-6 text-white sm:rounded-card">
              <p className="text-sm font-semibold text-white">{c.next.direct}</p>
              <a href={site.phoneHref} className="mt-3 flex items-center gap-3 text-lg font-bold hover:underline">
                <Icon name="phone" size={18} /> <bdi dir="ltr">{site.phone}</bdi>
              </a>
              <a href={`mailto:${site.email.sales}`} className="mt-2 flex items-center gap-3 text-[15px] font-semibold text-white hover:underline">
                <Icon name="mail" size={18} /> <bdi dir="ltr">{site.email.sales}</bdi>
              </a>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="pb-8" aria-labelledby="office-title">
        <div className="container-x">
          <SectionHeader eyebrow={c.details.eyebrow} title={c.details.title} lead={c.details.body} id="office-title" />
          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.2fr]">
            <Reveal className="rounded-card bg-white p-6 shadow-card ring-1 ring-ink/5 sm:p-8">
              <dl className="space-y-5">
                {(c.details.rows as { label: string; value: string }[]).map((row, i) => {
                  const href = ROW_HREFS[i];
                  return (
                    <div key={row.label} className="flex gap-4">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-light text-brand-dark">
                        <Icon name={ROW_ICONS[i]} size={18} />
                      </span>
                      <div>
                        <dt className="text-xs font-semibold text-muted">{row.label}</dt>
                        <dd className="mt-0.5 text-[15px] font-semibold text-ink">
                          {href ? (
                            <a href={href} {...(i === 0 || i === 2 ? { target: "_blank", rel: "noopener" } : {})} className="hover:text-brand-dark hover:underline">
                              <Bidi text={row.value} />
                            </a>
                          ) : (
                            row.value
                          )}
                        </dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
              <Button href={site.mapsUrl} variant="secondary" external className="mt-8">
                {c.details.mapCta}
              </Button>
            </Reveal>
            <Reveal delay={0.1}>
              <OfficeMap label={c.details.mapLabel} overlay={c.details.mapOverlay} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
