import type { CaseStudy } from "./types";

// Source: Dyari Signature case study copy
export const dyariSignature: CaseStudy = {
  slug: "dyari-signature",
  meta: {
    title: "Dyari Signature Riyadh Case Study",
    description:
      "How Manzili deployed an interactive multi-building digital twin, exhibition hardware staging, and frontline enablement for Dyari Real Estate's 406-unit community at RestateX.",
  },
  card: {
    client: "Dyari Real Estate Development",
    project: "Dyari Signature",
    location: "Al Mounsiya, Riyadh",
    badge: "RestateX Diamond Sponsor • 406 Units",
    categories: ["exhibition", "masterplans"],
    summary:
      "How Manzili deployed an interactive multi-building digital twin, exhibition hardware staging, and frontline enablement for Dyari Real Estate's 406-unit community at RestateX.",
    metrics: ["406 Units Fully Modeled", "Sub-Second Parametric Search", "Zero Exhibition Hardware Downtime"],
  },
  scene: { variant: "grid36", seed: 7, label: "Building 17 · 3 matches", chips: ["Live twin", "36 buildings", "406 units"] },
  hero: {
    crumb: "Dyari Signature",
    eyebrow: "Case Study • RestateX Staging",
    title: "High-Velocity Absorption For Dyari Signature Riyadh",
    subheader:
      "How Manzili deployed an interactive multi-building digital twin, exhibition hardware staging, and frontline enablement for Dyari Real Estate's 406-unit community at RestateX.",
    status: ["Dyari Real Estate", "36 Buildings", "406 Residential Units", "Al Mounsiya, Riyadh", "RestateX Diamond Sponsor"],
  },
  metadata: [
    { label: "Client", value: "Dyari Real Estate Development" },
    { label: "Location", value: "Al Mounsiya District, Riyadh" },
    { label: "Asset Type", value: "Master-Planned Residential Community (36 Buildings, 406 Units)" },
    { label: "Unit Typologies", value: "Modern Apartments, Penthouses, Private Villas" },
    { label: "Exhibition Profile", value: "RestateX Diamond Sponsor Flagship Pavilion" },
    { label: "Primary Deliverables", value: "Multi-Building WebGL Twin, 4K Touch Tables, Sales Enablement" },
    { label: "Pillars Represented", value: "Browser-Native 3D Twins, Sales Gallery Hardware, Frontline Enablement" },
  ],
  challenge: {
    eyebrow: "The Commercial Challenge",
    title: "Navigating Multi-Building Communities Under High Exhibition Traffic",
    lead: "As Diamond Sponsor at RestateX, Dyari anticipated intense buyer traffic across four exhibition days. Presenting 406 residential units across 36 separate buildings using physical scale models or printed brochures created severe agent bottlenecks and slowed reservation velocity.",
    friction: [
      ["Catalog Browsing Inefficiency", "Buyers spend 15+ minutes flipping printed booklets to locate unit types and building numbers.", "Sub-Second Inventory Filtering: Advisors isolate units by budget, bedroom count, floor, and orientation with two screen taps."],
      ["Uncertain Community Orientation", "Static floor plans cannot show building proximity to central gardens, parking, and access roads.", "Spatial Community Twin: 3D macro navigation visualizes courtyard views, sun orientation, and neighborhood walkability."],
      ["Exhibition Network Collapse", "Overloaded venue Wi-Fi networks paralyze cloud-only presentations during peak visitor hours.", "Offline-First Hybrid Caching: Local high-performance edge hardware runs uninterrupted during complete venue connectivity outages."],
    ],
  },
  solution: {
    eyebrow: "The Technical Solution",
    title: "Multi-Building Spatial Engine With Sub-Second Unit Filtering",
    lead: "Manzili engineered a centralized digital twin mapping all 36 buildings of Dyari Signature. The platform synchronizes large-format commercial touch tables with synchronized overhead LED displays and mobile-friendly buyer handoffs.",
    cards: [
      { title: "36-Building Masterplan Spatial Navigation", points: ["Unified 3D coordinates allow smooth camera navigation across all 36 buildings, internal roads, and community parks.", "Clear visual zoning demonstrates privacy buffers and vehicle ingress/egress points."] },
      { title: "Instant Parametric Unit Search", points: ["Dynamic filtering isolates any of the 406 units by layout type, floor elevation, surface area, and availability status.", "Eliminates manual lookups and accelerates prospective buyer qualification."] },
      { title: "Exhibition-Grade Touch Hardware Integration", points: ["Heavy-duty 4K touch tables paired with synchronized ultra-high-definition presentation screens.", "Allows waiting visitors to observe live unit walk-throughs while agents present on primary consoles."] },
      { title: "Digital Takeaway Handoff via QR", points: ["Visitors scan a dynamic QR code directly from the touch table to load their curated unit selection on their personal smartphone.", "Preserves unit interest without printing single-use brochures."] },
    ],
  },
  enablement: {
    eyebrow: "Frontline Operational Enablement",
    title: "Frontline Sales Enablement For High-Volume Exhibition Floors",
    lead: "High-footfall exhibitions require disciplined presentation protocols. Manzili trained Dyari's commercial team to execute rapid 90-second customer qualifications, matching buyer requirements to specific units before initiating detailed spatial walk-throughs.",
    steps: [
      { title: "High-Speed Multi-Criteria Filtering", body: "The agent inputs buyer criteria—bedroom count, price point, preferred building—instantly reducing 406 units to 3 top recommendations." },
      { title: "Spatial Context & Orientation Verification", body: "The advisor guides the buyer through the 3D twin, showing building placement, courtyard exposure, parking access, and proximity to community amenities." },
      { title: "Unit Inspection & Digital Allocation Handover", body: "The advisor examines the 3D interior layout with the client, confirms reservation readiness, and transmits the verified unit record via QR code." },
    ],
  },
  impact: {
    eyebrow: "Measurable Business Impact",
    title: "Proven Commercial Performance Under Peak Exhibition Traffic",
    lead: "Deployed across the RestateX exhibition floor, Manzili's platform eliminated presentation bottlenecks and maintained continuous commercial operations throughout all peak visitor periods.",
    metrics: [
      { value: "406", label: "Units Fully Modeled", body: "Comprehensive 3D digital twin coverage across all 36 buildings in Al Mounsiya, Riyadh.", outcome: "100% digital floor-by-floor visibility for every apartment in the development." },
      { value: "<1s", label: "Sub-Second Parametric Search", body: "Instantaneous database querying by unit type, floor level, and view orientation.", outcome: "Advisors pinpoint matching available residences in real time during live discussions." },
      { value: "100%", label: "Real-Time Inventory Control", body: "Central reservation locking synchronized across all sales gallery touch screens.", outcome: "Eliminates risk of overlapping allocations during peak launch footfall." },
      { value: "Zero", label: "Exhibition Hardware Downtime", body: "100% operational uptime delivered through dual-layer local edge caching.", outcome: "Uninterrupted interactive presentation continuity throughout all RestateX sessions." },
    ],
  },
  governance: {
    eyebrow: "Institutional Quality Standards",
    title: "Enterprise Reliability And High-Density Footfall Infrastructure",
    rows: [
      ["High-Density Touch Hardware", "Commercial-grade capacitive touch", "Tested for continuous 12-hour exhibition usage without thermal degradation or touch drift."],
      ["Data Integrity & Compliance", "Sovereign KSA cloud hosting", "Lead capture and client information handled in full accordance with Saudi data privacy regulations."],
      ["Fail-Safe Offline Execution", "Embedded local asset cache", "Full spatial interactivity functions smoothly without active internet connectivity."],
    ],
  },
  conversion: {
    headline: "Scale Sales Velocity For Your Next Community",
    body: "Partner with Manzili for multi-building spatial digital twins, exhibition hardware staging, and frontline enablement across high-density residential developments.",
    primary: "Schedule Enterprise Consultation",
    secondary: "Explore Core Pillars",
    trust: ["Trusted by institutional developers, sovereign real estate entities, and master developers across Saudi Arabia"],
  },
};
