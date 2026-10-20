import Link from "next/link";
import { pillars, routes, site } from "@/content/site";
import { globalCopy, lp, type Locale } from "@/lib/i18n";
import { Bidi } from "@/components/ui/Bidi";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SkylineArt } from "@/components/art/SkylineArt";
import { Logo } from "./Logo";

const socialIcon = (href: string): IconName =>
  href.includes("linkedin")
    ? "linkedin"
    : href.includes("twitter") || href.includes("x.com")
      ? "x"
      : href.includes("instagram")
        ? "instagram"
        : href.includes("youtube")
          ? "youtube"
          : href.includes("tiktok")
            ? "tiktok"
            : "whatsapp";

export function Footer({ locale }: { locale: Locale }) {
  const g = globalCopy(locale);
  const f = g.footer;
  // Render the year dynamically (copy: "© 2026 Manzili")
  const legal = f.legal.replace(/\d{4}/, String(new Date().getFullYear()));
  const contactHrefs = [`mailto:${site.email.sales}`, `mailto:${site.email.support}`, site.phoneHref, site.whatsapp, site.mapsUrl];
  const contactIcons: IconName[] = ["mail", "mail", "phone", "whatsapp", "mapPin"];
  const procHrefs = [routes.cse, routes.caseStudies, routes.privacy, routes.contact];

  return (
    <footer className="mt-16 px-2 pb-2 sm:mt-24 sm:px-3 sm:pb-3">
      <SkylineArt />
      <div className="-mt-px overflow-hidden rounded-b-[22px] bg-brand-footer text-white sm:rounded-b-stage">
        <div className="container-x py-14 lg:py-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
            <div>
              <Logo tone="light" href={lp(locale, "/")} label={g.ui.logoLabel} />
              <p className="mt-6 max-w-[36ch] text-sm leading-relaxed text-white">{f.tagline}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {f.trust.map((t) => (
                  <li key={t} className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold text-white">
                    {t}
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {f.socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener"
                      aria-label={s.label}
                      className="grid size-9 place-items-center rounded-full bg-white text-brand-deep transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <Icon name={socialIcon(s.href)} size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <nav aria-label={f.pillarsHeader}>
              <p className="text-sm font-bold text-white">{f.pillarsHeader}</p>
              <ul className="mt-5 space-y-3 text-sm">
                {pillars.map((p, i) => (
                  <li key={p.href}>
                    <Link href={lp(locale, p.href)} className="text-white/95 transition-colors hover:text-white hover:underline">
                      {f.pillars[i]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label={f.procHeader}>
              <p className="text-sm font-bold text-white">{f.procHeader}</p>
              <ul className="mt-5 space-y-3 text-sm">
                {f.proc.map((label, i) => (
                  <li key={label}>
                    <Link href={lp(locale, procHrefs[i])} className="text-white/95 transition-colors hover:text-white hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-sm font-bold text-white">{f.contactHeader}</p>
              <ul className="mt-5 space-y-3 text-sm">
                {f.contact.map((label, i) => (
                  <li key={label}>
                    <a
                      href={contactHrefs[i]}
                      {...(i >= 3 && { target: "_blank", rel: "noopener" })}
                      className="flex items-start gap-2.5 text-white/95 transition-colors hover:text-white hover:underline"
                    >
                      <Icon name={contactIcons[i]} size={16} className="mt-0.5 shrink-0" />
                      <span>
                        <Bidi text={label} />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-white/95">{f.hours}</p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/25 pt-6 text-xs text-white/95 sm:flex-row sm:items-center sm:justify-between">
            <p>{legal}</p>
            <ul className="flex gap-5">
              <li>
                <Link href={lp(locale, routes.privacy)} className="hover:text-white hover:underline">
                  {f.privacy}
                </Link>
              </li>
              <li>
                <Link href={lp(locale, routes.terms)} className="hover:text-white hover:underline">
                  {f.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
