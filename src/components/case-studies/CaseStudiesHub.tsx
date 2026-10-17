"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { caseCategories, caseHref, caseStudies, type CaseCategory } from "@/content/case-studies";
import { caseHub } from "@/content/pages/case-studies-hub";
import { cn, EASE } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { CaseCard, type CaseCardData } from "./CaseCard";

type Item = CaseCardData & { key: string; categories: CaseCategory[] };

export function CaseStudiesHub() {
  const [filter, setFilter] = useState<CaseCategory | "all">("all");

  const featured = caseStudies.find((c) => c.slug === caseHub.featuredSlug)!;
  const items: Item[] = useMemo(
    () => [
      ...caseHub.programmes.map((p, i) => ({
        key: `programme-${i}`,
        href: caseHref(p.slug) + p.anchor,
        badge: p.badge,
        client: p.client,
        project: p.project,
        location: p.location,
        headline: p.headline,
        summary: p.summary,
        metrics: p.metrics,
        scene: p.scene,
        categories: p.categories,
      })),
      ...caseStudies
        .filter((c) => c.slug !== caseHub.featuredSlug)
        .map((c) => ({
          key: c.slug,
          href: caseHref(c.slug),
          badge: c.card.badge,
          client: c.card.client,
          project: c.card.project,
          location: c.card.location,
          summary: c.card.summary,
          metrics: c.card.metrics,
          scene: c.scene,
          categories: c.card.categories,
        })),
    ],
    [],
  );

  const visible = items.filter((i) => filter === "all" || i.categories.includes(filter));
  const showFeatured = filter === "all" || featured.card.categories.includes(filter as CaseCategory);
  const count = visible.length + (showFeatured ? 1 : 0);

  return (
    <section className="py-16 sm:py-24" aria-label="Case studies">
      <div className="container-x">
        <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div role="tablist" aria-label="Filter case studies" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {caseCategories.map((c) => {
              const active = filter === c.id;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(c.id)}
                  className={cn(
                    "relative shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-colors",
                    active ? "text-white" : "bg-white text-ink ring-1 ring-ink/10 hover:ring-brand/40",
                  )}
                >
                  {active && (
                    <motion.span layoutId="case-filter" className="absolute inset-0 rounded-full bg-brand" transition={{ duration: 0.35, ease: EASE }} />
                  )}
                  <span className="relative">{c.label}</span>
                </button>
              );
            })}
          </div>
          <p className="shrink-0 whitespace-nowrap text-sm font-medium text-muted" aria-live="polite">
            {count} {count === 1 ? "deployment" : "deployments"}
          </p>
        </Reveal>

        <AnimatePresence mode="popLayout">
          {showFeatured && (
            <motion.div
              key="featured"
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mt-10"
            >
              <CaseCard
                featured
                data={{
                  href: caseHref(featured.slug),
                  badge: featured.card.badge,
                  client: featured.card.client,
                  project: featured.card.project,
                  location: featured.card.location,
                  headline: caseHub.featuredHeadline,
                  summary: featured.card.summary,
                  metrics: featured.card.metrics,
                  scene: featured.scene,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div layout className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.div
                key={item.key}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <CaseCard data={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
