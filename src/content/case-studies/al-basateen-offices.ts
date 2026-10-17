import type { CaseStudy } from "./types";

// Source: Al Basateen Offices case study copy
export const alBasateen: CaseStudy = {
  slug: "al-basateen-offices",
  meta: {
    title: "Al Basateen Offices Diriyah Case Study",
    description:
      "How Manzili deployed interactive 3D virtual tours across commercial zones, entrance lobbies, and campus amenities to facilitate Grade-A corporate leasing in Diriyah.",
  },
  card: {
    client: "Albasateen Real Estate Company",
    project: "Al Basateen Offices",
    location: "King Khalid Road, Diriyah",
    badge: "Grade-A Campus • 39,387 m² GLA",
    categories: ["lifecycle", "masterplans"],
    summary:
      "How Manzili deployed interactive 3D virtual tours across commercial zones, entrance lobbies, and campus amenities to facilitate corporate leasing and fill office units in Diriyah.",
    metrics: ["39,387 m² GLA Modeled", "100% Commercial Zone Coverage", "Zero Corporate Firewall Friction"],
  },
  scene: { variant: "campus", seed: 10, label: "Zone B · Available", chips: ["3D zone tours", "39,387 m² GLA", "Diriyah"] },
  hero: {
    crumb: "Al Basateen Offices",
    eyebrow: "Case Study • Diriyah Corridor",
    title: "Commercial Zone Tours To Accelerate Grade-A Leasing",
    subheader:
      "How Manzili deployed interactive 3D virtual tours across commercial zones, entrance lobbies, and campus amenities to facilitate corporate leasing and fill office units in Diriyah.",
    status: ["Albasateen Real Estate", "Grade-A Office Campus", "39,387 m² GLA", "King Khalid Road, Diriyah"],
  },
  metadata: [
    { label: "Client", value: "Albasateen Real Estate Company" },
    { label: "Location", value: "King Khalid Road, Diriyah Governorate, Riyadh" },
    { label: "Asset Type", value: "Grade-A Commercial Corporate Office Campus" },
    { label: "Gross Leasable Area (GLA)", value: "39,387 m² (across 98,925 m² site)" },
    { label: "Parking Provision", value: "1 parking bay per 23 m² GLA" },
    { label: "Primary Deliverables", value: "3D Commercial Zone Virtual Tours, Campus Amenity Walkthroughs, Frontline Leasing Enablement" },
    { label: "Pillars Represented", value: "Browser-Native 3D Twins, Real-Time Inventory & Leasing, Frontline Enablement" },
  ],
  challenge: {
    eyebrow: "The Commercial Challenge",
    title: "De-Risking Commercial Pre-Leasing For Corporate Tenants",
    lead: "Attracting corporate tenants along King Khalid Road requires proving campus stature, entrance lobby design, executive vehicular ingress, and open courtyard connectivity. Static leasing brochures and flat floorplans could not communicate the spatial quality of building zones to prospective corporate occupiers.",
    friction: [
      ["Static 2D Floorplans", "Corporate tenant representatives struggle to visualize entrance scale, lobby finishes, and zone flow.", "3D Commercial Zone Virtual Tours: Interactive virtual tours allow prospective tenants to navigate entrance lobbies, typical office floors, and courtyards."],
      ["Opaque Campus Amenity Context", "Prospective tenants cannot evaluate executive drop-offs, landscaped courtyards, and parking access.", "3D Campus Walkthroughs: Spatial walkthroughs showcase drop-off plazas, landscaped amenities, and subterranean vehicular access."],
      ["Overseas Decision Delays", "International corporate decision-makers in London or Dubai hesitate without visiting Riyadh in person.", "Zero-Install WebGL Access: Fully interactive commercial tours stream directly via secure web link without firewall friction."],
    ],
  },
  solution: {
    eyebrow: "The Technical Solution",
    title: "Interactive 3D Commercial Zone Tours Facilitate Office Leasing",
    lead: "Manzili deployed dedicated 3D commercial zone tours mapping Al Basateen's campus architecture, entrance lobbies, office floors, and landscaped courtyards along King Khalid Road, equipping leasing teams to present spatial quality and fill office units.",
    cards: [
      { title: "3D Commercial Zone Virtual Tours", points: ["High-resolution virtual tours showcase entrance lobbies, typical office levels, and double-height reception areas with accurate spatial dimensions.", "Allows prospective tenants to inspect floor layouts, ceiling heights, and core circulation before physical construction completes."] },
      { title: "Campus Amenity & Courtyard Walkthroughs", points: ["Visualizes landscaped plazas, outdoor collaboration zones, and pedestrian pathways connecting campus buildings.", "Demonstrates campus quality of life for prospective corporate headquarters occupiers."] },
      { title: "Subterranean Parking & Ingress Simulation", points: ["3D vehicular routing demonstrates direct King Khalid Road ramp access, visitor drop-offs, and dedicated executive parking bays.", "Confirms high-density 1:23 m² parking ratios directly to corporate tenant representatives."] },
      { title: "Multi-Tenant Zone Availability Viewer", points: ["Integrates zone leasing statuses, building floor allocations, and verified unit boundaries directly in the tour interface.", "Enables leasing teams to present available suites and contiguous floor options in real time."] },
    ],
  },
  enablement: {
    eyebrow: "Frontline Operational Enablement",
    title: "Frontline Commercial Leasing Enablement For Corporate Brokers",
    lead: "Corporate leasing negotiations require fluid visual presentations. Manzili equipped Al Basateen's commercial leasing team and appointed brokers to guide corporate tenant reps through 3D zone tours directly on touch displays and web sessions.",
    steps: [
      { title: "Campus Stature & Arterial Connectivity", body: "The advisor introduces the Diriyah corridor context, demonstrating executive airport access, ring road connectivity, and landscaped campus amenities." },
      { title: "Commercial Zone & Typical Floor Walkthrough", body: "The advisor navigates entrance lobbies, core layouts, natural light distribution, and typical floor flow to address tenant spatial inquiries." },
      { title: "Amenity Context & Commercial Terms", body: "The advisor presents landscaped courtyard amenities, confirms assigned parking bays, and reviews verified lease documentation." },
    ],
  },
  impact: {
    eyebrow: "Measurable Business Impact",
    title: "Quantifiable Leasing Enablement For Commercial Office Assets",
    lead: "Deploying Manzili's 3D commercial zone tours equipped leasing advisors with interactive spatial collateral, accelerating tenant walkthroughs and building occupancy commitments.",
    metrics: [
      { value: "39,387 m²", label: "GLA Modeled", body: "Complete 3D virtual coverage across commercial zones, lobbies, and office floors.", outcome: "100% digital visibility across the corporate campus." },
      { value: "100%", label: "Commercial Zone Coverage", body: "Interactive virtual navigation across all entrance lobbies, typical office levels, and courtyard amenities.", outcome: "Verified spatial clarity for corporate tenant reps." },
      { value: "Zero", label: "Corporate Firewall Friction", body: "Pure browser-based WebGL delivery requiring no client software installation.", outcome: "Instant remote inspection for multinational real estate committees." },
      { value: "1:1", label: "Showroom & Web Parity", body: "Identical 3D zone tour fidelity whether presented on sales center touch screens or remote executive laptops.", outcome: "Consistent presentation quality across all leasing channels." },
    ],
  },
  governance: {
    eyebrow: "Institutional Quality Standards",
    title: "Commercial Engineering Rigor And Institutional Standards",
    rows: [
      ["BOMA Measurement Alignment", "Precise geometric area verification", "Exact rentable and usable area calculations prevent post-contract square-meter disputes."],
      ["Enterprise IT Compatibility", "Pure WebGL / zero plugin standard", "Functions smoothly behind strict multinational banking and corporate proxy networks."],
      ["Sovereign Cloud Data Hosting", "KSA Tier-IV data center", "Commercial negotiations and lease terms protected under Saudi data sovereignty protocols."],
    ],
  },
  conversion: {
    headline: "Accelerate Corporate Leasing For Your Commercial Campus",
    body: "Partner with Manzili for Grade-A commercial digital twins, interactive 3D zone tours, and frontline corporate leasing enablement across Saudi Arabia.",
    primary: "Schedule Enterprise Consultation",
    secondary: "Explore Core Pillars",
    trust: ["Trusted by institutional developers, sovereign real estate entities, and master developers across Saudi Arabia"],
  },
};
