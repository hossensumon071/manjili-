"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import type { Cta, Head } from "@/content/copy";
import type { IconName } from "@/components/ui/Icon";
import { images } from "@/content/images";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { CseMockup } from "@/components/mockups/CseMockup";

const ICONS: IconName[] = ["map", "wallet", "fingerprint", "activity"];

export function CseSection({ c }: { c: Head & { cards: Record<string, string>[]; cta: Cta } }) {
  const cse = c;
  const listRef = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  return (
    <section className="pb-24 sm:pb-32" aria-labelledby="cse-title">
      <div className="container-x">
        <Reveal className="grid grid-cols-1 gap-8 [&>*]:min-w-0 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow">{cse.eyebrow}</p>
            <h2 id="cse-title" className="h-section mt-4 max-w-[22ch]">
              {cse.title}
            </h2>
            <p className="mt-5 max-w-[62ch]">{cse.body}</p>
          </div>
          <Button href={cse.cta.href} variant="accent" className="w-fit">
            {cse.cta.label}
          </Button>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <Reveal y={36}>
            <Media
              src={images.cse}
              alt="Connected Sales Environment showing live masterplan inventory and unit financing"
              fallback={<CseMockup />}
              className="aspect-[4/3.3] rounded-card shadow-float ring-1 ring-ink/5 sm:aspect-auto sm:h-[480px]"
              sizes="(min-width: 1024px) 640px, 100vw"
            />
          </Reveal>

          <ul ref={listRef} className="relative self-center">
            <span aria-hidden="true" className="absolute bottom-6 start-5 top-6 w-px bg-line" />
            <motion.span
              aria-hidden="true"
              style={{ scaleY: progress }}
              className="absolute bottom-6 start-5 top-6 w-px origin-top bg-accent"
            />
            {cse.cards.map((f, i) => (
              <li key={f.title} className="relative flex gap-5 pb-8 last:pb-0">
                <motion.span
                  initial={{ backgroundColor: "#FDF1E4", color: "#F28E21" }}
                  whileInView={{ backgroundColor: "#F28E21", color: "#FFFFFF" }}
                  viewport={{ margin: "0px 0px -40% 0px" }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 grid grid-cols-1 size-10 shrink-0 place-items-center rounded-full ring-4 ring-page"
                >
                  <Icon name={ICONS[i % 4]} size={18} />
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
