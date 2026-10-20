"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * The soft light streaks that run across the blue bands in the design.
 * Pure SVG, decorative only.
 */
export function Sheen({ className, flip }: { className?: string; flip?: boolean }) {
  // unique per instance — several sheens can share a page (QA F6)
  const uid = useId().replace(/:/g, "");
  const grad = `sheen-a-${uid}`;
  const blur = `sheen-blur-${uid}`;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute inset-0 -z-10 h-full w-full", flip && "-scale-x-100", className)}
    >
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0.85" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <filter id={blur} x="-10%" y="-50%" width="120%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <g fill="none" stroke={`url(#${grad})`} strokeLinecap="round">
        <path d="M-40 560 C 260 470, 520 330, 1240 300" strokeWidth="10" opacity="0.35" filter={`url(#${blur})`} />
        <path d="M-40 560 C 260 470, 520 330, 1240 300" strokeWidth="1.5" opacity="0.9" />
        <path d="M-60 620 C 300 520, 640 420, 1240 410" strokeWidth="14" opacity="0.25" filter={`url(#${blur})`} />
        <path d="M-60 620 C 300 520, 640 420, 1240 410" strokeWidth="1.2" opacity="0.7" />
        <path d="M200 640 C 520 540, 900 500, 1260 520" strokeWidth="1" opacity="0.5" />
      </g>
    </svg>
  );
}
