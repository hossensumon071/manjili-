"use client";

import { motion } from "framer-motion";
import { home } from "@/content/home";
import { EASE } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Sheen } from "@/components/ui/Sheen";

const { trust } = home;

export function TrustBand() {
  return (
    <section className="px-2 sm:px-3" aria-labelledby="trust-title">
      <div className="stage surface-blue">
        <Sheen />
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <Reveal>
              <p className="text-eyebrow font-semibold text-white/80">{trust.eyebrow}</p>
              <h2 id="trust-title" className="mt-4 max-w-[21ch] font-display text-h2 font-bold text-white">
                {trust.headline}
              </h2>
              <p className="mt-5 max-w-[52ch] text-white/85">{trust.body}</p>
              <Button href={trust.cta.href} variant="accent" className="mt-8">
                {trust.cta.label}
              </Button>
            </Reveal>

            <div className="glass rounded-3xl p-3 sm:p-4">
              <ul className="space-y-2.5">
                {trust.segments.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.08 * i }}
                    className="group flex items-center gap-3 rounded-xl bg-white px-4 py-3.5 text-[15px] font-semibold text-ink shadow-[0_6px_18px_-10px_rgba(0,30,90,0.45)] transition-transform duration-300 hover:translate-x-1"
                  >
                    <span className="size-1.5 rounded-full bg-ink transition-colors group-hover:bg-accent" />
                    {s}
                    <Icon
                      name="arrowUpRight"
                      size={16}
                      className="ms-auto text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Icon name="shield" size={17} />
              {trust.compliance[0]}
            </li>
            {trust.compliance.slice(1).map((c) => (
              <li key={c} className="flex items-center gap-3">
                <span className="size-1 rounded-full bg-white/50" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
