"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Fragment, useRef } from "react";
import type { Hero as HeroCopy } from "@/content/copy";
import { images } from "@/content/images";
import { EASE } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { HeroArt } from "@/components/art/HeroArt";

export function Hero({ c }: { c: HeroCopy }) {
  const hero = c;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const artY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Word-by-word animation; each word keeps a real trailing space for screen readers / Google
  const words = hero.title.split(" ").map((w) => ({ w, weight: "" }));

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
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0477AB] via-[#0479AE]/60 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0477AB]/80 via-[#0479AE]/35 to-transparent" />

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
            {words.map((item, i) => (
              <Fragment key={i}>
                <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                  <motion.span
                    className={`inline-block ${item.weight}`}
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.45 + i * 0.06 }}
                  >
                    {item.w}
                  </motion.span>
                </span>
                {i < words.length - 1 && " "}
              </Fragment>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.0 }}
            className="mt-5 max-w-[60ch] text-lead font-medium text-white/95"
          >
            {hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href={hero.primary!.href} variant="primary">
              {hero.primary!.label}
            </Button>
            <Button href={hero.secondary!.href} variant="outline" icon="arrowDown">
              {hero.secondary!.label}
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-white/95"
           
          >
            {hero.chips.map((s, i) => (
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
