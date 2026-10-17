"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

type Props = { eyebrow: string; title: string; lead?: string; steps: { title: string; body: string }[] };

/** Numbered build pipeline. */
export function StepsGrid({ eyebrow, title, lead, steps }: Props) {
  return (
    <section className="py-24 sm:py-32" aria-label={title}>
      <div className="container-x">
        <SectionHeader eyebrow={eyebrow} title={title} lead={lead} layout={lead ? "split" : "stack"} />
        <ol className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, ease: EASE, delay: i * 0.12 }}
              className="group relative rounded-card bg-white p-7 shadow-card ring-1 ring-ink/5"
            >
              <div className="flex items-center gap-4">
                <span className="text-5xl font-extrabold leading-none text-ink/10 transition-colors duration-500 group-hover:text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < steps.length - 1 && (
                  <motion.span
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: EASE, delay: 0.4 + i * 0.2 }}
                    className="hidden h-px flex-1 origin-left bg-gradient-to-r from-brand/40 to-transparent md:block"
                  />
                )}
              </div>
              <h3 className="mt-6 text-h4 font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed">{s.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
