"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { csePage } from "@/content/pages/cse";
import { pillars } from "@/content/site";
import { cn, EASE } from "@/lib/utils";
import { Sheen } from "@/components/ui/Sheen";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

const FUNNEL_WIDTHS = [100, 74, 52, 38, 29]; // illustrative shape only

/** Behavioral telemetry: brand-blue analytics band with an interactive funnel + metric cards. */
export function TelemetrySection() {
  const t = csePage.telemetry;
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section id="telemetry" className="scroll-mt-24 px-2 sm:px-3" aria-labelledby="telemetry-title">
      <div className="stage surface-blue">
        <Sheen />
        <div className="container-x py-20 sm:py-24">
          <SectionHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} tone="dark" id="telemetry-title" />

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_1fr]">
            <Reveal className="rounded-card bg-white p-6 shadow-[0_40px_80px_-30px_rgba(0,30,90,0.6)] sm:p-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-ink">Conversion funnel · live</p>
                <span className="flex items-center gap-1.5 rounded-full bg-status/10 px-2.5 py-1 text-[11px] font-bold text-status">
                  <span className="size-1.5 animate-pulse rounded-full bg-status" /> Streaming
                </span>
              </div>
              <ol className="mt-6 space-y-3" onMouseLeave={() => setHover(null)}>
                {t.funnel.map((stage, i) => {
                  const on = hover === i;
                  const drop = i > 0 ? FUNNEL_WIDTHS[i - 1] - FUNNEL_WIDTHS[i] : 0;
                  return (
                    <li key={stage} onMouseEnter={() => setHover(i)} className="cursor-default">
                      <div className="mb-1.5 flex items-center justify-between text-xs font-semibold">
                        <span className={on ? "text-brand" : "text-body"}>
                          {i + 1}. {stage}
                        </span>
                        <AnimatePresence>
                          {on && i > 0 && (
                            <motion.span
                              initial={{ opacity: 0, x: 6 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0 }}
                              className={drop > 20 ? "text-accent" : "text-status"}
                            >
                              {drop > 20 ? "Drop-off flagged" : "Healthy step"}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                      <div className="h-8 overflow-hidden rounded-lg bg-brand-light">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${FUNNEL_WIDTHS[i]}%` }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 1.1, ease: EASE, delay: 0.15 * i }}
                          className={cn("h-full rounded-lg transition-[filter] duration-300", on && "brightness-110")}
                          style={{
                            background: i === 3 ? "linear-gradient(90deg,#FF7A00,#FF9B3D)" : "linear-gradient(90deg,#0066FF,#3D8BFF)",
                          }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ol>
              <p className="mt-5 flex items-center gap-2 text-xs text-body">
                <Icon name="activity" size={14} className="text-accent" />
                Hover a stage to inspect it — drop-off is flagged to sales directors in real time.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-4">
              {t.metrics.map((m, i) => (
                <Reveal key={m.title} delay={i * 0.08}>
                  <article className="group glass flex gap-4 rounded-card p-5 transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/20 sm:p-6">
                    <span className="grid grid-cols-1 size-11 shrink-0 place-items-center rounded-xl bg-white text-brand transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                      <Icon name={m.icon} size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-[#FFC58A]">{m.spec}</p>
                      <h3 className="mt-1 text-h4 font-semibold text-white">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/80">{m.body}</p>
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

/** Links the product back to the six pillars that power it. */
export function EcosystemStrip() {
  const e = csePage.ecosystem;
  return (
    <section className="pb-24 sm:pb-32" aria-labelledby="ecosystem-title">
      <div className="container-x">
        <Reveal className="rounded-card bg-white p-6 shadow-card ring-1 ring-ink/5 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">{e.eyebrow}</p>
              <h2 id="ecosystem-title" className="mt-3 text-h3 font-semibold text-ink">
                {e.title}
              </h2>
            </div>
            <Link href={e.cta.href} className="group inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark">
              {e.cta.label}
              <Icon name="arrowRight" size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="group flex items-center gap-3 rounded-xl bg-page px-4 py-3.5 transition-colors hover:bg-brand-light"
                >
                  <span className="grid grid-cols-1 size-9 place-items-center rounded-lg bg-white text-brand ring-1 ring-ink/5 group-hover:bg-brand group-hover:text-white">
                    <Icon name={p.icon} size={17} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold text-muted">Pillar {p.index}</span>
                    <span className="block truncate text-sm font-semibold text-ink">{p.title}</span>
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
