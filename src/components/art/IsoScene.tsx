"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId, useMemo } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ *
 *  IsoScene — animated isometric "digital twin" illustrations.
 *  Every scene is generated from a small layout recipe, so each case
 *  study gets its own masterplan while the visual language stays one.
 * ------------------------------------------------------------------ */

export type SceneVariant =
  | "masterplan" // mixed-use tower cluster on a podium (Thee Erth)
  | "towers" // three slender residential towers (Masar Ma'ab)
  | "villas" // villa community with plots (Malfa, Al Habib)
  | "suburb" // large destination grid with parks + mosque (NHC)
  | "grid36" // 6×6 mid-rise community (Dyari Signature)
  | "campus" // office campus around a courtyard (Al Basateen)
  | "waterfront"; // single branded tower on the corniche (Raffles)

type Box = {
  x: number;
  y: number;
  w: number;
  d: number;
  h: number;
  kind?: "tower" | "block" | "villa" | "context" | "podium";
  highlight?: boolean;
  dome?: boolean;
};
type Tree = { x: number; y: number; r: number };
type Plate = { x: number; y: number; w: number; d: number; fill: string };

const C30 = Math.cos(Math.PI / 6);
const S30 = 0.5;
const iso = (x: number, y: number, z: number): [number, number] => [(x - y) * C30, (x + y) * S30 - z];
const pts = (p: [number, number][]) => p.map(([a, b]) => `${a.toFixed(1)},${b.toFixed(1)}`).join(" ");

function rng(seed: number) {
  let s = seed % 2147483647 || 1;
  return () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
}

