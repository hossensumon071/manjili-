import type { CaseStudy } from "./types";

// Source: NHC Al-Mukiman case study copy
export const nhcAlMukiman: CaseStudy = {
  slug: "nhc-al-mukiman",
  meta: {
    title: "NHC Al-Mukiman Medina Case Study",
    description:
      "Discover how Manzili deployed a WebGL digital twin, showroom touch hardware, and frontline sales SOPs to accelerate off-plan absorption across NHC Al-Mukiman in Medina.",
  },
  card: {
    client: "Institutional Residential Developer",
    project: "Al-Mukiman Community",
    location: "Medina Al-Munawwarah",
    badge: "NHC Destination • 6,000+ Units",
    categories: ["masterplans"],
    summary:
      "How Manzili deployed a browser-native 3D twin, interactive showroom touch tables, and frontline sales SOPs to drive off-plan residential reservations within Medina's sanctuary zone.",
    metrics: ["100% Interactive Sales Adoption", "Sub-3s Mobile Load", "99.9% Hardware Uptime SLA"],
  },
  scene: { variant: "suburb", seed: 4, label: "Sanctuary corridor verified", chips: ["Live twin", "6,000+ units", "3.5M+ sqm"] },
  hero: {
    crumb: "NHC Al-Mukiman",
    eyebrow: "Case Study • Medina Destination",
    title: "Accelerating Off-Plan Absorption For Al-Mukiman Medina",
    subheader:
      "How Manzili deployed a browser-native 3D twin, interactive showroom touch tables, and frontline sales SOPs to drive off-plan residential reservations within Medina's sanctuary zone.",
    status: ["Institutional Residential Developer", "Al-Mukiman Community", "NHC Medina Destination", "Live Operational Deployment"],
  },
  metadata: [
    { label: "Client Identity", value: "Institutional Residential Developer" },
    { label: "Master Development", value: "Al-Mukiman Community (National Housing Company Master Destination)" },
    { label: "Geographic Location", value: "Centre of Medina Al-Munawwarah (Within Prophet’s Mosque Sanctuary Boundaries, 10 Minutes to Haram)" },
    { label: "Development Footprint", value: "3,545,000+ sqm Destination Masterplan • 6,000+ Residential Units" },
    { label: "Operational Deliverables", value: "Browser-Native WebGL Masterplan Twin, Multi-Touch Sales Gallery Displays, Frontline Sales SOP Certification" },
    { label: "Primary Strategic Pillars", value: "Pillar 01: Digital Twin • Pillar 03: Sales Center Hardware • Pillar 04: Sales Enablement" },
  ],
  challenge: {
    eyebrow: "Strategic Mandate",
    title: "Eliminating Spatial Hesitation Across Medina Sacred Boundaries",
    lead: "Marketing high-density off-plan family residences within Medina's holy sanctuary boundaries requires decisive spatial clarity to validate zoning regulations, street setbacks, and prayer view corridors for multi-generational Saudi buyers.",
    risks: [
      { title: "Sacred Boundary Zoning Constraints", category: "Regulatory & Spatial Risk", body: "Strict municipal height limits and privacy setback requirements within Medina's sanctuary buffer require exact architectural validation, exposing traditional 2D floor plans to severe buyer hesitation." },
      { title: "Showroom Floor Abandonment", category: "Execution Risk", body: "Complex community scale across 3.5M+ sqm caused sales consultants to abandon slow-loading digital portals, reverting to printed brochures and static WhatsApp PDFs during peak family visitation hours." },
      { title: "Multi-Generational Family Alignment", category: "Capital Conversion Risk", body: "Medina home purchases involve extended family decision-makers who cannot easily interpret architectural blueprints, lengthening sales cycles and delaying binding escrow reservation commitments." },
    ],
  },
  solution: {
    eyebrow: "Deployed Solution",
    title: "Turnkey Spatial Sales Engine For Al-Mukiman Destination",
    lead: "Manzili deployed an enterprise spatial sales infrastructure uniting lightweight browser WebGL visualization, physical showroom interactive touch tables, and structured behavioral negotiation SOPs for frontline sales teams.",
    features: [
      {
        tag: "Pillar 01: Digital Twin WebGL",
        title: "Browser-Native Community Digital Twin",
        body: "Built a zero-download WebGL masterplan application covering all 3.5M+ sqm of Al-Mukiman, rendering exact building massing, road networks, mosques, educational hubs, and plot-level daylight angles at 60 FPS in 4K.",
        bullets: [
          { title: "Master Community Exploration", body: "Instant aerial navigation across 6,000+ residential plots" },
          { title: "Sanctuary Corridor Validation", body: "Accurate line-of-sight analysis toward holy boundary markers" },
          { title: "Sub-3-Second Load Performance", body: "Friction-free web streaming over commercial 4G/5G mobile browsers" },
        ],
      },
      {
        tag: "Pillar 03: Sales Center Hardware",
        title: "Commercial Sales Gallery Hardware Staging",
        body: "Engineered and installed commercial-grade 65-inch 4K multi-touch collaboration tables inside the permanent sales center, backed by local edge computation rigs that eliminate network latency during high-density buyer consultations.",
        bullets: [
          { title: "Multi-Touch Interactive Tables", body: "Commercial capacitive displays rated for 24/7 showroom operation" },
          { title: "Dual-Display Presentation Mode", body: "Synchronized touch table input directly mirroring to large LED walls" },
          { title: "Local Edge Caching", body: "Zero reliance on public Wi-Fi networks guarantees uninterrupted floor presentations" },
        ],
      },
      {
        tag: "Pillar 04: Saudi Sales Enablement",
        title: "Frontline Behavioral Sales Force SOPs",
        body: "Delivered intensive on-site behavioral conditioning for the developer's frontline sales team, replacing passive feature tours with structured spatial negotiation protocols designed for Saudi family home buyers.",
        bullets: [
          { title: "Micro-to-Macro Choreography", body: "Standard operating procedure guiding buyers from community infrastructure down to living room layouts" },
          { title: "Objection-Handling Playbooks", body: "Direct spatial validation resolves buyer doubts regarding plot privacy and proximity to local mosques" },
          { title: "Digital Reservation Flow", body: "Smooth transition from unit inspection to binding digital reservation commitment" },
        ],
      },
    ],
  },
  impact: {
    eyebrow: "Defensible ROI",
    title: "Audited Sales Velocity Across Al-Mukiman Showroom",
    metrics: [
      { value: "100%", label: "Interactive Sales Adoption", title: "Showroom Digital Enablement", body: "Showroom sales advisors conduct family customer presentations primarily inside the interactive 3D environment alongside traditional brochures." },
      { value: "<3s", label: "Sub-3s Mobile Load", title: "Remote Family Verification", body: "Buyers shared live digital twin links with absent family decision-makers, maintaining sub-3-second load performance across Saudi mobile carrier networks." },
      { value: "100%", label: "Sanctuary Buffer Verification", title: "Sacred Proximity Validation", body: "Interactive camera analysis validating exact walking distance, arterial access, and boundary buffers to the Prophet's Mosque sanctuary zone." },
      { value: "99.9%", label: "Hardware Uptime SLA", title: "Operational Gallery Stability", body: "Local edge caching rigs delivered 99.9% hardware availability throughout peak sales seasons, maintaining fluid 60 FPS graphics across continuous daily operational cycles." },
    ],
  },
  governance: {
    eyebrow: "Enterprise Standards",
    title: "Architectural Rigor And Data Governance Protocols",
    rows: [
      ["Architectural Ingestion", "Full BIM / CAD coordinates", "100% geometric parity with municipal masterplan permits and approved NHC infrastructure data."],
      ["Local Data Compliance", "KSA sovereign data hosting", "Full compliance with Saudi Personal Data Protection Law (PDPL) and local hosting mandates."],
      ["Hardware Service SLA", "Hot-standby system engineering", "Pre-configured local hardware replacement components prevent showroom operational outages."],
    ],
  },
  conversion: {
    headline: "Accelerate Off-Plan Velocity For Your Masterplan",
    body: "Partner with Manzili for browser-native 3D twins, showroom hardware staging, and frontline sales enablement across Saudi master developments.",
    primary: "Schedule Enterprise Consultation",
    trust: ["Proven Across Tier-1 KSA Master Developments"],
  },
};
