"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { pillars } from "@/content/site";
import { alternatePath, globalCopy, isArabicPath, lp, type Locale } from "@/lib/i18n";
import { arReady } from "@/lib/arRoutes";
import { cn, EASE } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";

export function Navbar({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const t = globalCopy(locale);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenuOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMenuOpen(false), 140);
  };

  const solid = scrolled || mobileOpen;
  const enPath = isArabicPath(pathname) ? alternatePath(pathname) : pathname;
  const active = {
    cse: enPath.startsWith("/platform-cse"),
    pillars: enPath.startsWith("/pillars"),
    cases: enPath.startsWith("/case-studies"),
  };
  // Language toggle → the matching page in the other language (only once it exists)
  const toggleHref = locale === "ar" ? alternatePath(pathname) : arReady(pathname) ? alternatePath(pathname) : null;

  const linkClass = (on: boolean) =>
    cn(
      "relative whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors",
      on
        ? cn("after:absolute after:inset-x-3 after:-bottom-0.5 after:h-[3px] after:rounded-full after:bg-accent", solid ? "text-brand-dark" : "text-white")
        : solid
          ? "text-ink/80 hover:text-ink"
          : "text-white/95 hover:text-white",
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-3 sm:pt-3">
      <div
        className={cn(
          "mx-auto max-w-[1280px] transition-all duration-500",
          solid
            ? "mt-1 rounded-full border border-white/60 bg-white/85 px-3 shadow-[0_12px_40px_-18px_rgba(55,53,53,0.35)] backdrop-blur-xl sm:px-4 lg:mt-2"
            : "border border-transparent px-4 sm:px-5 lg:px-8",
        )}
      >
        <nav aria-label="Main" className={cn("flex items-center justify-between gap-4 transition-all duration-500", solid ? "h-16" : "h-[72px] lg:h-24")}>
          <Logo tone={solid ? "dark" : "light"} href={lp(locale, "/")} label={t.ui.logoLabel} />

          <ul className="hidden items-center gap-1 xl:flex">
            <li>
              <Link href={lp(locale, "/platform-cse")} aria-current={active.cse ? "page" : undefined} className={linkClass(active.cse)}>
                {t.nav.cse}
              </Link>
            </li>
            <li className="relative" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
              <button
                type="button"
                aria-expanded={menuOpen}
                aria-controls="pillars-menu"
                onClick={() => setMenuOpen((v) => !v)}
                className={cn(linkClass(active.pillars), "flex items-center gap-1")}
              >
                {t.nav.pillars}
                <Icon name="chevronDown" size={15} className={cn("transition-transform duration-300", menuOpen && "rotate-180")} />
              </button>
              <AnimatePresence>{menuOpen && <PillarsMenu locale={locale} onNavigate={() => setMenuOpen(false)} />}</AnimatePresence>
            </li>
            <li>
              <Link href={lp(locale, "/case-studies")} aria-current={active.cases ? "page" : undefined} className={linkClass(active.cases)}>
                {t.nav.caseStudies}
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            {toggleHref && <LanguageToggle locale={locale} href={toggleHref} label={t.nav.toggle} solid={solid} />}
            <Button href={lp(locale, "/contact-us")} variant="primary" className="hidden whitespace-nowrap sm:inline-flex">
              {t.nav.cta}
            </Button>
            <button
              type="button"
              aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className={cn("grid size-11 place-items-center rounded-full transition-colors xl:hidden", solid ? "bg-ink/5 text-ink" : "bg-white/15 text-white")}
            >
              <Icon name={mobileOpen ? "close" : "menu"} size={20} />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>{mobileOpen && <MobileSheet locale={locale} active={active} toggleHref={toggleHref} />}</AnimatePresence>
    </header>
  );
}

function LanguageToggle({ locale, href, label, solid }: { locale: Locale; href: string; label: string; solid: boolean }) {
  return (
    <div className={cn("hidden items-center gap-0.5 rounded-full p-1 text-xs font-semibold transition-colors min-[420px]:flex", solid ? "bg-ink/5 text-ink" : "bg-white/15 text-white")}>
      {locale === "en" && (
        <span className={cn("rounded-full px-2.5 py-1.5", solid ? "bg-white shadow-sm" : "bg-white/25")} aria-current="true">
          EN
        </span>
      )}
      {/* Plain <a>: switching language swaps the root layout (lang/dir), so a full load is correct */}
      <a href={href} lang={locale === "en" ? "ar" : "en"} hrefLang={locale === "en" ? "ar" : "en"} className="rounded-full px-2.5 py-1.5 hover:underline">
        {label}
      </a>
    </div>
  );
}