/** Layout recipes ---------------------------------------------------- */
function buildLayout(variant: SceneVariant, seed: number) {
  const r = rng(seed);
  const boxes: Box[] = [];
  const trees: Tree[] = [];
  const plates: Plate[] = [];
  let size = 240;
  const tree = (x: number, y: number) => trees.push({ x, y, r: 3.5 + r() * 2.5 });

  switch (variant) {
    case "masterplan": {
      size = 260;
      plates.push({ x: 40, y: 40, w: 180, d: 180, fill: "#DCEFF7" });
      boxes.push({ x: 50, y: 50, w: 160, d: 160, h: 14, kind: "podium" });
      const spots = [
        [60, 60], [110, 58], [160, 62], [62, 112], [160, 112], [60, 162], [112, 162], [162, 160],
      ];
      spots.forEach(([x, y], i) =>
        boxes.push({ x, y, w: 30, d: 30, h: 14 + 70 + r() * 90, kind: "tower", highlight: i === 6 }),
      );
      boxes.push({ x: 100, y: 100, w: 46, d: 46, h: 30, kind: "block" });
      for (let i = 0; i < 26; i++) tree(10 + r() * 240, i % 2 ? 236 + r() * 18 : 10 + r() * 22);
      break;
    }
    case "towers": {
      size = 240;
      plates.push({ x: 60, y: 60, w: 120, d: 120, fill: "#DCEFF7" });
      boxes.push({ x: 66, y: 66, w: 108, d: 108, h: 12, kind: "podium" });
      boxes.push({ x: 74, y: 76, w: 34, d: 34, h: 210, kind: "tower" });
      boxes.push({ x: 128, y: 74, w: 34, d: 34, h: 180, kind: "tower", highlight: true });
      boxes.push({ x: 100, y: 128, w: 34, d: 34, h: 195, kind: "tower" });
      for (let i = 0; i < 18; i++) {
        const x = 8 + r() * 224, y = 8 + r() * 224;
        if (x > 52 && x < 188 && y > 52 && y < 188) continue;
        boxes.push({ x, y, w: 14 + r() * 14, d: 14 + r() * 14, h: 16 + r() * 40, kind: "context" });
      }
      for (let i = 0; i < 16; i++) tree(54 + r() * 130, i % 2 ? 46 + r() * 8 : 184 + r() * 8);
      break;
    }
    case "villas": {
      size = 250;
      for (let row = 0; row < 4; row++)
        for (let col = 0; col < 5; col++) {
          const x = 20 + col * 44 + (row % 2) * 4, y = 20 + row * 56;
          plates.push({ x: x - 4, y: y - 4, w: 38, d: 44, fill: (row + col) % 3 ? "#E3F3FA" : "#D6EBDF" });
          boxes.push({ x, y, w: 26, d: 22, h: 16, kind: "villa", highlight: row === 1 && col === 3 });
          boxes.push({ x: x + 4, y: y + 3, w: 16, d: 14, h: 28, kind: "villa", highlight: row === 1 && col === 3 });
          tree(x + 30, y + 30);
        }
      break;
    }
    case "suburb": {
      size = 300;
      for (let gx = 0; gx < 5; gx++)
        for (let gy = 0; gy < 5; gy++) {
          const x0 = 14 + gx * 56, y0 = 14 + gy * 56;
          if (gx === 2 && gy === 2) {
            plates.push({ x: x0, y: y0, w: 44, d: 44, fill: "#CDEBD8" });
            boxes.push({ x: x0 + 12, y: y0 + 12, w: 20, d: 20, h: 18, kind: "block", dome: true, highlight: true });
            for (let t = 0; t < 6; t++) tree(x0 + 4 + r() * 36, y0 + 4 + r() * 36);
            continue;
          }
          if ((gx + gy * 3 + seed) % 7 === 0) {
            plates.push({ x: x0, y: y0, w: 44, d: 44, fill: "#CDEBD8" });
            for (let t = 0; t < 7; t++) tree(x0 + 4 + r() * 36, y0 + 4 + r() * 36);
            continue;
          }
          plates.push({ x: x0, y: y0, w: 44, d: 44, fill: "#E3F3FA" });
          for (let i = 0; i < 2; i++)
            for (let j = 0; j < 2; j++)
              boxes.push({ x: x0 + 3 + i * 21, y: y0 + 3 + j * 21, w: 17, d: 17, h: 10 + r() * 22, kind: "block" });
        }
      break;
    }
    case "grid36": {
      size = 260;
      plates.push({ x: 96, y: 96, w: 68, d: 68, fill: "#CDEBD8" });
      for (let i = 0; i < 6; i++)
        for (let j = 0; j < 6; j++) {
          const x = 14 + i * 40, y = 14 + j * 40;
          if (i >= 2 && i <= 3 && j >= 2 && j <= 3) continue;
          boxes.push({ x, y, w: 26, d: 26, h: 30 + r() * 26, kind: "block", highlight: i === 4 && j === 1 });
        }
      for (let t = 0; t < 14; t++) tree(100 + r() * 60, 100 + r() * 60);
      boxes.push({ x: 110, y: 110, w: 4, d: 4, h: 0.1, kind: "context" });
      break;
    }
    case "campus": {
      size = 250;
      plates.push({ x: 82, y: 82, w: 86, d: 86, fill: "#CDEBD8" });
      plates.push({ x: 10, y: 200, w: 230, d: 34, fill: "#D3E4EC" });
      boxes.push({ x: 30, y: 30, w: 70, d: 44, h: 64, kind: "block" });
      boxes.push({ x: 150, y: 30, w: 70, d: 44, h: 76, kind: "block", highlight: true });
      boxes.push({ x: 30, y: 120, w: 44, d: 70, h: 54, kind: "block" });
      boxes.push({ x: 176, y: 120, w: 44, d: 70, h: 58, kind: "block" });
      boxes.push({ x: 104, y: 36, w: 42, d: 30, h: 22, kind: "block" });
      for (let t = 0; t < 18; t++) tree(88 + r() * 74, 88 + r() * 74);
      for (let c = 0; c < 10; c++) plates.push({ x: 18 + c * 22, y: 210, w: 14, d: 8, fill: "#FFFFFF" });
      break;
    }
    case "waterfront": {
      size = 250;
      plates.push({ x: 0, y: 170, w: 250, d: 80, fill: "#7FCEF0" });
      plates.push({ x: 0, y: 156, w: 250, d: 14, fill: "#F4E6C8" });
      boxes.push({ x: 90, y: 90, w: 50, d: 50, h: 14, kind: "podium" });
      boxes.push({ x: 98, y: 96, w: 34, d: 38, h: 250, kind: "tower", highlight: true });
      for (let i = 0; i < 14; i++) {
        const x = 6 + r() * 230, y = 6 + r() * 130;
        if (x > 70 && x < 160 && y > 70) continue;
        boxes.push({ x, y, w: 14 + r() * 16, d: 14 + r() * 16, h: 18 + r() * 60, kind: "context" });
      }
      for (let i = 0; i < 12; i++) tree(10 + i * 20, 150 + r() * 4);
      break;
    }
  }
  return { boxes, trees, plates, size };
}

