"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Stylised Riyadh street map with the AlRayyan HQ pin and dispatch radius. */
export function OfficeMap({ label = "Manzili · Al Rayyan District, Riyadh", overlay = "Administrative office" }: { label?: string; overlay?: string }) {
  const reduce = useReducedMotion();
  const roads = [
    "M-20 120 C 120 140, 260 90, 420 130 S 640 170, 720 150",
    "M-20 260 C 140 250, 300 290, 460 260 S 640 230, 720 250",
    "M150 -20 C 170 120, 130 260, 170 420",
    "M420 -20 C 400 100, 460 260, 430 420",
    "M600 -20 C 560 120, 620 280, 590 420",
  ];
  return (
    <div className="relative h-full min-h-[320px] overflow-hidden rounded-card bg-[linear-gradient(160deg,#F2FAFD_0%,#D9F0FA_100%)] ring-1 ring-brand/10 shadow-card">
      <svg viewBox="0 0 700 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="map-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke="#C7E7F5" strokeWidth="0.6" />
          </pattern>
          <radialGradient id="map-glow">
            <stop offset="0" stopColor="#069AD7" stopOpacity="0.25" />
            <stop offset="1" stopColor="#069AD7" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="700" height="400" fill="url(#map-grid)" />
        {/* ring road */}
        <ellipse cx="380" cy="200" rx="250" ry="150" fill="none" stroke="#FFFFFF" strokeWidth="7" />
        {roads.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth={i < 2 ? 7 : 4}
            strokeLinecap="round"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: i * 0.12, ease: "easeInOut" }}
          />
        ))}
        {/* blocks */}
        {Array.from({ length: 40 }, (_, i) => (
          <rect key={i} x={(i * 97) % 680} y={(i * 53) % 380} width={18 + (i % 4) * 6} height={12 + (i % 3) * 6} rx="2" fill="#B9E3F5" opacity="0.7" />
        ))}
        {/* dispatch radius */}
        <circle cx="470" cy="150" r="120" fill="url(#map-glow)" />
        {!reduce && (
          <motion.circle
            cx="470"
            cy="150"
            r="20"
            fill="none"
            stroke="#069AD7"
            strokeWidth="1.5"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 6, opacity: 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            style={{ transformOrigin: "470px 150px" }}
          />
        )}
        <circle cx="470" cy="150" r="9" fill="#F28E21" stroke="#fff" strokeWidth="3" />
      </svg>
      <div className="absolute start-4 top-4 rounded-xl bg-white/95 px-4 py-3 shadow-float backdrop-blur">
        <p className="text-sm font-bold text-ink">{label}</p>
      </div>
      <div className="absolute bottom-4 end-4 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-ink shadow-card">
        <span className="size-1.5 rounded-full bg-status" /> {overlay}
      </div>
    </div>
  );
}
