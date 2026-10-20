/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Copy file build checklist #1 — 301 redirects for renamed / removed routes.
  async redirects() {
    const r = (source, destination) => ({ source, destination, statusCode: 301 });
    return [
      r("/products/connected-sales-environment", "/platform-cse"),
      r("/ar/products/connected-sales-environment", "/ar/platform-cse"),
      r("/contact", "/contact-us"),
      r("/ar/contact", "/ar/contact-us"),
      r("/solutions", "/#pillars"),
      r("/ar/solutions", "/ar#pillars"),
    ];
  },
};

export default nextConfig;
