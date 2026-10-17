"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Honour the visitor's "reduce motion" OS setting across every animation. */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