function PillarsMenu({ locale, onNavigate }: { locale: Locale; onNavigate: () => void }) {
  const t = globalCopy(locale).nav;
  return (
    <motion.div
      id="pillars-menu"
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.98 }}
      transition={{ duration: 0.25, ease: EASE }}
      className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3"
    >
      <div className="rounded-3xl border border-line bg-white p-3 shadow-[0_30px_80px_-30px_rgba(55,53,53,0.45)]">
        <ul className="grid grid-cols-2 gap-1">
          {pillars.map((p, i) => (
            <li key={p.href}>
              <Link href={lp(locale, p.href)} onClick={onNavigate} className="group flex gap-3 rounded-2xl p-3 transition-colors hover:bg-brand-light">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-light text-brand-dark transition-colors group-hover:bg-brand-dark group-hover:text-white">
                  <Icon name={p.icon} size={19} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold leading-snug text-ink">{t.dropdown[i].name}</span>
                  <span className="mt-0.5 block text-xs leading-snug text-muted">{t.dropdown[i].descriptor}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-2 flex justify-end rounded-2xl bg-page px-4 py-3">
          <Link href={lp(locale, "/#pillars")} onClick={onNavigate} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:text-brand-deep">
            {t.viewAll} <Icon name="arrowRight" size={15} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function MobileSheet({ locale, active, toggleHref }: { locale: Locale; active: { cse: boolean; pillars: boolean; cases: boolean }; toggleHref: string | null }) {
  const t = globalCopy(locale).nav;
  const [pillarsOpen, setPillarsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="mx-auto mt-2 flex max-h-[calc(100dvh-96px)] max-w-[1280px] flex-col rounded-3xl border border-line bg-white p-4 shadow-float xl:hidden"
    >
      <ul className="min-h-0 flex-1 divide-y divide-line overflow-y-auto">
        <li>
          <Link href={lp(locale, "/platform-cse")} className={cn("block py-4 text-base font-semibold", active.cse ? "text-brand-dark" : "text-ink")}>
            {t.cse}
          </Link>
        </li>
        <li>
          <button
            type="button"
            aria-expanded={pillarsOpen}
            onClick={() => setPillarsOpen((v) => !v)}
            className={cn("flex w-full items-center justify-between py-4 text-start text-base font-semibold", active.pillars ? "text-brand-dark" : "text-ink")}
          >
            {t.pillars}
            <Icon name="chevronDown" size={18} className={cn("transition-transform", pillarsOpen && "rotate-180")} />
          </button>
          <AnimatePresence initial={false}>
            {pillarsOpen && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="overflow-hidden"
              >
                {pillars.map((p, i) => (
                  <li key={p.href}>
                    <Link href={lp(locale, p.href)} className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm font-medium text-body hover:bg-page">
                      <span className="grid size-8 place-items-center rounded-lg bg-brand-light text-brand-dark">
                        <Icon name={p.icon} size={16} />
                      </span>
                      {t.dropdown[i].name}
                    </Link>
                  </li>
                ))}
                <li className="pb-3">
                  <Link href={lp(locale, "/#pillars")} className="flex items-center gap-1 px-2 py-2.5 text-sm font-semibold text-brand-dark">
                    {t.viewAll} <Icon name="arrowRight" size={15} />
                  </Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
        <li>
          <Link href={lp(locale, "/case-studies")} className={cn("block py-4 text-base font-semibold", active.cases ? "text-brand-dark" : "text-ink")}>
            {t.caseStudies}
          </Link>
        </li>
        {toggleHref && (
          <li className="flex items-center gap-2 py-4 text-sm font-semibold">
            {locale === "en" && <span className="rounded-full bg-ink/5 px-3 py-1.5 text-ink">EN</span>}
            <a href={toggleHref} lang={locale === "en" ? "ar" : "en"} hrefLang={locale === "en" ? "ar" : "en"} className="rounded-full px-3 py-1.5 text-brand-dark hover:bg-brand-light">
              {t.toggle}
            </a>
          </li>
        )}
      </ul>
      {/* CTA pinned to the bottom of the panel */}
      <Button href={lp(locale, "/contact-us")} variant="primary" className="mt-4 w-full shrink-0 justify-between">
        {t.cta}
      </Button>
    </motion.div>
  );
}
