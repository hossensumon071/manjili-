"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { home } from "@/content/home";
import { images } from "@/content/images";
import { EASE } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { HeroArt } from "@/components/art/HeroArt";

const { hero } = home;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const artY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const words = [
    ...hero.headline.light.split(" ").map((w) => ({ w, weight: "" })),
    ...hero.headline.strong.split(" ").map((w) => ({ w, weight: "" })),
    { w: "\n", weight: "" },
    ...hero.headline.rest.split(" ").map((w) => ({ w, weight: "" })),
  ];

  return (
    <section ref={ref} className="px-2 pt-2 sm:px-3 sm:pt-3" aria-labelledby="hero-title">
      <div className="stage bg-brand-deep">
        <motion.div
          style={{ y: artY }}
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
          className="absolute inset-0 -z-10 origin-top"
        >
          <Media
            src={images.hero}
            alt="Modern villa cantilever against a clear sky"
            fallback={<HeroArt />}
            className="h-full w-full"
            priority
          />
        </motion.div>
        {/* Legibility washes */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0650C4] via-[#0A5BD3]/40 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0650C4]/60 via-[#0650C4]/10 to-transparent" />

        <motion.div
          style={{ opacity: contentOpacity }}
          className="container-x flex min-h-[640px] flex-col justify-end pb-10 pt-32 sm:min-h-[720px] sm:pb-14 lg:min-h-[min(92vh,860px)] lg:pb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
            className="glass mb-6 inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white"
          >
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent" />
              <span className="relative size-2 rounded-full bg-accent" />
            </span>
            {hero.eyebrow}
          </motion.span>

          <h1 id="hero-title" className="h-display max-w-4xl">
            {words.map((item, i) =>
              item.w === "\n" ? (
                <br key={i} className="hidden sm:block" />
              ) : (
                <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                  <motion.span
                    className={`inline-block ${item.weight}`}
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.45 + i * 0.06 }}
                  >
                    {item.w}
                    {"\u00A0"}
                  </motion.span>
                </span>
              ),
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.0 }}
            className="mt-5 max-w-[60ch] text-lead font-medium text-white/85"
          >
            {hero.subheader}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href={hero.primaryCta.href} variant="light">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="outline" icon="arrowDown">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-white/70"
            aria-label="Runtime status"
          >
            {hero.status.map((s, i) => (
              <li key={s} className="flex items-center gap-3">
                {i > 0 && <span className="size-1 rounded-full bg-white/40" aria-hidden="true" />}
                {s}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
