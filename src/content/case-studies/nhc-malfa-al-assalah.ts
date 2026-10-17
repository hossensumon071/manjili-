import type { CaseStudy } from "./types";

// Source: NHC Malfa Al-Assalah case study copy
export const nhcMalfa: CaseStudy = {
  slug: "nhc-malfa-al-assalah",
  meta: {
    title: "NHC Malfa Al-Assalah Riyadh Case Study",
    description:
      "Discover how Manzili deployed a WebGL digital twin, showroom touch tables, and frontline sales SOPs to drive off-plan villa absorption at Malfa Al-Assalah in Riyadh.",
  },
  card: {
    client: "Institutional Residential Developer",
    project: "Malfa Al-Assalah",
    location: "Southwest Riyadh",
    badge: "Villa Community • 633 Townhomes",
    categories: ["masterplans"],
    summary:
      "How Manzili deployed an interactive 3D twin, showroom touch tables, and frontline sales SOPs to accelerate off-plan villa reservations in Southwest Riyadh.",
    metrics: ["633 Townhomes Modeled", "1:1 Spatial Scale Fidelity", "Zero Hardware Outages"],
  },
  scene: { variant: "villas", seed: 5, label: "Villa C-14 · Sun study", chips: ["Live twin", "633 townhomes", "Southwest Riyadh"] },
  hero: {
    crumb: "Malfa Al-Assalah",
    eyebrow: "Case Study • Riyadh Community",
    title: "Accelerating Off-Plan Absorption For Malfa Al-Assalah",
    subheader:
      "How Manzili deployed an interactive 3D twin, showroom touch tables, and frontline sales SOPs to accelerate off-plan villa reservations in Southwest Riyadh.",
    status: ["Institutional Residential Developer", "Malfa Community", "NHC Al-Assalah Destination", "Live Sales Gallery Deployment"],
  },
  metadata: [
    { label: "Client Identity", value: "Institutional Residential Developer" },
    { label: "Development Asset", value: "Malfa Al-Assalah (Located within NHC Al-Assalah Master Community)" },
    { label: "Geographic Location", value: "Southwest Riyadh, Kingdom of Saudi Arabia" },
    { label: "Development Scale", value: "45,000+ sqm Development Footprint • Set within 3.85M+ sqm Destination" },
    { label: "Operational Deliverables", value: "Unit-Level WebGL Spatial Twin, 4K Showroom Touch Tables, Frontline Sales SOP Certification" },
    { label: "Primary Strategic Pillars", value: "Pillar 01: Digital Twin • Pillar 03: Sales Center Hardware • Pillar 04: Sales Enablement" },
  ],
  challenge: {
    eyebrow: "Strategic Mandate",
    title: "Resolving Buyer Hesitation Across Repetitive Villa Layouts",
    lead: "Marketing suburban family townhouses and villas in Southwest Riyadh requires clear spatial differentiation to help buyers understand plot privacy, solar angles, and living area dimensions before construction commences.",
    risks: [
      { title: "Repetitive Blueprint Indecision", category: "Conversion Friction", body: "Identical 2D floor plans across hundreds of adjacent villa plots confused family buyers, resulting in delayed reservation decisions and multiple unproductive showroom consultations." },
      { title: "Plot Solar & Privacy Blindspots", category: "Spatial Perception", body: "Discerning Saudi families evaluate sunlight exposure, courtyard privacy, and street frontage carefully. Inability to simulate daylight angles in real time stalled off-plan contract commitments." },
      { title: "Static Showroom Presentation Tools", category: "Operational Execution", body: "Traditional acrylic architectural models failed to show interior typology variations, leaving sales teams struggling to explain finish grades and room layouts on printed sheets." },
    ],
  },
  solution: {
    eyebrow: "Deployed Solution",
    title: "Interactive Spatial Sales Console For Riyadh Villa Buyers",
    lead: "Manzili deployed a unit-level WebGL spatial twin combined with commercial showroom touch tables and structured sales behavioral SOPs designed specifically for family negotiation workflows.",
    features: [
      {
        tag: "Pillar 01: Digital Twin WebGL",
        title: "Unit-Level WebGL Plot Twin",
        body: "Engineered a lightweight browser application allowing buyers to inspect individual villa plots across Malfa Al-Assalah, validating courtyard boundaries, street access, and surrounding green community spaces.",
        bullets: [
          { title: "Plot-Specific Sun-Path Studies", body: "Dynamic daylight simulation from morning to evening across each parcel" },
          { title: "Interior Layout Walkthroughs", body: "Instant transitions between ground-floor living halls and private upper quarters" },
          { title: "Zero-Download Performance", body: "Fluid 60 FPS graphics accessible across showroom hardware and customer mobile devices" },
        ],
      },
      {
        tag: "Pillar 03: Sales Center Hardware",
        title: "65-Inch Showroom Touch Consoles",
        body: "Staged commercial-grade 65-inch 4K capacitive touch tables directly inside the Al-Assalah sales gallery, enabling family groups to gather and interactively explore their future home together.",
        bullets: [
          { title: "Commercial Glass Durability", body: "Anti-glare, scratch-resistant surface rated for high daily public utilization" },
          { title: "Split-Screen Layout Comparisons", body: "Side-by-side comparison of villa typology variations and plot sizes" },
          { title: "Integrated Edge Computation", body: "Zero latency during zoom, rotation, and interior layer transitions" },
        ],
      },
      {
        tag: "Pillar 04: Saudi Sales Enablement",
        title: "Family Negotiation Sales Enablement",
        body: "Trained and certified the developer’s frontline consultants on structured objection-handling protocols, transforming family consultations into decisive digital reservation commitments.",
        bullets: [
          { title: "Spatial Validation Sequences", body: "Guiding buyers step-by-step from neighborhood amenities to private garden privacy" },
          { title: "Finishing Palette Demonstrations", body: "Validating material specifications and fixture standards directly in 3D" },
          { title: "Immediate Deposit Workflows", body: "Moving buyers directly from unit selection to binding digital reservation commitments" },
        ],
      },
    ],
  },
  impact: {
    eyebrow: "Defensible ROI",
    title: "Measurable Absorption Accelerations In Al-Assalah Gallery",
    metrics: [
      { value: "633", label: "Townhomes Modeled", title: "Full Architectural Coverage", body: "Complete 3D modeling across all 633 residential townhomes, neighborhood streetscapes, and community parks." },
      { value: "1:1", label: "Spatial Scale Fidelity", title: "Setback & Privacy Verification", body: "Exact physical setback, street width, and window alignment modeling to resolve family privacy inquiries before contract signing." },
      { value: "100%", label: "Interactive Adoption", title: "Digital Showroom Workflows", body: "Sales advisors conduct structured spatial walkthroughs on 65-inch touch tables alongside printed sales collateral." },
      { value: "Zero", label: "Hardware Outages", title: "Showroom Operational Reliability", body: "Pre-configured local hardware rigs recorded zero hardware failures or operational disruptions across months of high-density weekend sales operations." },
    ],
  },
  governance: {
    eyebrow: "Enterprise Standards",
    title: "Engineering Accuracy And Regulatory Compliance",
    rows: [
      ["BIM Dimension Accuracy", "1:1 architectural engineering parity", "Complete dimensional fidelity prevents spatial misunderstandings between off-plan sales and built reality."],
      ["Data Privacy (PDPL)", "Local Saudi cloud data hosting", "Buyer contact data and reservation records conform strictly to national personal data protection regulations."],
      ["Hardware Warranty SLA", "Enterprise hardware support agreement", "Turnkey maintenance protocol with guaranteed 4-hour local Riyadh technical field support."],
    ],
  },
  conversion: {
    headline: "Drive Off-Plan Velocity For Your Community",
    body: "Partner with Manzili for interactive digital twins, showroom touch tables, and proven frontline sales enablement across Saudi Arabia.",
    primary: "Request Enterprise Consultation",
    trust: ["Proven Across Tier-1 Saudi Residential Communities"],
  },
};
