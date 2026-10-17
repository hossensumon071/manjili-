import type { PillarPageData } from "./types";

// Source: 09_Pillar_06_Lifecycle_Support.md
export const pillar06: PillarPageData = {
  href: "/pillars/full-lifecycle-support",
  meta: {
    title: "Pillar 06: Full Lifecycle Support",
    description:
      "From architectural concept and off-plan digital twins to Matterport 3D tours of model units and ready-built assets — integrated into one web platform.",
  },
  hero: {
    crumb: "Pillar 06: Full Lifecycle Support",
    eyebrow: "Pillar 06 • Lifecycle Support",
    title: "Full Lifecycle Support From Concept To Delivery",
    subheader:
      "We support real estate developers across every project stage—transforming architectural concepts into off-plan digital twins, capturing Matterport 3D virtual tours of model units, and integrating all spatial assets into your central web platform for unbuilt and ready-built portfolios.",
    primary: { label: "Explore Lifecycle Support", href: "/contact" },
    secondary: { label: "View Virtual Tours", href: "#tours" },
    status: ["Lifecycle Continuity", "Architectural Concept", "Digital Twin", "Matterport 3D", "Ready-Built Assets"],
    panel: {
      title: "Project lifecycle · Asset continuity",
      live: "Continuous",
      items: [
        { icon: "layers", label: "Architectural concept", meta: "CAD · BIM · GIS ingestion", state: "ok" },
        { icon: "cube", label: "Off-plan digital twin", meta: "UE5 gallery app + WebGL portal", state: "ok" },
        { icon: "eye", label: "Matterport model unit tours", meta: "Pro3 LiDAR capture · embedded", state: "active" },
        { icon: "building", label: "Ready-built portfolio", meta: "Leasing & secondary sales tours", state: "idle" },
      ],
      footer: "Every spatial asset feeds one central web platform",
    },
  },
  architecture: {
    eyebrow: "Lifecycle Architecture",
    title: "Sustaining Sales Velocity Across Every Development Stage",
    lead: "Master developments evolve across years of phased capital deployment. Manzili ensures your 3D assets never become obsolete shelfware, transitioning directly from off-plan digital twins to physical model unit scans and completed asset sales.",
    features: [
      {
        tag: "Stage 01 • Off-Plan",
        title: "Concept Modeling & Digital Twins",
        body: "Converting architectural CAD, BIM, and GIS data into interactive Unreal Engine 5 spatial environments once a project is Wafi-approved to sell. Developers deploy high-fidelity masterplans on sales gallery touch tables and stream lightweight WebGL replicas to prospective buyers worldwide.",
        bullets: [
          { title: "CAD & BIM Ingestion", body: "Accurate spatial geometry from engineering files" },
          { title: "Wafi-Approved Sales Alignment", body: "Ready for off-plan market launch" },
          { title: "Multi-Platform Deployment", body: "Synchronized showroom hardware and mobile web" },
        ],
      },
      {
        tag: "Stage 02 • On-Site Mockups",
        title: "Matterport 3D Model Unit Tours",
        body: "As on-site mockups and show villas complete, our certified spatial technicians scan physical model units using Matterport Pro3 cameras. We embed these high-density 3D dollhouse scans directly into the web platform, allowing remote investors to inspect real-world finishes and layouts alongside the unbuilt digital twin.",
        bullets: [
          { title: "Matterport Pro3 LiDAR Capture", body: "Precision millimeter-accurate interior geometry" },
          { title: "Integrated Web Viewer", body: "Direct co-browsing within project portal" },
          { title: "Finish & Material Validation", body: "Authentic spatial inspection for buyers" },
        ],
      },
      {
        tag: "Stage 03 • Completion",
        title: "Ready-Built Portfolio Virtual Tours",
        body: "Lifecycle support extends through project delivery to secondary inventory and ready-built commercial assets. We capture full-scale Matterport virtual tours across completed residential towers, corporate headquarters, and retail districts—equipping asset management teams to secure tenant and buyer contracts rapidly.",
        bullets: [
          { title: "Ready Asset Monetization", body: "Immediate leasing and secondary sales enablement" },
          { title: "Portfolio-Wide Management", body: "Unified dashboard across all completed developments" },
          { title: "Long-Term Asset Archival", body: "Accurate digital record for facility handover" },
        ],
      },
    ],
  },
  tours: {
    eyebrow: "Live Demonstrations",
    title: "Interactive Matterport 3D Virtual Tours",
    lead: "Experience how our Matterport 3D scans integrate into the developer web portal, enabling remote buyers to inspect physical model units and ready-built properties with spatial precision.",
    tours: [
      {
        title: "Luxury Show Villa Model Unit",
        type: "Physical Model Unit • Off-Plan Validation",
        description:
          "High-density LiDAR scan capturing architectural proportions, bespoke interior joinery, and natural courtyard light simulation.",
        // Paste the Matterport share link here, e.g. "https://my.matterport.com/show/?m=XXXX"
        embedUrl: "",
      },
      {
        title: "Completed Residential Tower Penthouse",
        type: "Ready-Built Asset • Immediate Delivery",
        description:
          "Comprehensive interior and terrace scan providing prospective buyers with panoramic city orientation and verified floor layouts.",
        embedUrl: "",
      },
    ],
  },
  proof: {
    eyebrow: "Commercial Proof",
    title: "Measurable Yield Across The Multi-Year Development Cycle",
    items: [
      {
        metric: "100% Asset Reusability",
        title: "Zero 3D Asset Depreciation",
        body: "Continuous model updates preserve asset value as architectural plans change, preventing expensive re-renders and keeping sales galleries synchronized with real construction progress.",
      },
      {
        metric: "4.2x Remote Tour Reach",
        title: "Accelerated Model Unit Payback",
        body: "Matterport 3D scans make physical show villas accessible to international and GCC investors instantly online, multiplying the commercial return on showroom construction capital.",
      },
      {
        metric: "Single Web Dashboard",
        title: "Unified Portfolio Platform",
        body: "Manage unbuilt off-plan towers, physical model units, and ready-built stock from a single web management interface, streamlining sales operations across your entire portfolio.",
      },
    ],
  },
  faq: {
    eyebrow: "Lifecycle FAQ",
    headline: "Full Lifecycle Support Operational Questions",
    items: [
      {
        q: "How do Matterport virtual tours integrate into the web platform?",
        a: "Matterport 3D scans are embedded directly into the developer's custom web platform. When a prospective buyer or sales consultant views a unit on the interactive floor plan, they can transition instantly between the unbuilt 3D model and the physical model unit scan.",
      },
      {
        q: "Can Manzili capture 3D tours for ready-built completed projects?",
        a: "Yes. Our certified Riyadh-based technicians capture Matterport 3D virtual tours for completed residential compounds, ready villas, commercial office buildings, and retail developments, providing developers with high-fidelity digital assets to accelerate leasing and secondary sales.",
      },
      {
        q: "What happens when architectural designs or phase layouts change?",
        a: "Under our continuous lifecycle service level agreement, our 3D engineering team ingests updated BIM and CAD files to refresh the core Unreal Engine digital twin and WebGL platform, ensuring sales center hardware and web apps reflect current engineering reality.",
      },
    ],
  },
  nav: { eyebrow: "Infrastructure Complete", ctaLabel: "Explore All 6 Pillars On Solutions Overview" },
  conversion: {
    headline: "Support Your Complete Real Estate Lifecycle",
    body: "Partner with Manzili for continuous 3D engineering, Matterport model unit scanning, and unified web platform deployment across your development portfolio.",
    primary: { label: "Schedule Portfolio Audit", href: "/contact" },
    trust: ["Concept to Delivery", "Certified Matterport Operators"],
  },
};
