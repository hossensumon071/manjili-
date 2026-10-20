"use client";

import { motion, useInView, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef, type PointerEvent } from "react";
import { cn } from "@/lib/utils";
import { BEACONS, BRIDGE_PATH, GROUND, KINGDOM_CENTRE, SKYLINE_BACK, SKYLINE_FRONT_CHUNKS, WINDOW_LIGHTS } from "./skyline-data";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Animated Riyadh skyline for the footer.
 * 1. When the footer scrolls into view the city rises district by district,
 *    from the Kingdom Centre outwards.
 * 2. Afterwards it reacts to the pointer: a soft "searchlight" lights the
 *    buildings under the cursor and the back layer drifts with parallax.
 * 3. Ambient life: twinkling windows, aviation beacons, bridge traffic.
 */
export function SkylineArt({ className, fill = "#0477AB" }: { className?: string; fill?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();

  // pointer → viewBox x
  const px = useMotionValue(720);
  const glowX = useSpring(px, { stiffness: 120, damping: 20 });
  const backX = useTransform(glowX, [0, 1440], [18, -18]);
  const glowOpacity = useMotionValue(0);
  const glowOpacitySpring = useSpring(glowOpacity, { stiffness: 140, damping: 22 });

  const onMove = (e: PointerEvent<SVGSVGElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    // account for "slice" scaling on narrow screens
    const scale = Math.max(r.width / 1440, r.height / GROUND);
    const offset = (r.width - 1440 * scale) / 2;
    px.set((e.clientX - r.left - offset) / scale);
    glowOpacity.set(1);
  };

  const show = reduce || inView;
  const order = (cx: number) => Math.abs(cx - 720) / 720; // 0 at centre → 1 at edges

  const cars = [
    { dur: 7, delay: 0, color: "#FFFFFF" },
    { dur: 9, delay: 2.5, color: "#F7B266" },
    { dur: 8, delay: 5, color: "#FFFFFF" },
    { dur: 10, delay: 1.2, color: "#F7B266", reverse: true },
  ];

  return (
    <svg
      ref={ref}
      viewBox={`0 0 1440 ${GROUND}`}
      preserveAspectRatio="xMidYMax slice"
      className={cn("block aspect-[1440/260] min-h-[120px] w-full touch-pan-y", className)}
      aria-hidden="true"
      onPointerMove={reduce ? undefined : onMove}
      onPointerLeave={() => glowOpacity.set(0)}
    >
      <defs>
        <radialGradient id="skyline-glow">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="0.45" stopColor="#9CE1FF" stopOpacity="0.25" />
          <stop offset="1" stopColor="#9CE1FF" stopOpacity="0" />
        </radialGradient>
        <clipPath id="skyline-clip">
          {SKYLINE_FRONT_CHUNKS.map((c) => (
            <path key={c.cx} d={c.d} />
          ))}
          <path d={KINGDOM_CENTRE} clipRule="evenodd" />
        </clipPath>
      </defs>

      {/* drifting haze clouds */}
      {!reduce &&
        [
          { cx: 200, cy: 70, rx: 90, d: 60 },
          { cx: 900, cy: 40, rx: 120, d: 80 },
          { cx: 1250, cy: 90, rx: 70, d: 70 },
        ].map((c, i) => (
          <motion.ellipse
            key={i}
            cx={c.cx}
            cy={c.cy}
            rx={c.rx}
            ry={c.rx * 0.18}
            fill="#D6F0FB"
            animate={{ x: [0, 60, 0] }}
            transition={{ duration: c.d, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

      {/* back layer with pointer parallax */}
      <motion.g style={{ x: reduce ? 0 : backX }}>
        <motion.path
          d={SKYLINE_BACK}
          fill={fill}
          initial={false}
          animate={show ? { y: 0, opacity: 0.28 } : { y: 60, opacity: 0 }}
          transition={{ duration: 1.6, ease: EASE }}
        />
      </motion.g>

      {/* front: districts rise from the centre outwards */}
      {SKYLINE_FRONT_CHUNKS.map((c) => (
        <motion.path
          key={c.cx}
          d={c.d}
          fill={fill}
          initial={false}
          animate={show ? { y: 0 } : { y: 140 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.15 + order(c.cx) * 0.7 }}
        />
      ))}
      <motion.path
        d={KINGDOM_CENTRE}
        fill={fill}
        fillRule="evenodd"
        initial={false}
        animate={show ? { y: 0 } : { y: 260 }}
        transition={{ duration: 1.3, ease: EASE, delay: 0.05 }}
      />

      {/* pointer searchlight, clipped to the buildings */}
      {!reduce && (
        <g clipPath="url(#skyline-clip)">
          <motion.circle cx={glowX} cy={GROUND - 90} r="170" fill="url(#skyline-glow)" style={{ opacity: glowOpacitySpring }} />
        </g>
      )}

      {/* ambient life — appears once the city has risen */}
      <motion.g initial={false} animate={{ opacity: show ? 1 : 0 }} transition={{ duration: 0.8, delay: show ? 1.2 : 0 }}>
        {WINDOW_LIGHTS.map(([x, y], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width="2.6"
            height="3.4"
            rx="0.6"
            fill={i % 4 === 0 ? "#FFD9A0" : "#CFF1FF"}
            className={reduce ? "opacity-60" : "skyline-twinkle"}
            style={{ animationDelay: `${(i * 0.37) % 6}s`, animationDuration: `${3 + (i % 5)}s` }}
          />
        ))}
        {BEACONS.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y - 2} r="2.2" fill="#FF4D4D" className={reduce ? "" : "skyline-beacon"} style={{ animationDelay: `${i * 0.4}s` }} />
        ))}
        {!reduce &&
          cars.map((c, i) => (
            <circle key={i} r="2" fill={c.color}>
              <animateMotion
                dur={`${c.dur}s`}
                begin={`${c.delay}s`}
                repeatCount="indefinite"
                path={BRIDGE_PATH}
                keyPoints={c.reverse ? "1;0" : "0;1"}
                keyTimes="0;1"
                calcMode="linear"
              />
            </circle>
          ))}
      </motion.g>
    </svg>
  );
}
