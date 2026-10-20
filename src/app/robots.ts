import type { MetadataRoute } from "next";
import { site, siteUrl } from "@/content/site";

// QA F3: staging is noindex. Set NEXT_PUBLIC_ALLOW_INDEXING=true on production only.
export default function robots(): MetadataRoute.Robots {
  if (!site.allowIndexing) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
