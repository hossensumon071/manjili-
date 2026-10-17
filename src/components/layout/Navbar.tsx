"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { nav, pillars, routes } from "@/content/site";
import { cn, EASE } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
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

  // Lock page scroll behind the mobile sheet
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close menus on route change
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
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === routes.solutions) return pathname.startsWith("/solutions") || pathname.startsWith("/pillars");
    if (href === routes.cse) return pathname.startsWith("/products");
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-3 sm:pt-3">
      <div
        className={cn(
          "mx-auto max-w-[1280px] transition-all duration-500",
          solid
            ? "mt-1 rounded-full border border-white/60 bg-white/80 px-3 shadow-[0_12px_40px_-18px_rgba(11,19,43,0.35)] backdrop-blur-xl sm:px-4 lg:mt-2"
            : "border border-transparent px-4 sm:px-5 lg:px-8",
        )}
      >
        <nav aria-label="Main" className={cn("flex items-center justify-between gap-4 transition-all duration-500", solid ? "h-16" : "h-[72px] lg:h-24")}>
          <Logo tone={solid ? "dark" : "light"} />

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 xl:flex">
            {nav.map((item) =>
              item.pillarsMenu ? (
                <li key={item.label} className="relative" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
                  <button
                    type="button"
                    aria-expanded={menuOpen}
                    aria-controls="pillars-menu"
                    onClick={() => setMenuOpen((v) => !v)}
                    className={cn(
                      "flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors",
                      isActive(item.href)
                        ? "text-accent"
                        : solid
                          ? "text-ink/80 hover:text-ink"
                          : "text-white/85 hover:text-white",
                    )}
                  >
                    {item.label}
                    <Icon name="chevronDown" size={15} className={cn("transition-transform duration-300", menuOpen && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {menuOpen && <PillarsMenu onNavigate={() => setMenuOpen(false)} />}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors",
                      isActive(item.href)
                        ? "text-accent"
                        : solid
                          ? "text-ink/80 hover:text-ink"
                          : "text-white/85 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle solid={solid} />
            <Link
              href={routes.contact}
              className={cn(
                "hidden h-11 items-center whitespace-nowrap rounded-full px-5 text-sm font-semibold transition-all duration-300 sm:inline-flex",
                solid ? "bg-brand text-white hover:bg-brand-dark" : "bg-white text-ink hover:bg-white/90",
              )}
            >
              Book Technical Scoping
            </Link>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "grid grid-cols-1 size-11 place-items-center rounded-full transition-colors xl:hidden",
                solid ? "bg-ink/5 text-ink" : "bg-white/15 text-white",
              )}
            >
              <Icon name={mobileOpen ? "close" : "menu"} size={20} />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>{mobileOpen && <MobileSheet isActive={isActive} />}</AnimatePresence>
    </header>
  );
}

function LanguageToggle({ solid }: { solid: boolean }) {
  return (
    <div
      className={cn(
        "hidden items-center gap-0.5 rounded-full p-1 text-xs font-semibold transition-colors min-[420px]:flex",
        solid ? "bg-ink/5 text-ink" : "bg-white/15 text-white",
      )}
    >
      <span className={cn("rounded-full px-2.5 py-1.5", solid ? "bg-white shadow-sm" : "bg-white/25")} aria-current="true">
        EN
      </span>
      {/* Arabic (RTL) version: wire this to /ar once the Arabic copy is delivered */}
      <span lang="ar" title="Arabic version coming soon" className="cursor-not-allowed px-2.5 py-1.5 opacity-75">
        العربية
      </span>
    </div>
  );
}

function PillarsMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <motion.div
      id="pillars-menu"
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.98 }}
      transition={{ duration: 0.25, ease: EASE }}
      className="absolute left-1/2 top-full w-[660px] -translate-x-1/2 pt-3"
    >
      <div className="rounded-3xl border border-line bg-white p-3 shadow-[0_30px_80px_-30px_rgba(11,19,43,0.45)]">
        <ul className="grid grid-cols-2 gap-1">
          {pillars.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                onClick={onNavigate}
                className="group flex gap-3 rounded-2xl p-3 transition-colors hover:bg-brand-light"
              >
                <span className="grid grid-cols-1 size-10 shrink-0 place-items-center rounded-xl bg-brand-light text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={p.icon} size={19} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold text-muted">Pillar {p.index}</span>
                  <span className="block text-sm font-semibold leading-snug text-ink">{p.menuTitle}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-2 flex items-center justify-between rounded-2xl bg-page px-4 py-3">
          <p className="text-sm text-body">One Master Service Agreement. Single-source accountability.</p>
          <Link
            href={routes.solutions}
            onClick={onNavigate}
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            All solutions <Icon name="arrowRight" size={15} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function MobileSheet({ isActive }: { isActive: (href: string) => boolean }) {
  const [pillarsOpen, setPillarsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="mx-auto mt-2 max-h-[calc(100dvh-96px)] max-w-[1280px] overflow-y-auto rounded-3xl border border-line bg-white p-4 shadow-float xl:hidden"
    >
      <ul className="divide-y divide-line">
        {nav.map((item) =>
          item.pillarsMenu ? (
            <li key={item.label}>
              <button
                type="button"
                aria-expanded={pillarsOpen}
                onClick={() => setPillarsOpen((v) => !v)}
                className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-ink"
              >
                {item.label}
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
                    {pillars.map((p) => (
                      <li key={p.href}>
                        <Link href={p.href} className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm font-medium text-body hover:bg-page">
                          <span className="grid grid-cols-1 size-8 place-items-center rounded-lg bg-brand-light text-brand">
                            <Icon name={p.icon} size={16} />
                          </span>
                          {p.menuTitle}
                        </Link>
                      </li>
                    ))}
                    <li className="pb-3" />
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ) : (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn("block py-4 text-base font-semibold", isActive(item.href) ? "text-accent" : "text-ink")}
              >
                {item.label}
              </Link>
            </li>
          ),
        )}
      </ul>
      <Button href={routes.contact} variant="primary" className="mt-4 w-full justify-between">
        Book Technical Scoping
      </Button>
    </motion.div>
  );
}
