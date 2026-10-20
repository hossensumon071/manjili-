import { Cairo } from "next/font/google";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { rootMetadata, rootViewport } from "@/components/layout/rootMetadata";
import "../globals.css";

const cairo = Cairo({ subsets: ["latin", "arabic"], variable: "--font-cairo", display: "swap" });

export const metadata = rootMetadata;
export const viewport = rootViewport;

/** Arabic pages (Buddy's RTL notes): <html lang="ar" dir="rtl">, Cairo, taller body line height. */
export default function ArabicRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SiteShell locale="ar">{children}</SiteShell>
      </body>
    </html>
  );
}
