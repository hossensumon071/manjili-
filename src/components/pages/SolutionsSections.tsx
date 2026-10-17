"use client";

import { motion } from "framer-motion";
import { solutions } from "@/content/pages/solutions";
import { EASE } from "@/lib/utils";
import { ArrowLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

/** Thesis: copy on the left, vendor consolidation diagram + metric on the right. */
export function ThesisSection() {
  const t = solutions.thesis;
  return (
    <section className="py-24 sm:py-32" aria-labelledby="thesis-title">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 id="thesis-title" className="mt-4 max-w-[20ch] font-display text-h2 font-bold text-ink">
            {t.title}
          </h2>
          <p className="mt-5 max-w-[58ch]">{t.body}</p>
        </Reveal>

        <Reveal delay={0.1} className="rounded-card bg-white p-6 shadow-card ring-1 ring-ink/5 sm:p-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-5">
            <ul className="space-y-2">
              {t.before.map((v, i) => (
                <motion.li
                  key={v}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                  className="rounded-lg border border-dashed border-line bg-page px-3 py-2 text-xs font-semibold text-body line-through decoration-muted/60 sm:text-sm"
                >
                  {v}
                </motion.li>
              ))}
            </ul>
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.45 }}
              className="grid grid-cols-1 size-10 place-items-center rounded-full bg-accent text-white shadow-glow-orange"
            >
              <Icon name="arrowRight" size={18} />
            </motion.span>
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
              className="surface-blue flex h-full flex-col justify-center rounded-xl p-4 text-white"
            >
              <Icon name="shield" size={22} />
              <p className="mt-3 text-sm font-bold leading-snug sm:text-[15px]">{t.after}</p>
            </motion.div>
          </div>
          <div className="mt-8 border-t border-line pt-6">
            <p className="text-[clamp(1.75rem,3vw,2.4rem)] font-extrabold leading-tight tracking-[-0.02em] text-brand">{t.metric}</p>
            <p className="mt-2 max-w-[48ch] text-[15px]">{t.metricContext}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Six pillars as light cards with a metric chip each. */
export function SolutionsPillarGrid() {
  const p = solutions.pillars;
  return (
    <section id="pillars" className="scroll-mt-24 px-2 sm:px-3" aria-labelledby="sol-pillars-title">
      <div className="stage bg-white ring-1 ring-ink/5">
        <div className="container-x py-20 sm:py-24">
          <SectionHeader eyebrow={p.eyebrow} title={p.title} id="sol-pillars-title" layout="stack" />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {p.items.map((item, i) => (
              <Reveal key={item.href} delay={(i % 3) * 0.08}>
                <article className="group flex h-full flex-col rounded-card bg-page p-6 ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-float sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="grid grid-cols-1 size-11 place-items-center rounded-xl bg-white text-brand ring-1 ring-ink/5 transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                      <Icon name={item.icon} size={20} />
                    </span>
                    <span className="text-3xl font-extrabold leading-none text-ink/10 transition-colors duration-500 group-hover:text-brand/25">
                      {item.index}
                    </span>
                  </div>
                  <h3 className="mt-8 text-h3 font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed">{item.body}</p>
                  <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent-hover">
                    <span className="size-1.5 rounded-full bg-accent" />
                    {item.metric}
                  </span>
                  <ArrowLink href={item.href} className="mt-5 text-brand hover:text-brand-dark">
                    {item.cta}
                  </ArrowLink>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
