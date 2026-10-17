import type { CaseStudy } from "./types";

// Source: Raffles Residences Jeddah case study copy
export const rafflesJeddah: CaseStudy = {
  slug: "raffles-residences-jeddah",
  meta: {
    title: "Raffles Residences Jeddah Case Study",
    description:
      "How Manzili digitized a ready-built mock-up show residence into an interactive 3D virtual tour to accelerate off-plan luxury sales for Erth Real Estate on Jeddah's Corniche.",
  },
  card: {
    client: "Erth Real Estate Development",
    project: "Raffles Residences Jeddah",
    location: "Corniche Waterfront, Jeddah",
    badge: "Branded Residences • Mock-Up 3D Tour",
    categories: ["luxury", "lifecycle"],
    summary:
      "How Manzili digitized a ready-built mock-up show residence into an interactive 3D virtual tour to accelerate off-plan luxury sales for Erth Real Estate on Jeddah's Corniche.",
    metrics: ["1:1 Built Mock-Up Fidelity", "100% Red Sea Sightline Verification", "48 Tower Floors Modeled"],
  },
  scene: { variant: "waterfront", seed: 8, label: "Level 48 · Red Sea view", chips: ["Mock-up 3D tour", "48 floors", "Jeddah Corniche"] },
  hero: {
    crumb: "Raffles Residences Jeddah",
    eyebrow: "Case Study • Jeddah Corniche",
    title: "Accelerating Off-Plan Sales For Raffles Residences Jeddah",
    subheader:
      "How Manzili digitized a ready-built mock-up show residence into an interactive 3D virtual tour to accelerate off-plan luxury sales for Erth Real Estate on Jeddah's Corniche.",
    status: ["Erth Real Estate", "Ultra-Luxury Branded Tower", "Ready Mock-Up 3D Tour", "Jeddah Waterfront"],
  },
  metadata: [
    { label: "Client", value: "Erth Real Estate Development" },
    { label: "Brand Partner", value: "Raffles Hotels & Resorts" },
    { label: "Location", value: "Corniche Waterfront, Jeddah" },
    { label: "Asset Type", value: "Ultra-Luxury Branded Residences & Penthouses" },
    { label: "Primary Deliverables", value: "3D Virtual Mock-Up Tour, WebGL Spatial Twin, Sales Enablement" },
    { label: "Pillars Represented", value: "Browser-Native 3D Twins, Sales Gallery Hardware, Lifecycle & 3D Tours" },
  ],
  challenge: {
    eyebrow: "The Commercial Challenge",
    title: "Validating Ultra-Luxury Off-Plan Residences For Remote Buyers",
    lead: "Ultra-luxury buyers demand verified architectural finishes, ceiling proportions, and waterfront sightlines before committing capital to off-plan branded towers. While Erth built a physical show residence, out-of-market buyers in Riyadh and the GCC could not easily visit the Jeddah site in person.",
    friction: [
      ["Showroom Site Dependency", "Out-of-region VIP buyers delay reservations until they physically travel to the Jeddah mock-up.", "Millimeter-Accurate 3D Mock-Up Tour: Complete spatial digital twin captures the built mock-up with true materials and lighting."],
      ["Balcony & Horizon Uncertainty", "Floor plans cannot convey the spatial impact of deep terraces and panoramic Red Sea views.", "Interactive View Simulation: Dynamic camera heights model exact floor-specific ocean sightlines and sunset angles."],
      ["Complex Multi-Asset Collateral", "Disjointed PDFs and renders dilute the prestige of the international Raffles brand identity.", "Unified Branded Web Interface: Curated 3D walk-through links accessible instantly on any tablet or browser without apps."],
    ],
  },
  solution: {
    eyebrow: "The Technical Solution",
    title: "Interactive 3D Virtual Tour With Corniche Balcony Modeling",
    lead: "Manzili captured the ready-built show residence using high-precision 3D spatial scanning, converting architectural geometry and material textures into an ultra-responsive WebGL walk-through. The experience links showroom touch displays directly to remote buyer devices.",
    cards: [
      { title: "True-Scale Mock-Up Digital Twin", points: ["1:1 interior capture of master suites, living lounges, and designer kitchens.", "Accurate reflection of bespoke timber paneling, imported marble, and custom joinery."] },
      { title: "Corniche Horizon & View Synthesis", points: ["Real-world panoramic drone photography integrated with interior window apertures.", "Accurately conveys Red Sea horizons across various tower elevations."] },
      { title: "Private VIP Client Link Generation", points: ["Sales advisors generate secure, unit-specific web links for private investor walkthroughs.", "Operates across desktop monitors, iPads, and mobile phones with zero application downloads."] },
      { title: "Showroom Interactive Display Sync", points: ["Ultra-high-definition touch console integration in Erth's private sales lounges.", "Allows advisors to guide clients through room layouts, closet dimensions, and terrace areas."] },
    ],
  },
  enablement: {
    eyebrow: "Frontline Operational Enablement",
    title: "Frontline Sales Enablement For Discerning Global Buyers",
    lead: "Selling branded luxury demands polished presentation choreography. Manzili trained Erth's private client advisors to navigate the digital twin during VIP consultations, focusing on hospitality amenities, bespoke services, and interior craftsmanship.",
    steps: [
      { title: "Waterfront Macro Positioning", body: "Advisors open on the Jeddah Corniche exterior twin, highlighting access to private marinas, beach clubs, and downtown transit corridors." },
      { title: "Tower Floor & Layout Selection", body: "The advisor selects the specific residential level, evaluating unit orientation, privacy buffers, and Red Sea horizon exposure." },
      { title: "Interior Walkthrough & Material Inspection", body: "The client transitions into the 3D mock-up, exploring room proportions, ceiling clearances, and verified interior finishes room-by-room." },
    ],
  },
  impact: {
    eyebrow: "Measurable Business Impact",
    title: "Measurable Commercial Acceleration Across Key Luxury Milestones",
    lead: "Transforming the physical mock-up into a browser-accessible 3D tour broadened Erth's sales reach and shortened negotiation cycles for multi-million-riyal residences.",
    metrics: [
      { value: "1:1", label: "Built Mock-Up Fidelity", body: "Millimeter-calibrated spatial texturing matching physical finishes.", outcome: "Defensible luxury representation validating multi-million-riyal commitments." },
      { value: "100%", label: "Red Sea Sightline Verification", body: "Exact elevation view modeling across all 48 residential tower levels.", outcome: "Concrete proof of coastal horizons and sunset view premiums." },
      { value: "Zero", label: "Client App Installation", body: "Instant browser-native WebGL streaming compatible with any mobile device.", outcome: "High-net-worth investors inspect residences remotely via private secure links." },
      { value: "48", label: "Tower Floors Modeled", body: "Complete vertical digital twin coverage across residential suites and penthouses.", outcome: "Total spatial comprehension of building architecture, drop-off lobbies, and amenities." },
    ],
  },
  governance: {
    eyebrow: "Institutional Quality Standards",
    title: "Architectural Rigor And High-Fidelity Spatial Standards",
    rows: [
      ["Material Texturing Accuracy", "Physically-based material rendering", "Accurate representation of marble veining, metal trims, and architectural glass reflection."],
      ["Strict Data Confidentiality", "Sovereign encrypted cloud streaming", "Private client viewing links protected with time-limited tokens and access control."],
      ["Ultra-Responsive Cross-Platform", "WebGL / HTML5 engine", "Consistent 60 FPS performance across luxury smartphones, tablets, and 4K displays."],
    ],
  },
  conversion: {
    headline: "Accelerate Luxury Off-Plan Sales For Your Tower",
    body: "Partner with Manzili for ready-built mock-up 3D virtual tours, showroom hardware staging, and frontline enablement across branded luxury towers.",
    primary: "Schedule Enterprise Consultation",
    secondary: "Explore Core Pillars",
    trust: ["Trusted by institutional developers, sovereign real estate entities, and master developers across Saudi Arabia"],
  },
};
