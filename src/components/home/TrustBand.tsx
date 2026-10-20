"use client";

import { motion } from "framer-motion";
import type { Cta, Head } from "@/content/copy";
import { EASE } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Sheen } from "@/components/ui/Sheen";

type Props = { c: Head & { segments: string[]; assurances: string[]; cta: Cta } };

/** Segments & Trust: headline left; two tag rows right — Segments (5) and Assurances (3). */
export function TrustBand({ c }: Props) {
  return (
    <section className="px-2 sm:px-3" aria-labelledby="trust-title">
      <div className="stage surface-blue">
        <Sheen />
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow eyebrow-on-dark">{c.eyebrow}</p>
              <h2 id="trust-title" className="mt-4 max-w-[20ch] font-display text-h2 font-bold text-white">
                {c.title}
              </h2>
              <p className="mt-5 max-w-[52ch] text-white/95">{c.body}</p>
              <Button href={c.cta.href} variant="primary" className="mt-8">
                {c.cta.label}
              </Button>
            </Reveal>

            <div className="glass rounded-3xl p-3 sm:p-4">
              <ul className="space-y-2.5">
                {c.segments.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.08 * i }}
                    className="group flex items-center gap-3 rounded-xl bg-white px-4 py-3.5 text-[15px] font-semibold text-ink shadow-[0_6px_18px_-10px_rgba(3,40,62,0.45)] transition-transform duration-300 hover:translate-x-1 rtl:hover:-translate-x-1"
                  >
                    <span className="size-1.5 rounded-full bg-ink transition-colors group-hover:bg-accent" />
                    {s}
                  </motion.li>
                ))}
              </ul>
              <ul className="mt-3 flex flex-wrap gap-2 border-t border-white/20 pt-3">
                {c.assurances.map((a) => (
                  <li key={a} className="flex items-center gap-1.5 rounded-full border border-white/40 px-3 py-1.5 text-xs font-semibold text-white">
                    <Icon name="shield" size={14} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
