import type { CaseStudy } from "./types";

// Source: Mohammed Al Habib case study copy
export const mohammedAlHabib: CaseStudy = {
  slug: "mohammed-al-habib",
  meta: {
    title: "Mohammed Al Habib Villa Tours Case Study",
    description:
      "How Manzili digitized ready-built mock-up show villas into interactive 3D virtual tours across Mohammed Al Habib's Riyadh and Jeddah master communities.",
  },
  card: {
    client: "Mohammed Al Habib Real Estate",
    project: "Eyal Al Fursan & Eyal Sadayem",
    location: "Riyadh & Jeddah",
    badge: "Dual-Metro • Show Villa 3D Tours",
    categories: ["lifecycle"],
    summary:
      "How Manzili digitized ready-built mock-up show villas into interactive 3D virtual tours to accelerate off-plan residential sales across Mohammed Al Habib's Riyadh and Jeddah master communities.",
    metrics: ["Dual-Metro Showroom Parity", "1:1 Show Villa Spatial Parity", "99.9% Hardware Availability SLA"],
  },
  scene: { variant: "villas", seed: 12, label: "Show villa · 3D tour", chips: ["Mock-up 3D tours", "Riyadh", "Jeddah"] },
  hero: {
    crumb: "Mohammed Al Habib",
    eyebrow: "Case Study • Dual-Metro",
    title: "Off-Plan Villa Velocity For Mohammed Al Habib",
    subheader:
      "How Manzili digitized ready-built mock-up show villas into interactive 3D virtual tours to accelerate off-plan residential sales across Mohammed Al Habib's Riyadh and Jeddah master communities.",
    status: ["Mohammed Al Habib Real Estate", "Eyal Al Fursan (Riyadh)", "Eyal Sadayem (Jeddah)", "Ready Mock-Up 3D Tours"],
  },
  metadata: [
    { label: "Client", value: "Mohammed Al Habib Real Estate" },
    { label: "Locations", value: "Eyal Al Fursan (Al Fursan, Riyadh) & Eyal Sadayem (Sadayem, Jeddah)" },
    { label: "Asset Type", value: "Master-Planned Residential Villa Communities (NHC Suburbs)" },
    { label: "Primary Deliverables", value: "Ready-Built Mock-Up 3D Tours, Sales Gallery Hardware, Enablement" },
    { label: "Pillars Represented", value: "Browser-Native 3D Twins, Sales Gallery Hardware, Frontline Enablement" },
  ],
  challenge: {
    eyebrow: "The Commercial Challenge",
    title: "Overcoming Off-Plan Villa Sales Friction Across Dual Metros",
    lead: "Developing flagship residential villa communities in both Riyadh and Jeddah required communicating spatial proportions, privacy zoning, and finish quality to off-plan buyers. Unfinished suburban site conditions and geographical distance between sales galleries created hesitation and prolonged decision cycles.",
    friction: [
      ["Suburban Site Access Friction", "Families hesitate to visit remote, active construction sites to view unfinished villa plots.", "Digitized Show Villa Walkthrough: True-to-scale 3D virtual tour of the built show villa accessible directly inside city sales centers."],
      ["Spatial Comprehension Deficits", "Buyers misjudge room volumes, ceiling heights, and courtyard privacy on printed brochures.", "Dimensionally Exact 3D Navigation: Prospective buyers explore reception majlis, family living, and courtyard light transitions room-by-room."],
      ["Cross-Regional Sales Barriers", "Riyadh buyers considering Jeddah villas (and vice versa) cannot easily inspect mock-ups in person.", "Cross-Gallery Web Synchronization: Sales advisors in Riyadh present live interactive walkthroughs of Jeddah villas without travel."],
    ],
  },
  solution: {
    eyebrow: "The Technical Solution",
    title: "Dual-Metro 3D Virtual Villa Tours For Showroom Sales",
    lead: "Manzili captured the ready-built show villas for Eyal Al Fursan and Eyal Sadayem, building interactive 3D virtual walk-throughs integrated across Mohammed Al Habib's regional sales galleries, touch tables, and remote mobile channels.",
    cards: [
      { title: "Complete Villa Interior & Exterior Scanning", points: ["Detailed spatial capture of formal majlis, dining halls, private family areas, and garden courtyards.", "Accurate reflection of natural daylight orientation across ground, first, and rooftop floors."] },
      { title: "Dual-Metro Cross-Gallery Integration", points: ["Showroom touch screens in Riyadh display Eyal Sadayem Jeddah, while Jeddah centers display Eyal Al Fursan.", "Enables multi-city sales advisors to present cross-regional inventory directly."] },
      { title: "Commercial Touch Screen Staging", points: ["High-responsiveness touch screens deployed across developer sales galleries in Riyadh and Jeddah.", "Allows collaborative multi-family reviews with fluid zoom and floor-switching controls."] },
      { title: "Instant Post-Consultation Mobile Delivery", points: ["Automated generation of private web links sent to prospective buyers via SMS or messaging channels.", "Empowers buyers to revisit their preferred villa mock-up from home with family decision-makers."] },
    ],
  },
  enablement: {
    eyebrow: "Frontline Operational Enablement",
    title: "Frontline Sales Enablement For Saudi Family Homebuyers",
    lead: "Saudi family homebuyers evaluate villas based on privacy, hospitality zones, and long-term functional comfort. Manzili trained Mohammed Al Habib's commercial teams to conduct structured 5-minute spatial walkthroughs addressing privacy partitions, kitchen workflows, and master suite layouts.",
    steps: [
      { title: "Community & Plot Selection", body: "The advisor presents the master community plan, illustrating villa position, street width, and proximity to mosques and parks." },
      { title: "Mock-Up Spatial Tour & Privacy Verification", body: "The advisor guides the family through the 3D mock-up, validating separation between guest reception majlis and private family quarters." },
      { title: "Finishes Review & Post-Visit Takeaway", body: "The advisor examines wall materials, bathroom fixtures, and rooftop outdoor spaces before dispatching a private web link directly to the buyer's phone." },
    ],
  },
  impact: {
    eyebrow: "Measurable Business Impact",
    title: "Quantifiable Dual-Metro Sales Enablement Across Flagship Suburbs",
    lead: "Deploying 3D mock-up virtual tours across Mohammed Al Habib's sales network equipped advisors with verified villa geometry, eliminating spatial hesitation for family homebuyers.",
    metrics: [
      { value: "Dual-Metro", label: "Showroom Parity", body: "Cross-regional display access connecting Riyadh and Jeddah sales galleries.", outcome: "Immediate presentation of Jeddah inventory to Riyadh buyers without site travel." },
      { value: "1:1", label: "Show Villa Spatial Parity", body: "High-precision spatial capture of built show villas across both developments.", outcome: "Exact validation of majlis proportions, ceiling heights, and family privacy partitions." },
      { value: "Instant", label: "Mobile Link Takeaway", body: "Zero-install web links delivered via SMS and messaging channels.", outcome: "Prospective buyers revisit 3D mock-ups from home with extended family decision-makers." },
      { value: "99.9%", label: "Hardware Availability SLA", body: "Commercial-grade capacitive touch displays deployed across sales centers.", outcome: "Flawless presentation stability across high-traffic weekend sales periods." },
    ],
  },
  governance: {
    eyebrow: "Institutional Quality Standards",
    title: "Architectural Precision And Cross-Regional Digital Standards",
    rows: [
      ["Spatial Dimensional Fidelity", "Millimeter-calibrated LiDAR capture", "Precise dimensional reproduction matching official NHC architectural drawings."],
      ["Cross-City Performance Parity", "Low-latency cloud content delivery", "Instant loading across sales centers in Riyadh, Jeddah, and customer mobile devices."],
      ["Enterprise SLA Support", "Dual-region technical maintenance", "Direct engineering monitoring and hardware support across both regional hubs."],
    ],
  },
  conversion: {
    headline: "Drive Off-Plan Villa Absorption Across Your Communities",
    body: "Partner with Manzili for ready-built mock-up 3D virtual tours, showroom hardware staging, and frontline enablement across residential villa developments.",
    primary: "Schedule Enterprise Consultation",
    secondary: "Explore Core Pillars",
    trust: ["Trusted by institutional developers, sovereign real estate entities, and master developers across Saudi Arabia"],
  },
};
