import type { CaseStudy } from "./types";

// Source: NHC Tabuk Hills case study copy
export const nhcTabukHills: CaseStudy = {
  slug: "nhc-tabuk-hills",
  meta: {
    title: "NHC Tabuk Hills Case Study — Regional Spatial Sales Engine",
    description:
      "Explore how Manzili deployed a WebGL digital twin, turnkey showroom hardware, and frontline sales SOPs to accelerate off-plan absorption at Tabuk Hills.",
  },
  card: {
    client: "Institutional Residential Developer",
    project: "Tabuk Hills Destination",
    location: "Tabuk Region",
    badge: "Regional Destination • 4,600+ Units",
    categories: ["masterplans"],
    summary:
      "How Manzili deployed a WebGL digital twin, pre-engineered showroom hardware, and frontline sales SOPs across Tabuk Hills destination.",
    metrics: ["48-Hour Staging Time", "Zero Hardware Outages", "2.2M+ m² Masterplan Modeled"],
  },
  scene: { variant: "suburb", seed: 13, label: "Community hub · 48h staging", chips: ["Live twin", "4,600+ units", "2.2M+ m²"] },
  hero: {
    crumb: "NHC Tabuk Hills",
    eyebrow: "Case Study • Northern Growth Corridor",
    title: "Accelerating Off-Plan Absorption For Tabuk Hills",
    subheader:
      "How Manzili deployed a WebGL digital twin, pre-engineered showroom hardware, and frontline sales SOPs across Tabuk Hills destination.",
    status: ["Institutional Residential Developer", "Tabuk Hills Destination", "NHC Tabuk", "Live Regional Deployment"],
  },
  metadata: [
    { label: "Client Identity", value: "Institutional Residential Developer" },
    { label: "Master Development", value: "Tabuk Hills Destination (National Housing Company Flagship Northern Destination)" },
    { label: "Geographic Location", value: "Tabuk, Tabuk Region, Kingdom of Saudi Arabia" },
    { label: "Destination Scale", value: "2,237,000+ sqm Masterplan Footprint • 4,600+ Residential Units" },
    { label: "Operational Deliverables", value: "Full-Territory WebGL Digital Twin, Plug-and-Play Sales Center Hardware, Local Sales Force SOP Training" },
    { label: "Primary Strategic Pillars", value: "Pillar 01: Digital Twin • Pillar 03: Sales Center Hardware • Pillar 04: Sales Enablement" },
  ],
  challenge: {
    eyebrow: "Strategic Mandate",
    title: "Overcoming Remote Execution Risks In Emerging Regional Metros",
    lead: "Deploying a high-volume off-plan residential sales center in Tabuk required enterprise-grade hardware reliability and turnkey operational independence, eliminating reliance on scarce local specialized AV support contractors.",
    risks: [
      { title: "Regional Field Contractor Scarcity", category: "Operational Vulnerability", body: "Secondary metro areas lack certified enterprise AV and GPU integration technicians, creating prolonged showroom downtime risks whenever complex display hardware suffers technical faults." },
      { title: "Off-Plan Vision Skepticism", category: "Buyer Hesitation", body: "Regional homebuyers accustomed to inspecting completed physical masonry displayed severe hesitation committing capital to 4,600 unbuilt units without tangible architectural verification." },
      { title: "Frontline Commercial Inexperience", category: "Field Execution", body: "Newly recruited regional sales consultants struggled to articulate masterplan infrastructure timelines, relying on passive brochure handouts rather than structured digital negotiation sequences." },
    ],
  },
  solution: {
    eyebrow: "Deployed Solution",
    title: "Turnkey Remote Sales Staging For Tabuk Hills",
    lead: "Manzili deployed a browser-native WebGL masterplan runtime, pre-configured commercial showroom hardware racks, and intensive on-site frontline sales coaching calibrated for regional buyer demographics.",
    features: [
      {
        tag: "Pillar 01: Digital Twin WebGL",
        title: "Browser-Native Regional Masterplan Twin",
        body: "Engineered a 2.2M+ sqm WebGL spatial model covering all 4,600 homes, green landscape parks, primary schools, and commercial facilities, delivering fluid 60 FPS exploration across all device categories.",
        bullets: [
          { title: "Topographical Terrain Accuracy", body: "Real-world elevation contours reflecting Tabuk’s natural geographic plateaus" },
          { title: "Amenity Proximity Validation", body: "Exact walking and driving distances to educational and healthcare facilities" },
          { title: "Universal Browser Compatibility", body: "Zero application installs required for client devices and consultant tablets" },
        ],
      },
      {
        tag: "Pillar 03: Sales Center Hardware",
        title: "Pre-Engineered Showroom Hardware Staging",
        body: "Shipped and installed commercial capacitive touch tables and presenter consoles pre-configured in flight racks, featuring automated remote health monitoring that completely eliminates on-site technician requirements.",
        bullets: [
          { title: "48-Hour Turnkey Deployment", body: "Fully assembled and commissioned within 48 hours of showroom handover" },
          { title: "Automated Diagnostic Telemetry", body: "Cloud telemetry flags hardware temperature and GPU load to central Riyadh engineers" },
          { title: "Fail-Safe Offline Mode", body: "Complete local data caching ensures presentation continuity during regional fiber cuts" },
        ],
      },
      {
        tag: "Pillar 04: Saudi Sales Enablement",
        title: "Regional Sales Force SOP Certification",
        body: "Conducted hands-on behavioral coaching for Tabuk sales teams, teaching consultants how to guide first-time off-plan buyers through spatial validation routines that eliminate transaction hesitation.",
        bullets: [
          { title: "Structured Macro-to-Micro Storytelling", body: "Moving buyers methodically from master infrastructure to unit living spaces" },
          { title: "Regional Objection Playbooks", body: "Tailored talk-tracks addressing specific local buyer concerns regarding construction pacing" },
          { title: "Digital Reservation SOPs", body: "Rapid lock procedures securing formal deposits before buyer momentum dissipates" },
        ],
      },
    ],
  },
  impact: {
    eyebrow: "Defensible ROI",
    title: "Quantifiable Sales Results In Tabuk Growth Corridor",
    metrics: [
      { value: "48h", label: "48-Hour Staging Time", title: "Turnkey Showroom Commissioning", body: "Pre-assembled flight hardware racks arrived on-site in Tabuk and achieved full operational readiness within 48 hours, meeting strict developer launch milestones." },
      { value: "Zero", label: "Zero Hardware Outages", title: "Flawless Presentation Continuity", body: "Recorded zero hardware outages requiring on-site technician intervention across the first 120 days of continuous showroom operation." },
      { value: "2.2M+ m²", label: "Masterplan Area Modeled", title: "Full Terrain & Infrastructure Scope", body: "Complete digital twin modeling covering all 4,600 residential homes, elevation contours, road networks, and community amenities." },
      { value: "100%", label: "Interactive Sales Adoption", title: "Showroom Digital Enablement", body: "Local Tabuk sales consultants equipped to lead buyer presentations primarily through the 3D console alongside traditional print collateral." },
    ],
  },
  governance: {
    eyebrow: "Enterprise Standards",
    title: "Remote Architecture Resilience And Hardware Guarantees",
    rows: [
      ["Logistics & Staging", "Factory pre-testing in Riyadh", "Hardware and runtime pre-tested under 72-hour load before dispatch to Tabuk."],
      ["System Continuity", "Standby edge processing modules", "Redundant SSD images and automated reboot sequences maintain continuous operational uptime."],
      ["Central SLA Governance", "Single vendor accountability", "Single Master Service Agreement covers spatial runtime, display hardware, and frontline training."],
    ],
  },
  conversion: {
    headline: "Scale Off-Plan Sales Into Regional Metros",
    body: "Deploy Manzili's pre-engineered showroom hardware, browser-native digital twins, and sales team training across regional Saudi destinations.",
    primary: "Schedule Regional Consultation",
    trust: ["Proven Across Regional KSA Master Developments"],
  },
};
