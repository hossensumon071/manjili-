"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Cta, Head } from "@/content/copy";
import { pillars } from "@/content/site";
import { cn, EASE } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Sheen } from "@/components/ui/Sheen";
import { SectionHeader } from "@/components/sections/SectionHeader";

const FUNNEL_WIDTHS = [100, 74, 52, 38, 29]; // illustrative shape only
const ICONS: IconName[] = ["eye", "wallet", "activity"];

type TelemetryProps = { c: Head & { cards: Record<string, string>[] } };

/** Buyer intent telemetry (#telemetry): brand band with an illustrative funnel + three cards. */
export function TelemetrySection({ c }: TelemetryProps) {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section id="telemetry" className="scroll-mt-32 px-2 sm:px-3" aria-labelledby="telemetry-title">
      <div className="stage surface-blue">
        <Sheen />
        <div className="container-x py-20 sm:py-24">
          <SectionHeader eyebrow={c.eyebrow} title={c.title} lead={c.body} tone="dark" id="telemetry-title" />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_1fr]">
            {/* Decorative funnel visual (no copy) */}
            <Reveal className="rounded-card bg-white p-6 shadow-[0_40px_80px_-30px_rgba(3,40,62,0.6)] sm:p-8">
              <div aria-hidden="true">
                <ol className="space-y-3" onMouseLeave={() => setHover(null)}>
                  {FUNNEL_WIDTHS.map((w, i) => (
                    <li key={i} onMouseEnter={() => setHover(i)} className="flex items-center gap-3">
                      <span className={cn("w-5 text-xs font-bold", hover === i ? "text-brand-dark" : "text-muted")}>{i + 1}</span>
                      <div className="h-8 flex-1 overflow-hidden rounded-lg bg-brand-light">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${w}%` }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 1.1, ease: EASE, delay: 0.15 * i }}
                          className={cn("h-full rounded-lg transition-[filter] duration-300", hover === i && "brightness-110")}
                          style={{ background: i === 3 ? "linear-gradient(90deg,#F28E21,#F6A54D)" : "linear-gradient(90deg,#0474A1,#3DB2E3)" }}
                        />
                      </div>
                      <AnimatePresence>
                        {hover === i && i > 0 && (
                          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-10 text-end text-xs font-bold text-ink">
                            −{FUNNEL_WIDTHS[i - 1] - w}%
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-4">
              {c.cards.map((m, i) => (
                <Reveal key={m.title} delay={i * 0.08}>
                  <article className="group glass flex gap-4 rounded-card p-5 transition-all duration-500 hover:-translate-y-0.5 sm:p-6">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-brand-dark transition-transform duration-500 group-hover:scale-110">
                      <Icon name={ICONS[i % 3]} size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white">{m.chip}</p>
                      <h3 className="mt-1 text-h4 font-semibold text-white">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/95">{m.body}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type PoweredProps = { c: Head & { cta: Cta; tiles: { label: string; title: string; href: string }[] } };

/** "Powered by the 6-Pillar Infrastructure" tiles. */
export function EcosystemStrip({ c }: PoweredProps) {
  return (
    <section className="pb-24 sm:pb-32" aria-labelledby="ecosystem-title">
      <div className="container-x">
        <Reveal className="rounded-card bg-white p-6 shadow-card ring-1 ring-ink/5 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">{c.eyebrow}</p>
              <h2 id="ecosystem-title" className="mt-3 text-h3 font-semibold text-ink">
                {c.title}
              </h2>
            </div>
            <Link href={c.cta.href} className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-deep">
              {c.cta.label}
              <Icon name="arrowRight" size={15} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.tiles.map((t, i) => (
              <li key={t.href}>
                <Link href={t.href} className="group flex items-center gap-3 rounded-xl bg-page px-4 py-3.5 transition-colors hover:bg-brand-light">
                  <span className="grid size-9 place-items-center rounded-lg bg-white text-brand-dark ring-1 ring-ink/5 group-hover:bg-brand-dark group-hover:text-white">
                    <Icon name={pillars[i].icon} size={17} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold text-muted">{t.label}</span>
                    <span className="block text-sm font-semibold leading-snug text-ink">{t.title}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
