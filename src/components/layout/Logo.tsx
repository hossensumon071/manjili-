import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Manzili wordmark: house mark + Arabic "منزلي" + Latin "MANZILI".
 * Swap for the official SVG from the client when available.
 */
export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const color = tone === "light" ? "text-white" : "text-ink";
  return (
    <Link href="/" aria-label="Manzili home" className={cn("inline-flex items-center gap-2.5", color, className)}>
      <span className="flex flex-col items-end leading-none">
        <span lang="ar" className="font-sans text-[22px] font-bold leading-[0.9]">
          منزلي
        </span>
        <span className="mt-0.5 text-[9.5px] font-semibold tracking-[0.42em] opacity-80">MANZILI</span>
      </span>
      <svg viewBox="0 0 40 40" className="size-9" aria-hidden="true">
        <path
          d="M5 19.5 20 7l15 12.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9.5 17.5V33h21V17.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
        <path
          d="M15 33v-8.5h10V33M15 19.5h4v3h-4zM21 19.5h4v3h-4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
