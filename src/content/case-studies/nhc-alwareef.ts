import type { CaseStudy } from "./types";

// Source: NHC Alwareef case study copy
export const nhcAlwareef: CaseStudy = {
  slug: "nhc-alwareef",
  meta: {
    title: "NHC Alwareef Jeddah Case Study — RestateX Launch Engine",
    description:
      "Read how Manzili deployed a WebGL digital twin, showroom hardware, and offline failover command to drive off-plan absorption for Alwareef at RestateX Jeddah.",
  },
  card: {
    client: "Institutional Residential Developer",
    project: "Alwareef Suburb",
    location: "Southeast Jeddah",
    badge: "RestateX Launch • 12,000+ Units",
    categories: ["masterplans", "exhibition"],
    summary:
      "How Manzili deployed a WebGL digital twin, exhibition hardware rigs, and failover command to secure off-plan reservations for Alwareef at RestateX.",
    metrics: ["100% Launch Uptime SLA", "<800ms Unit Reservation Lock", "12,000 Units Modeled"],
  },
  scene: { variant: "suburb", seed: 9, label: "Phase 1 · Locked in <800ms", chips: ["Live twin", "12,000 units", "10M+ sqm"] },
  hero: {
    crumb: "NHC Alwareef",
    eyebrow: "Case Study • RestateX Launch",
    title: "RestateX Launch Velocity For Alwareef Suburb Jeddah",
    subheader:
      "How Manzili deployed a WebGL digital twin, exhibition hardware rigs, and failover command to secure off-plan reservations for Alwareef at RestateX.",
    status: ["Institutional Residential Developer", "Alwareef Suburb", "NHC Jeddah Destination", "RestateX Launch Validated"],
  },
  metadata: [
    { label: "Client Identity", value: "Institutional Residential Developer" },
    { label: "Master Development", value: "Alwareef Suburb (National Housing Company Flagship Jeddah Destination)" },
    { label: "Geographic Location", value: "Southeast Jeddah, Makkah al-Mukarramah Province (Near Historic Jeddah)" },
    { label: "Destination Scale", value: "10,000,000+ sqm Destination Masterplan • 12,000+ Residential Units" },
    { label: "Operational Deliverables", value: "High-Throughput WebGL Masterplan Twin, Exhibition Touch Podiums, Dual-Carrier Failover Rigs, RestateX Launch Staging" },
    { label: "Primary Strategic Pillars", value: "Pillar 01: Digital Twin • Pillar 03: Sales Center Hardware • Pillar 05: VIP Launch Command" },
  ],
  challenge: {
    eyebrow: "Strategic Mandate",
    title: "Eliminating Launch Failure At Major Real Estate Exhibitions",
    lead: "Launching off-plan residential inventory across a 10M sqm master suburb during the high-density RestateX exhibition required deterministic hardware uptime and zero network lag during intense public visitation surges.",
    risks: [
      { title: "Exhibition Wi-Fi Blackouts", category: "Operational Infrastructure", body: "High-density convention hall Wi-Fi networks regularly collapse under visitor congestion, exposing cloud-dependent sales platforms to fatal presentation crashes during peak launch hours." },
      { title: "Masterplan Scale Distortion", category: "Spatial Comprehension", body: "Spanning 10M+ sqm with 12,000 planned homes, buyers struggled to visualize project phases, road networks, and civic amenities on traditional 2D flat maps without dynamic 3D orientation." },
      { title: "High-Traffic Unit Double-Booking", category: "Transaction Integrity", body: "Concurrent sales consultants negotiating with hundreds of walk-in buyers simultaneously create catastrophic risks of unit contention without rapid real-time inventory locking protocols." },
    ],
  },
  solution: {
    eyebrow: "Deployed Solution",
    title: "Event-Hardened Spatial Architecture For RestateX Launch",
    lead: "Manzili deployed an enterprise sales configuration uniting lightweight WebGL masterplan navigation, localized hardware staging with cellular failover, and high-throughput frontline reservation workflows.",
    features: [
      {
        tag: "Pillar 01: Digital Twin WebGL",
        title: "10M SQM WebGL Masterplan Twin",
        body: "Engineered a zero-download WebGL digital twin covering all 10 million square meters of Alwareef, rendering multi-family residential zones, public parks, educational centers, and highway junctions at 60 FPS in 4K resolution.",
        bullets: [
          { title: "Mega-Destination Visualization", body: "Complete topological coverage of 12,000 planned homes" },
          { title: "Infrastructure Hierarchy", body: "Visual validation of public transit access, schools, and commercial centers" },
          { title: "Sub-3-Second Load Performance", body: "Instant browser access across sales iPads and personal smartphones" },
        ],
      },
      {
        tag: "Pillar 03: Sales Center Hardware",
        title: "Exhibition Staging & Edge Computation",
        body: "Deployed high-durability commercial touch podiums and interactive presenter stations backed by local edge computation rigs that operate completely independent of venue internet availability.",
        bullets: [
          { title: "High-Throughput Touch Podiums", body: "Commercial capacitive touch screens designed for continuous exhibition traffic" },
          { title: "Synchronized Video Walls", body: "Real-time mirroring of consultant walk-throughs across central exhibition booth screens" },
          { title: "Plug-and-Play Assembly", body: "Pre-configured modular flight cases enabled 24-hour setup before exhibition doors opened" },
        ],
      },
      {
        tag: "Pillar 05: VIP Launch Command",
        title: "Event-Hardened Failover & VIP Launch Command",
        body: "Deployed dedicated on-site launch engineers managing localized edge servers with dual-carrier private 5G SIM failover rigs to guarantee 100% platform availability throughout RestateX.",
        bullets: [
          { title: "Dual-Carrier Private 5G", body: "Automated sub-100ms failover routes prevent venue connection drops" },
          { title: "On-Floor Hot Standby Engineers", body: "Dedicated technical specialists stationed inside the booth throughout the event" },
          { title: "Rapid Reservation Locking", body: "Sub-second inventory status synchronization prevents duplicate buyer reservations" },
        ],
      },
    ],
  },
  impact: {
    eyebrow: "Defensible ROI",
    title: "Verified Operational Performance Throughout RestateX",
    metrics: [
      { value: "100%", label: "Launch Uptime SLA", title: "Zero Network Downtime", body: "Local edge caching and private 5G failover maintained continuous display uptime across the 4-day exhibition despite venue network outages." },
      { value: "<800ms", label: "Unit Reservation Lock", title: "Real-Time Inventory Sync", body: "Instantaneous status synchronization processed off-plan unit locks in under 800 milliseconds, eliminating allocation conflicts across 14 sales advisors." },
      { value: "12,000", label: "Units Modeled", title: "Full Masterplan Scope", body: "Comprehensive 3D digital twin coverage spanning apartments, townhomes, commercial boulevards, and community amenities across Alwareef." },
      { value: "Zero", label: "Rebuild Expenditure", title: "Permanent Showroom Reusability", body: "The digital twin asset transitioned directly from the RestateX exhibition booth into the permanent Alwareef on-site sales center with zero rebuild expenditure." },
    ],
  },
  governance: {
    eyebrow: "Enterprise Standards",
    title: "Exhibition Resiliency And Mission-Critical SLAs",
    rows: [
      ["High-Concurrency Resilience", "Edge caching with local GPU compute", "Zero frame rate drops or stutter even during simultaneous multi-screen presentations."],
      ["Failover Redundancy", "Dual-carrier cellular bonded uplink", "Immediate automatic packet failover if the primary event line suffers congestion or dropouts."],
      ["On-Site SLA Coverage", "Embedded event engineers on the floor", "Immediate physical technical support and rapid component swap capability within 120 seconds."],
    ],
  },
  conversion: {
    headline: "De-Risk Your Next Major Exhibition Launch",
    body: "Secure your exhibition launch with Manzili's event-hardened digital twins, failover hardware rigs, and on-site engineering command.",
    primary: "Book Launch Consultation",
    trust: ["Event-Hardened at RestateX and Cityscape Global"],
  },
};
