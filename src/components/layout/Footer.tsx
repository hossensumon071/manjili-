import Link from "next/link";
import { footer, pillars, routes, site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { SkylineArt } from "@/components/art/SkylineArt";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 px-2 pb-2 sm:mt-24 sm:px-3 sm:pb-3">
      <SkylineArt />
      <div className="-mt-px overflow-hidden rounded-b-[22px] bg-brand-footer text-white sm:rounded-b-stage">
        <div className="container-x py-14 lg:py-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr] lg:gap-10">
            <div>
              <Logo tone="light" />
              <p className="mt-6 max-w-[34ch] text-sm leading-relaxed text-white/85">
                <span className="font-semibold text-white">{site.legalName} (CR# {site.crNumber})</span> — {footer.blurb}
              </p>
              <p className="mt-4 max-w-[36ch] text-xs leading-relaxed text-white/70">{footer.sovereignty}</p>
              <ul className="mt-6 flex gap-2.5" aria-label="Social media">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid grid-cols-1 size-9 place-items-center rounded-full bg-white text-brand-footer transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <Icon name={s.icon} size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <nav aria-labelledby="footer-pillars">
              <h2 id="footer-pillars" className="text-sm font-bold text-white">
                6-Pillar Infrastructure
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {pillars.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-white/80 transition-colors hover:text-white">
                      {p.index}. {p.footerTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="footer-procurement">
              <h2 id="footer-procurement" className="text-sm font-bold text-white">
                Procurement Evaluation
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {footer.procurement.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-white/80 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-sm font-bold text-white">Commercial Counterparty</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="grid grid-cols-1 size-9 shrink-0 place-items-center rounded-full bg-white text-brand-footer">
                    <Icon name="mail" size={16} />
                  </span>
                  <span className="flex flex-col">
                    <a href={`mailto:${site.email.sales}`} className="text-white/85 hover:text-white">
                      {site.email.sales}
                    </a>
                    <a href={`mailto:${site.email.support}`} className="text-white/85 hover:text-white">
                      {site.email.support}
                    </a>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid grid-cols-1 size-9 shrink-0 place-items-center rounded-full bg-white text-brand-footer">
                    <Icon name="phone" size={16} />
                  </span>
                  <a href={site.phoneHref} className="text-white/85 hover:text-white">
                    {site.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <span className="grid grid-cols-1 size-9 shrink-0 place-items-center rounded-full bg-white text-brand-footer">
                    <Icon name="mapPin" size={16} />
                  </span>
                  <address className="not-italic text-white/85">{site.address}</address>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/25 pt-6 text-xs text-white/75 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-4">
              <p>© {year} {site.legalName}. All rights reserved.</p>
              <p className="text-white/60">Saudi PDPL Aligned · KSA Off-Plan Ready Architecture · Class-A Enterprise SLAs</p>
            </div>
            <ul className="flex gap-5">
              <li>
                <Link href={routes.privacy} className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={routes.terms} className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
