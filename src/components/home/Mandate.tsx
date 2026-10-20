"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import type { Head, Cta } from "@/content/copy";
import { images } from "@/content/images";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { SceneFrame } from "@/components/art/IsoScene";


/** One word of the statement; brightens as the reader scrolls past it. */
function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {children}{" "}
    </motion.span>
  );
}

function PhotoCard({ which, className }: { which: "left" | "right"; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border-[5px] border-white bg-white shadow-float ${className ?? ""}`}>
      <Media
        src={which === "left" ? images.mandateLeft : images.mandateRight}
        alt={which === "left" ? "Aerial view of a coastal master-planned community" : "Modern white villa"}
        fallback={
          which === "left" ? (
            <SceneFrame variant="villas" seed={41} density="card" className="h-full w-full" />
          ) : (
            <SceneFrame variant="towers" seed={42} density="card" className="h-full w-full" />
          )
        }
        className="h-full w-full"
        sizes="220px"
      />
    </div>
  );
}

export function Mandate({ c }: { c: Head & { cta: Cta } }) {
  const mandate = c;
  const ref = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  // 0 → section entering the viewport, 0.5 → centred, 1 → leaving
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const { scrollYProgress: textProgress } = useScroll({ target: textRef, offset: ["start 85%", "end 45%"] });

  // Left card drops in from above, right card rises from below — both settle as the
  // statement lights up, then drift gently apart while the section scrolls away.
  const leftY = useTransform(scrollYProgress, [0.05, 0.45, 1], [-220, 0, 60]);
  const rightY = useTransform(scrollYProgress, [0.05, 0.45, 1], [220, 0, -60]);
  const leftRotate = useTransform(scrollYProgress, [0.05, 0.45], [-24, -9]);
  const rightRotate = useTransform(scrollYProgress, [0.05, 0.45], [24, 10]);
  const cardOpacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
  const cardScale = useTransform(scrollYProgress, [0.05, 0.45], [0.85, 1]);
  const mobileLeftY = useTransform(scrollYProgress, [0.1, 0.5], [-60, 0]);
  const mobileRightY = useTransform(scrollYProgress, [0.1, 0.5], [60, 0]);
  const words = mandate.title.split(" ");

  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32" aria-labelledby="mandate-title">
      <div className="container-x relative">
        {/* Cards live inside the container so they never leave the content width */}
        <motion.div
          style={{ y: leftY, rotate: leftRotate, opacity: cardOpacity, scale: cardScale }}
          className="pointer-events-none absolute left-0 top-[22%] hidden xl:block 2xl:-left-4"
        >
          <PhotoCard which="left" className="h-56 w-44" />
        </motion.div>
        <motion.div
          style={{ y: rightY, rotate: rightRotate, opacity: cardOpacity, scale: cardScale }}
          className="pointer-events-none absolute right-0 top-[8%] hidden xl:block 2xl:-right-4"
        >
          <PhotoCard which="right" className="h-52 w-48" />
        </motion.div>

        <div className="relative text-center">
          <p className="eyebrow">{mandate.eyebrow}</p>
          <h2
            id="mandate-title"
            ref={textRef}
            className="mx-auto mt-5 max-w-[24ch] font-display text-h2 font-bold text-ink"
          >
            {words.map((w, i) => (
              <Word key={i} progress={textProgress} range={[i / words.length, (i + 1) / words.length]}>
                {w}
              </Word>
            ))}
          </h2>
          {mandate.body && <p className="mx-auto mt-5 max-w-[58ch] text-lead">{mandate.body}</p>}
          <div className="mt-9 flex justify-center">
            <Button href={mandate.cta.href} variant="accent">
              {mandate.cta.label}
            </Button>
          </div>

          <div className="mt-12 flex justify-center gap-5 xl:hidden">
            <motion.div style={{ y: mobileLeftY, opacity: cardOpacity }}>
              <PhotoCard which="left" className="h-40 w-32 -rotate-6 sm:h-48 sm:w-40" />
            </motion.div>
            <motion.div style={{ y: mobileRightY, opacity: cardOpacity }}>
              <PhotoCard which="right" className="mt-6 h-36 w-36 rotate-6 sm:h-44 sm:w-44" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
