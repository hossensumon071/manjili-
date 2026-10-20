import type { Metadata, Viewport } from "next";
import { site, siteUrl } from "@/content/site";

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: site.allowIndexing ? { index: true, follow: true } : { index: false, follow: false },
  manifest: "/manifest.webmanifest",
};

export const rootViewport: Viewport = {
  themeColor: "#0477AB",
  width: "device-width",
  initialScale: 1,
};