/** Facade bands for towers / blocks */
function bands(b: Box) {
  const step = b.kind === "tower" ? 9 : b.kind === "block" ? 8 : 0;
  if (!step) return [];
  const out: number[] = [];
  for (let z = (b.kind === "tower" ? 18 : 6); z < b.h - 4; z += step) out.push(z);
  return out;
}

type Props = {
  variant: SceneVariant;
  seed?: number;
  label?: string;
  className?: string;
  /** "card" = compact, no pin label */
  density?: "full" | "card";
};

export function IsoScene({ variant, seed = 3, label, className, density = "full" }: Props) {
  const uid = useId().replace(/:/g, "");
  const reduce = useReducedMotion();
  const { boxes, trees, plates, size } = useMemo(() => buildLayout(variant, seed), [variant, seed]);

  // Painter's order (back to front)
  const sorted = useMemo(
    () => [...boxes].sort((a, b) => a.x + a.y + a.w / 2 + a.d / 2 - (b.x + b.y + b.w / 2 + b.d / 2) || a.h - b.h),
    [boxes],
  );

  // Fit viewBox to the projected scene
  const corners = [iso(0, 0, 0), iso(size, 0, 0), iso(size, size, 0), iso(0, size, 0)];
  const tallest = Math.max(...boxes.map((b) => b.h), 40);
  const minX = Math.min(...corners.map((c) => c[0])) - 20;
  const maxX = Math.max(...corners.map((c) => c[0])) + 20;
  const minY = Math.min(...corners.map((c) => c[1])) - tallest - 40;
  const maxY = Math.max(...corners.map((c) => c[1])) + 24;
  const vb = `${minX} ${minY} ${maxX - minX} ${maxY - minY}`;
  // keep pin + label a constant visual size regardless of scene scale
  const k = Math.max(maxX - minX, (maxY - minY) * 1.3) / 420;

  const hl = boxes.find((b) => b.highlight && b.kind !== "villa") ?? boxes.find((b) => b.highlight);
  const pin = hl ? iso(hl.x + hl.w / 2, hl.y + hl.d / 2, hl.h + (hl.dome ? 14 : 0)) : null;
  const id = (n: string) => `${uid}-${n}`;
  const ground = pts(corners);

  return (
    <svg viewBox={vb} className={cn("h-full w-full", className)} aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id={id("top")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#EEF8FC" />
        </linearGradient>
        <linearGradient id={id("left")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E9F5FA" />
          <stop offset="1" stopColor="#C7E2EE" />
        </linearGradient>
        <linearGradient id={id("right")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C2E1EE" />
          <stop offset="1" stopColor="#97C8DD" />
        </linearGradient>
        <linearGradient id={id("hl")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F7B266" />
          <stop offset="1" stopColor="#F28E21" />
        </linearGradient>
        <linearGradient id={id("scan")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7DD8FF" stopOpacity="0" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#7DD8FF" stopOpacity="0" />
        </linearGradient>
        <clipPath id={id("ground")}>
          <polygon points={ground} />
        </clipPath>
        <filter id={id("shadow")} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      {/* Ground plate */}
      <polygon points={ground} fill="#F2FAFD" />
      <g clipPath={`url(#${id("ground")})`}>
        {Array.from({ length: Math.ceil(size / 20) + 1 }, (_, i) => i * 20).map((v) => (
          <g key={v} stroke="#D4EAF4" strokeWidth="0.6">
            <line x1={iso(v, 0, 0)[0]} y1={iso(v, 0, 0)[1]} x2={iso(v, size, 0)[0]} y2={iso(v, size, 0)[1]} />
            <line x1={iso(0, v, 0)[0]} y1={iso(0, v, 0)[1]} x2={iso(size, v, 0)[0]} y2={iso(size, v, 0)[1]} />
          </g>
        ))}
        {plates.map((p, i) => (
          <polygon
            key={i}
            points={pts([iso(p.x, p.y, 0), iso(p.x + p.w, p.y, 0), iso(p.x + p.w, p.y + p.d, 0), iso(p.x, p.y + p.d, 0)])}
            fill={p.fill}
          />
        ))}
        {/* digital-twin scan sweep */}
        {!reduce && density === "full" && (
          <motion.rect
            x={minX}
            y={minY}
            width={(maxX - minX) * 0.22}
            height={maxY - minY}
            fill={`url(#${id("scan")})`}
            initial={{ x: -(maxX - minX) * 0.3 }}
            animate={{ x: (maxX - minX) * 1.1 }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
          />
        )}
      </g>
      <polygon points={ground} fill="none" stroke="#BFE0EE" strokeWidth="1" />

      {/* Trees */}
      {trees.map((t, i) => {
        const [sx, sy] = iso(t.x, t.y, 0);
        return (
          <g key={`t${i}`}>
            <ellipse cx={sx + 2} cy={sy + 1} rx={t.r} ry={t.r * 0.5} fill="#373535" opacity="0.12" />
            <circle cx={sx} cy={sy - t.r} r={t.r} fill={i % 3 ? "#3FAE7A" : "#2E9466"} />
            <circle cx={sx - t.r * 0.35} cy={sy - t.r * 1.3} r={t.r * 0.4} fill="#7FD3A6" opacity="0.7" />
          </g>
        );
      })}

      {/* Buildings */}
      {sorted.map((b, i) => {
        if (b.h < 1) return null;
        const ctx = b.kind === "context";
        const isHl = !!b.highlight;
        const top = pts([iso(b.x, b.y, b.h), iso(b.x + b.w, b.y, b.h), iso(b.x + b.w, b.y + b.d, b.h), iso(b.x, b.y + b.d, b.h)]);
        const right = pts([iso(b.x + b.w, b.y, 0), iso(b.x + b.w, b.y + b.d, 0), iso(b.x + b.w, b.y + b.d, b.h), iso(b.x + b.w, b.y, b.h)]);
        const left = pts([iso(b.x, b.y + b.d, 0), iso(b.x + b.w, b.y + b.d, 0), iso(b.x + b.w, b.y + b.d, b.h), iso(b.x, b.y + b.d, b.h)]);
        const shadow = pts([iso(b.x, b.y, 0), iso(b.x + b.w, b.y, 0), iso(b.x + b.w + b.h * 0.35, b.y + b.d + b.h * 0.1, 0), iso(b.x + b.h * 0.35, b.y + b.d + b.h * 0.1, 0)]);
        const delay = 0.15 + (i / sorted.length) * 1.1;
        return (
          <motion.g
            key={i}
            initial={reduce ? false : { opacity: 0, y: -24 }}
            whileInView={{ opacity: ctx ? 0.55 : 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
          >
            {!ctx && b.kind !== "podium" && <polygon points={shadow} fill="#0B5D80" opacity="0.1" filter={`url(#${id("shadow")})`} />}
            <polygon points={left} fill={`url(#${id("left")})`} stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="0.5" />
            <polygon points={right} fill={`url(#${id("right")})`} stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="0.5" />
            {!ctx &&
              bands(b).map((z) => (
                <g key={z}>
                  <polygon
                    points={pts([iso(b.x + 1, b.y + b.d, z), iso(b.x + b.w - 1, b.y + b.d, z), iso(b.x + b.w - 1, b.y + b.d, z + 4), iso(b.x + 1, b.y + b.d, z + 4)])}
                    fill={isHl ? "#F6A54D" : "#5EB3D8"}
                    opacity={isHl ? 0.55 : 0.5}
                  />
                  <polygon
                    points={pts([iso(b.x + b.w, b.y + 1, z), iso(b.x + b.w, b.y + b.d - 1, z), iso(b.x + b.w, b.y + b.d - 1, z + 4), iso(b.x + b.w, b.y + 1, z + 4)])}
                    fill={isHl ? "#D9761A" : "#2F8BB3"}
                    opacity={isHl ? 0.5 : 0.55}
                  />
                </g>
              ))}
            {b.kind === "villa" && (
              <polygon
                points={pts([iso(b.x + 3, b.y + b.d, 4), iso(b.x + b.w - 3, b.y + b.d, 4), iso(b.x + b.w - 3, b.y + b.d, b.h - 4), iso(b.x + 3, b.y + b.d, b.h - 4)])}
                fill="#5EB3D8"
                opacity="0.45"
              />
            )}
            <polygon points={top} fill={isHl ? `url(#${id("hl")})` : `url(#${id("top")})`} />
            {b.dome && (() => {
              const [cx, cy] = iso(b.x + b.w / 2, b.y + b.d / 2, b.h);
              return (
                <>
                  <path d={`M${cx - 12} ${cy} a12 12 0 0 1 24 0 z`} fill="#FFFFFF" stroke="#F7B266" />
                  <rect x={cx + 14} y={cy - 30} width="3" height="34" fill="#FFFFFF" />
                </>
              );
            })()}
          </motion.g>
        );
      })}

      {/* Highlight pin */}
      {pin && density === "full" && (
        <g transform={`translate(${pin[0]} ${pin[1]}) scale(${k})`}>
          <line x1="0" y1="0" x2="0" y2="-26" stroke="#F28E21" strokeWidth="1.5" />
          {!reduce && (
            <motion.circle
              cx="0"
              cy="-30"
              r="5"
              fill="none"
              stroke="#F28E21"
              initial={{ scale: 1, opacity: 0.9 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              style={{ transformOrigin: "0px -30px" }}
            />
          )}
          <circle cx="0" cy="-30" r="5" fill="#F28E21" stroke="#fff" strokeWidth="2" />
          {label && (
            <g transform="translate(10 -46)">
              <rect width={label.length * 5.6 + 18} height="22" rx="11" fill="#373535" opacity="0.88" />
              <text x="10" y="15" fontSize="10.5" fontWeight="700" fill="#fff" style={{ fontFamily: "var(--font-cairo), sans-serif" }}>
                {label}
              </text>
            </g>
          )}
        </g>
      )}
    </svg>
  );
}

/** Branded backdrop + floating chips around an IsoScene. */
export function SceneFrame({
  variant,
  seed,
  label,
  chips = [],
  className,
  density = "full",
}: Props & { chips?: string[] }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[radial-gradient(120%_90%_at_20%_0%,#3DB2E3_0%,#069AD7_45%,#0583BA_100%)]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 [mask-image:radial-gradient(70%_70%_at_50%_50%,#000,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className={cn("absolute inset-0", density === "full" ? "p-6 sm:p-8" : "p-3 sm:p-4")}>
        <IsoScene variant={variant} seed={seed} label={label} density={density} />
      </div>
      {chips.length > 0 && (
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
          {chips.map((c, i) => (
            <span
              key={c}
              className="flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-ink shadow-sm backdrop-blur"
            >
              {i === 0 && <span className="size-1.5 rounded-full bg-status" />}
              {c}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
