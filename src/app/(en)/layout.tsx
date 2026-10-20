import { Cairo } from "next/font/google";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { rootMetadata, rootViewport } from "@/components/layout/rootMetadata";
import "../globals.css";

const cairo = Cairo({ subsets: ["latin", "arabic"], variable: "--font-cairo", display: "swap" });

export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function EnglishRootLayout({ children }: { children: ReactNode }) {
  return (
    // suppressHydrationWarning: browser extensions (e.g. Grammarly) add attributes
    // to <html>/<body> before React loads — this silences that false alarm only.
    <html lang="en" dir="ltr" className={cairo.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SiteShell locale="en">{children}</SiteShell>
      </body>
    </html>
  );
}
