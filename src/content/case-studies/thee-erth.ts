import type { CaseStudy } from "./types";

// Source: 11_Page_05_Case_Study_Thee_Erth.md + hub card 01
export const theeErth: CaseStudy = {
  slug: "thee-erth",
  meta: {
    title: "Thee Erth Masterplan Case Study",
    description:
      "How Manzili deployed an interactive 360 platform, offline failover and on-site sales enablement for Erth Real Estate Development’s 8-tower Riyadh masterplan at Cityscape Global.",
  },
  card: {
    client: "Erth Real Estate Development",
    project: "Thee Erth Masterplan",
    location: "King Fahad Road, Riyadh",
    badge: "Flagship Exhibition • 8-Tower Masterplan",
    categories: ["masterplans", "exhibition", "luxury"],
    summary:
      "How Manzili deployed an interactive 360 platform, localized offline failover, and on-site sales enablement for Erth Real Estate Development's 8-tower masterplan at Cityscape Global, achieving 100% launch uptime under saturated exhibition Wi-Fi conditions.",
    metrics: ["100% Launch Uptime", "8 Connected Towers Visualized", "28 Sales Executives Enabled On-Site"],
  },
  scene: { variant: "masterplan", seed: 3, label: "Tower 7 · Raffles Residences", chips: ["Live twin", "8 towers", "Cityscape Global"] },
  hero: {
    crumb: "Thee Erth",
    eyebrow: "Case Study • Cityscape Global",
    title: "Commercial Velocity For Thee Erth Masterplan",
    subheader:
      "How Manzili deployed an interactive 360 platform, localized offline failover, and on-site sales enablement for Erth Real Estate Development's 8-tower Riyadh masterplan at Cityscape Global.",
    status: ["Erth Real Estate Development", "8-Tower Masterplan", "King Fahad Road, Riyadh", "Cityscape Global Proven"],
  },
  metadata: [
    { label: "Client", value: "Erth Real Estate Development" },
    { label: "Development", value: "Thee Erth (8-Tower Mixed-Use Masterplan)" },
    { label: "Location", value: "King Fahad Road, Riyadh, Kingdom of Saudi Arabia" },
    { label: "Key Typologies", value: "Raffles Hotel & Residences, Sofitel Serviced Apartments, Grade-A Commercial Offices, Luxury Retail Mall" },
    { label: "Operational Scope", value: "Browser-Native 360 Web Platform, Spatial Interactive Environments, In-Person Sales Force Enablement, Cityscape Launch Command" },
  ],
  challenge: {
    eyebrow: "Strategic Mandate",
    title: "Mitigating Commercial And Operational Risk Under Event Schedulers",
    lead: "Erth required an enterprise digital sales engine to present the architectural scale, view corridors, and luxury finishes of an 8-tower masterplan to institutional investors and off-plan buyers at Cityscape Global in Riyadh.",
    risks: [
      { title: "Non-Negotiable Event Deadline", category: "Schedule Risk", body: "A firm, non-negotiable delivery date tied directly to the opening morning of Cityscape Global, leaving zero margin for engineering schedule slippage or software compilation errors." },
      { title: "Saturated Exhibition Networks", category: "Operational Infrastructure", body: "Saturated event Wi-Fi networks in high-density convention halls create extreme risks of presentation lag, frame drops, or total system crashes during high-stakes VIP buyer meetings." },
      { title: "Frontline Adoption Hesitation", category: "Field Execution", body: "Untrained sales teams face high pressure on exhibition floors, risking technology abandonment for paper brochures without rigorous behavioral conditioning and hands-on SOP mastery." },
    ],
  },
  solution: {
    eyebrow: "Deployed Solution",
    title: "An Integrated Multi-Channel Sales Staging Architecture",
    lead: "Manzili deployed an enterprise spatial runtime combining browser-based 360 navigation, physical showroom hardware integration, localized network failover, and structured in-person sales team coaching.",
    features: [
      {
        tag: "Zero-Plugin Runtime",
        title: "Browser-Native 360 Web Platform",
        body: "Deployed a lightweight, zero-plugin WebGL cityscape covering all 8 towers, podium streetscapes, and unit-level view corridors. Achieved sub-3-second load times across client mobile devices and sales iPads with zero application downloads.",
        bullets: [
          { title: "8-Tower Masterplan Navigation", body: "Full architectural coverage without latency" },
          { title: "Unit View Corridors", body: "Verified sightline and daylight simulations" },
          { title: "Instant Mobile Access", body: "Open browser access over standard 4G/5G connections" },
        ],
      },
      {
        tag: "High-Fidelity 3D Tours",
        title: "Spatial Interactive Environments",
        body: "Engineered spatial walkthrough environments for Raffles Residences, Sofitel Apartments, and Grade-A office layouts, enabling prospective buyers to validate layouts, ceiling heights, and finishes before committing capital.",
        bullets: [
          { title: "Hospitality-Grade Tours", body: "Detailed inspection of luxury residential assets" },
          { title: "Commercial Office Floor Plates", body: "Column-free space validation for corporate tenants" },
          { title: "Interactive Typology Selectors", body: "Rapid layout filtering across 8 towers" },
        ],
      },
      {
        tag: "Zero-Downtime Guarantee",
        title: "Event-Hardened Failover Architecture",
        body: "Engineered progressive asset loading and localized edge caching rigs to guarantee uninterrupted presentation uptime, operating independently of public exhibition Wi-Fi and preventing showroom outages.",
        bullets: [
          { title: "Localized Edge Caching", body: "Total protection against venue network dropouts" },
          { title: "Dual-Carrier Cellular Failover", body: "5G backup for real-time data sync" },
          { title: "Rapid Hardware Swap Rigs", body: "Standby spares on-site for immediate continuity" },
        ],
      },
      {
        tag: "Frontline SOP Coaching",
        title: "In-Person Sales Force Enablement",
        body: "Delivered hands-on, on-site coaching sessions certifying Erth’s frontline sales consultants on interactive presentation techniques, spatial objection handling, and digital reservation workflows before exhibition doors opened.",
        bullets: [
          { title: "Touch Table Presentation Mastery", body: "Eliminating technical hesitation under pressure" },
          { title: "Narrative Pacing Procedures", body: "Choreographed walk-throughs from macro to unit" },
          { title: "Digital Reservation Protocols", body: "Rapid conversion from buyer interest to commitment" },
        ],
      },
    ],
  },
  impact: {
    eyebrow: "Defensible ROI",
    title: "Audited Performance Across Cityscape Global",
    metrics: [
      { value: "100%", label: "Launch Uptime", title: "Zero Event Downtime", body: "Zero system downtime or frame latency bottlenecks recorded across interactive touch tables and presentation displays throughout the multi-day Cityscape Global exhibition." },
      { value: "<3s", label: "Sub-3s Load Speed", title: "Zero-Friction Access", body: "Sub-3-second load performance across showroom touch tables, sales iPads, and prospective buyer smartphones, eliminating loading delays during peak hall traffic." },
      { value: "100%", label: "Consultant Adoption", title: "Full Field Operational Mastery", body: "All front-line commercial sales consultants conducted interactive digital presentations independently from opening morning, completely eliminating paper brochures." },
      { value: "Capital", label: "Substantial CAPEX Savings", title: "Scale Model Substitution", body: "Replaced high-cost physical architectural scale models with a multi-channel digital asset reusable across permanent sales centers and web marketing campaigns." },
    ],
  },
  governance: {
    eyebrow: "Enterprise Standards",
    title: "Compliance, Security, And SLA Adherence",
    rows: [
      ["Open Web Architecture", "Standard WebGL / HTML5 core", "Zero third-party plugins, zero software security vulnerabilities, and zero client firewall exceptions."],
      ["Data & Asset Protection", "Encrypted asset streaming protocol", "Proprietary architectural CAD and BIM geometry fully protected against unauthorized extraction."],
      ["Contractual SLA Adherence", "100% on-time milestone delivery", "Complete on-schedule delivery with dedicated on-site event command engineers on the exhibition floor."],
    ],
  },
  quote: {
    text: "Deploying an 8-tower masterplan at Cityscape required complete operational reliability. The 360 platform performed with flawless stability across our interactive screens, and the in-person training ensured our sales team operated with confidence from day one.",
    name: "Commercial Leadership",
    role: "Erth Real Estate Development",
    context: "Thee Erth Masterplan • Riyadh, KSA",
  },
  conversion: {
    headline: "Engineer Velocity For Your Masterplan",
    body: "Partner with Manzili for browser-native 3D twins, showroom hardware staging, and frontline sales enablement across your project launches.",
    primary: "Schedule Enterprise Consultation",
    trust: ["Proven at Cityscape Global", "Single SLA Counterparty"],
  },
};
