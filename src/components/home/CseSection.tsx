"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { home } from "@/content/home";
import { images } from "@/content/images";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { CseMockup } from "@/components/mockups/CseMockup";

const { cse } = home;

export function CseSection() {
  const listRef = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  return (
    <section className="pb-24 sm:pb-32" aria-labelledby="cse-title">
      <div className="container-x">
        <Reveal className="grid gap-8 [&>*]:min-w-0 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow">{cse.eyebrow}</p>
            <h2 id="cse-title" className="h-section mt-4 max-w-[22ch]">
              {cse.headline}
            </h2>
            <p className="mt-5 max-w-[62ch]">{cse.lead}</p>
          </div>
          <Button href={cse.cta.href} variant="accent" className="w-fit">
            {cse.cta.label}
          </Button>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <Reveal y={36}>
            <Media
              src={images.cse}
              alt="Connected Sales Environment showing live masterplan inventory and unit financing"
              fallback={<CseMockup />}
              className="aspect-[4/3.3] rounded-card shadow-float ring-1 ring-ink/5 sm:aspect-[4/3]"
              sizes="(min-width: 1024px) 640px, 100vw"
            />
          </Reveal>

          <ul ref={listRef} className="relative self-center">
            <span aria-hidden="true" className="absolute bottom-6 left-5 top-6 w-px bg-line" />
            <motion.span
              aria-hidden="true"
              style={{ scaleY: progress }}
              className="absolute bottom-6 left-5 top-6 w-px origin-top bg-accent"
            />
            {cse.features.map((f) => (
              <li key={f.title} className="relative flex gap-5 pb-8 last:pb-0">
                <motion.span
                  initial={{ backgroundColor: "#FFF1E5", color: "#FF7A00" }}
                  whileInView={{ backgroundColor: "#FF7A00", color: "#FFFFFF" }}
                  viewport={{ margin: "0px 0px -40% 0px" }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full ring-4 ring-page"
                >
                  <Icon name={f.icon} size={18} />
                </motion.span>
                <div className="pt-1.5">
                  <h3 className="text-h4 font-semibold text-ink">{f.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
