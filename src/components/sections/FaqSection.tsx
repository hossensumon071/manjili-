"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { cn, EASE } from "@/lib/utils";
import { globalCopy, lp, type Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Sheen } from "@/components/ui/Sheen";

export type FaqItem = { q: string; a: string };

type Props = {
  items: FaqItem[];
  locale?: Locale;
  /** @deprecated page-specific eyebrows/titles were replaced by the shared shell (copy file Part 1) */
  eyebrow?: string;
  /** @deprecated see above */
  headline?: string;
  description?: string;
  cta?: { label: string; href: string };
};

/** Shared FAQ module: one shell (eyebrow, H2, side card) for every page; only the questions change. */
export function FaqSection({ items, locale = "en" }: Props) {
  const t = globalCopy(locale).faq;
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="py-24 sm:py-32" aria-labelledby={`${baseId}-title`}>
      <div className="container-x">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 id={`${baseId}-title`} className="mt-4 max-w-[22ch] font-display text-h2 font-bold text-ink">
          {t.title}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="stage surface-blue rounded-3xl p-7 sm:rounded-3xl">
              <Sheen className="opacity-70" />
              <p className="text-h3 font-bold text-white">{t.sideTitle}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-white/95">{t.sideBody}</p>
              <Button href={lp(locale, "/contact-us")} variant="primary" className="mt-7 w-full justify-between">
                {t.cta}
              </Button>
            </div>
          </Reveal>

          <ul className="divide-y divide-line border-y border-line">
            {items.map((item, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              const buttonId = `${baseId}-button-${i}`;
              return (
                <li key={item.q}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className={cn("text-h4 font-semibold transition-colors", isOpen ? "text-brand-dark" : "text-ink group-hover:text-brand-dark")}>
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "grid grid-cols-1 size-9 shrink-0 place-items-center rounded-full transition-all duration-300",
                          isOpen ? "rotate-180 bg-brand-dark text-white" : "bg-white text-body shadow-sm ring-1 ring-line",
                        )}
                      >
                        <Icon name="arrowDown" size={16} />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[70ch] pb-6 pe-12 text-[15px] leading-relaxed">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
