import type { CaseCategory } from "@/content/case-studies";
import type { SceneVariant } from "@/components/art/IsoScene";

// Source: 10_Page_04_Case_Studies_Hub.md
export const caseHub = {
  meta: {
    title: "Masterplan Case Studies & Enterprise Deployments",
    description:
      "Empirical deployment records of Manzili's spatial digital twins, connected sales environments, and showroom enablement across Tier-1 Saudi master developments.",
  },
  hero: {
    eyebrow: "Empirical Performance • KSA Proven",
    title: "Proven Off-Plan Velocity Across Flagship Masterplans",
    subheader:
      "Explore how Saudi master developers deploy Manzili's 6-pillar sales infrastructure, offline event command, and connected sales environments to eliminate operational risk and accelerate capital absorption.",
  },
  featuredSlug: "thee-erth",
  featuredHeadline: "Commercial Velocity & Zero-Downtime Launch for an 8-Tower Riyadh Masterplan",
  /** Additional Thee Erth programmes from the hub copy (cards 02 & 03). */
  programmes: [
    {
      slug: "thee-erth",
      anchor: "#solution",
      badge: "Mixed-Use Masterplan • Spatial Masterplan",
      client: "Erth Real Estate Development",
      project: "Thee Erth Commercial & Lifestyle District",
      location: "King Fahad Road, Riyadh",
      headline: "Synchronizing Masterplan Sightlines and Commercial Leasing Workflows",
      summary:
        "Architectural BIM ingestion and deterministic WebGL visualization that enabled commercial leasing directors to validate high-value retail sightlines and floor-level connectivity for prospective sovereign and institutional tenants.",
      metrics: ["120,000+ sqm Commercial GFA Visualized", "Real-Time Sightline Validation", "Sub-2-Second Web Streaming"],
      categories: ["masterplans"] as CaseCategory[],
      scene: { variant: "campus" as SceneVariant, seed: 21 },
    },
    {
      slug: "thee-erth",
      anchor: "#solution",
      badge: "Branded Residences • VIP Sales Gallery",
      client: "Erth Real Estate Development",
      project: "Raffles & Sofitel Residences at Thee Erth",
      location: "King Fahad Road, Riyadh",
      headline: "Eliminating Buyer Spatial Hesitation in Ultra-Luxury Branded Units",
      summary:
        "Integrating high-fidelity unit-level spatial tours, interactive terrace view simulations, and physical showroom touch table hardware to drive off-plan reservation commitments among ultra-high-net-worth buyers.",
      metrics: ["1:1 Architectural BIM Alignment", "Offline Showroom GPU Synchronization", "Zero Buyer Spatial Hesitation"],
      categories: ["luxury"] as CaseCategory[],
      scene: { variant: "towers" as SceneVariant, seed: 22 },
    },
  ],
  standards: {
    title: "Enterprise Deployment Standards",
    items: [
      { icon: "shield" as const, body: "Single-Source Master Service Agreement covering 3D assets, AV hardware, and sales coaching." },
      { icon: "rocket" as const, body: "Deterministic on-site launch command with hot-standby engineers deployed at your sales gallery." },
      { icon: "building" as const, body: "Full compliance with Saudi Personal Data Protection Law (PDPL), REGA guidelines, and Wafi off-plan escrow statutes." },
    ],
  },
  cta: {
    badge: ["Qualified Inquiries Only"],
    headline: "Scope Your Masterplan Deployment",
    body: "Submit your portfolio specifications to evaluate digital twin architecture, sales gallery hardware, and commercial milestone timing with our Riyadh engineering directors.",
    primary: { label: "Book Technical Scoping Session", href: "/contact" },
  },
};
