"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn, EASE } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { CaseCard, type CaseCardData } from "./CaseCard";

type Counter = string | { one: string; two: string; few: string; many: string };
type Props = { tabs: string[]; cards: (CaseCardData & { filters: number[] })[]; counter: Counter; locale: "en" | "ar" };

function countLabel(n: number, counter: Counter, locale: "en" | "ar") {
  if (typeof counter === "string") return locale === "en" && n === 1 ? "1 case study" : counter.replace("[n]", String(n));
  if (n === 1) return counter.one;
  if (n === 2) return counter.two;
  return (n <= 10 ? counter.few : counter.many).replace("[n]", String(n));
}

/** Case Studies index: filter tabs (cards can carry several tags) + dynamic counter + grid. */
export function CaseStudiesHub({ tabs, cards, counter, locale }: Props) {
  const [filter, setFilter] = useState(0); // 0 = All
  const visible = cards.filter((c) => filter === 0 || c.filters.includes(filter));

  return (
    <section className="py-16 sm:py-24" aria-label={tabs[0]}>
      <div className="container-x">
        <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div role="tablist" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {tabs.map((label, i) => {
              const active = filter === i;
              return (
                <button
                  key={label}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(i)}
                  className={cn(
                    "relative shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-colors",
                    active ? "text-white" : "bg-white text-ink ring-1 ring-ink/10 hover:ring-brand/40",
                  )}
                >
                  {active && <motion.span layoutId="case-filter" className="absolute inset-0 rounded-full bg-brand-dark" transition={{ duration: 0.35, ease: EASE }} />}
                  <span className="relative">{label}</span>
                </button>
              );
            })}
          </div>
          <p className="shrink-0 whitespace-nowrap text-sm font-medium text-muted" aria-live="polite">
            {countLabel(visible.length, counter, locale)}
          </p>
        </Reveal>

        <motion.div layout className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((card) => (
              <motion.div
                key={card.href}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <CaseCard data={card} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
