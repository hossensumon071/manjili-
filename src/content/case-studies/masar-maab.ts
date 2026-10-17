import type { CaseStudy } from "./types";

// Source: Masar Ma'ab case study copy
export const masarMaab: CaseStudy = {
  slug: "masar-maab",
  meta: {
    title: "Masar Ma’ab Makkah Case Study",
    description:
      "How Manzili deployed a browser-native 3D digital twin, sales gallery hardware, and sales team enablement for Erth Real Estate's SAR 2B+ three-tower development in Makkah.",
  },
  card: {
    client: "Erth Real Estate Development",
    project: "Masar Ma’ab",
    location: "Masar Destination, Makkah",
    badge: "Luxury Towers • SAR 2B+",
    categories: ["luxury"],
    summary:
      "How Manzili deployed a browser-native 3D digital twin, sales gallery hardware, and sales team enablement for Erth Real Estate's SAR 2B+ three-tower development in Makkah's Masar Destination.",
    metrics: ["3 Residential Towers Modeled", "100% Sacred Sightline Verification", "99.9% Showroom Display Uptime"],
  },
  scene: { variant: "towers", seed: 6, label: "Tower 2 · Haram view verified", chips: ["Live twin", "3 towers", "850m to Holy Mosque"] },
  hero: {
    crumb: "Masar Ma’ab",
    eyebrow: "Case Study • Masar Destination",
    title: "Off-Plan Residential Absorption For Masar Ma’ab Makkah",
    subheader:
      "How Manzili deployed a browser-native 3D digital twin, sales gallery hardware, and sales team enablement for Erth Real Estate's SAR 2B+ three-tower development in Makkah's Masar Destination.",
    status: ["Erth Real Estate Development", "3 Luxury Towers", "SAR 2B+ Value", "Masar Destination, Makkah"],
  },
  metadata: [
    { label: "Client", value: "Erth Real Estate Development" },
    { label: "Location", value: "Masar Destination, Makkah Al-Mukarramah (850m to Holy Mosque)" },
    { label: "Asset Type", value: "Luxury Residential & Hospitality Apartments (3 Towers, up to 31 Floors)" },
    { label: "Total Development Value", value: "Over SAR 2 Billion" },
    { label: "Built-Up Living Area", value: "81,000+ m²" },
    { label: "Primary Deliverables", value: "WebGL Digital Twin, Sales Gallery Touch Tables, Sales Enablement" },
    { label: "Pillars Represented", value: "Browser-Native 3D Twins, Sales Gallery Hardware, Frontline Enablement" },
  ],
  challenge: {
    eyebrow: "The Commercial Challenge",
    title: "Off-Plan Absorption In High-Stakes Holy City Residences",
    lead: "Selling off-plan luxury residences 850 meters from the Holy Mosque requires communicating precise floor elevations, orientation toward sacred landmarks, and direct concourse connectivity. Static brochures and 2D floor plans failed to validate premium unit pricing for institutional and private investors.",
    friction: [
      ["Ambiguous Elevation Sightlines", "Buyers question whether high-floor premiums justify pricing without verified landmark views.", "Verified View Analysis: Ingested 3D spatial elevations verify exact Holy Mosque and concourse sightlines for every floor."],
      ["Complex Masterplan Context", "Static maps fail to show how Masar's central pedestrian boulevard connects directly to towers.", "Macro-to-Micro Navigation: Interactive 3D spatial twin lets buyers explore district access, parking, and pedestrian concourses."],
      ["Extended Decision Cycles", "International and GCC buyers demand remote verification before committing capital.", "Zero-Install Web Access: WebGL twin streams instantly to remote buyer devices via simple secure web links."],
    ],
  },
  solution: {
    eyebrow: "The Technical Solution",
    title: "Interactive 3D Digital Twin With Sacred Sightline Modeling",
    lead: "Manzili deployed a dual-channel spatial platform combining high-resolution showroom touch tables with browser-native WebGL streaming. The system models all three residential towers with verified architectural precision, sun orientation data, and direct pedestrian concourse connections.",
    cards: [
      { title: "Elevation & Sightline Verification Engine", points: ["Interactive camera placement models exact sightlines from each tower floor toward the Holy Mosque concourse.", "Eliminates buyer uncertainty regarding view premiums across all three towers."] },
      { title: "Master Destination Contextual Ingestion", points: ["Integrates Masar's 3.6-kilometer urban boulevard, high-speed rail access, and underground bus transit nodes.", "Demonstrates pedestrian travel times and multi-modal mobility directly from the residences."] },
      { title: "Turnkey Sales Gallery Hardware Staging", points: ["Commercial-grade 65-inch 4K capacitive touch tables deployed in Erth's sales center.", "Low-latency touch responsiveness designed for simultaneous group presentations and investor reviews."] },
      { title: "Multi-Channel Cloud Streaming", points: ["Instant web links allow sales agents to send personalized, unit-specific 3D walkthroughs to overseas buyers.", "Zero software installations or specialized hardware required on the investor side."] },
    ],
  },
  enablement: {
    eyebrow: "Frontline Operational Enablement",
    title: "Structured Sales Enablement For Luxury Investor Journeys",
    lead: "Advanced spatial technology delivers results only when sales teams command the narrative. Manzili trained Erth's frontline commercial team through intensive floor rehearsals to guide high-net-worth buyers from masterplan orientation to unit reservation.",
    steps: [
      { title: "District Orientation & Strategic Value", body: "Advisors open on the Masar Destination macro twin, highlighting proximity to the Holy Mosque, pedestrian concourse links, and rapid transit connections." },
      { title: "Tower Selection & Elevation Verification", body: "The advisor isolates Tower 1, 2, or 3, rotating the structural elevation to showcase sun orientation, privacy buffers, and verified view cones." },
      { title: "Unit Floorplan & Finish Confirmation", body: "The interface transitions into individual 3D floorplans, displaying spatial layouts, hospitality-grade finishes, and immediate unit availability status." },
    ],
  },
  impact: {
    eyebrow: "Measurable Business Impact",
    title: "Quantifiable Presentation Performance Across Launch Milestones",
    lead: "Deploying Manzili's spatial engine equipped Erth's sales team with verified architectural geometry, eliminating spatial hesitation for private and institutional residential investors.",
    metrics: [
      { value: "3", label: "Residential Towers Modeled", body: "Over 81,000 m² of residential living area captured across three towers reaching up to 31 floors.", outcome: "100% floor-by-floor digital coverage supporting off-plan apartment selection." },
      { value: "100%", label: "Sacred Sightline Verification", body: "Exact vertical elevation modeling toward the Holy Mosque concourse and pedestrian boulevard.", outcome: "Defensible proof of orientation justifying floor-specific view premiums." },
      { value: "Zero", label: "Client App Installation", body: "Instant browser-native WebGL streaming compatible with all major devices.", outcome: "Remote GCC and overseas buyers inspect units via direct web link without technical friction." },
      { value: "99.9%", label: "Showroom Display Uptime", body: "Commercial-grade 65-inch 4K capacitive touch tables.", outcome: "Uninterrupted high-framerate presentation stability throughout investor launches." },
    ],
  },
  governance: {
    eyebrow: "Institutional Quality Standards",
    title: "Architectural Rigor And Enterprise Governance Standards",
    rows: [
      ["BIM Dimension Accuracy", "Full engineering CAD ingestion", "Precise dimensional parity ensures exact ceiling heights, window openings, and interior areas."],
      ["Local Sovereign Hosting", "KSA cloud data infrastructure", "Buyer interactions and registration data comply fully with Saudi Personal Data Protection Law (PDPL)."],
      ["Hardware Reliability SLA", "Enterprise hardware support", "Commercial 4K capacitive screens with on-demand technical support maintain uninterrupted sales operation."],
    ],
  },
  conversion: {
    headline: "Engineer Velocity For Your Next Luxury Launch",
    body: "Partner with Manzili for browser-native 3D twins, showroom hardware staging, and frontline sales enablement across your high-stakes residential developments.",
    primary: "Schedule Enterprise Consultation",
    secondary: "Explore Core Pillars",
    trust: ["Trusted by institutional developers, sovereign real estate entities, and master developers across Saudi Arabia"],
  },
};
