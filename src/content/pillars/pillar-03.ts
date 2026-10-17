import type { PillarPageData } from "./types";

// Source: 06_Pillar_03_Hardware.md
export const pillar03: PillarPageData = {
  href: "/pillars/sales-center-hardware",
  meta: {
    title: "Pillar 03: Sales Center Hardware",
    description:
      "Turnkey touch tables, fine-pitch LED walls, immersive rooms, hologram displays and offline GPU workstations under one Master Service Agreement with 4-hour Riyadh support.",
  },
  hero: {
    crumb: "Pillar 03: Sales Center Hardware",
    eyebrow: "Pillar 03 • Sales Center Hardware",
    title: "Eliminate Multi-Vendor Showroom Failure",
    subheader:
      "Manzili stages turnkey sales center infrastructure—specifying, calibrating, and maintaining commercial touch tables, bezel-free LED walls, immersive rooms, and hologram displays under a single Master Service Agreement with guaranteed 4-hour local Riyadh support.",
    primary: { label: "Deploy Turnkey Showroom", href: "/contact" },
    secondary: { label: "Inspect Hardware Specs", href: "#matrix" },
    status: ["Single Master Agreement", "Touch Tables", "LED Walls", "Immersive Rooms", "Holograms"],
    panel: {
      title: "Sales gallery · Hardware floor",
      live: "All systems",
      items: [
        { icon: "presentation", label: "86″ PCAP touch tables", meta: "4K UHD · 40-point multi-touch", state: "ok" },
        { icon: "monitor", label: "Direct-view micro-LED wall", meta: "1.2mm pitch · 1,200 nits · 120Hz", state: "active" },
        { icon: "globe", label: "270° immersive room", meta: "Blended projection · calibrated", state: "ok" },
        { icon: "cube", label: "Volumetric hologram display", meta: "VIP architectural centerpiece", state: "ok" },
        { icon: "database", label: "Offline GPU workstations", meta: "Dual RTX 6000 Ada · hot-swap ready", state: "active" },
      ],
      footer: "4-hour Riyadh technician SLA · one Master Service Agreement",
    },
  },
  architecture: {
    eyebrow: "Floor Architecture",
    title: "Single-Source Hardware Architecture Engineered For Floor Resilience",
    lead: "When sales gallery displays freeze during VIP launches, AV integrators blame software while 3D studios blame graphics processors. Manzili eliminates vendor fragmentation by procuring, stress-testing, and warranting the entire physical presentation tier under one contract.",
    features: [
      {
        tag: "Interactive Surface",
        title: "Commercial 4K Touch Tables",
        body: "Heavy-duty 55-inch to 86-inch anti-glare capacitive touch surfaces calibrated for simultaneous multi-user masterplan navigation. Designed for continuous showroom duty cycles, these units feature sub-15 millisecond touch response, hardened scratch-resistant glass, and integrated thermal management to prevent thermal throttling.",
        bullets: [
          { title: "Anti-Glare Capacitive Glass", body: "Resists showroom lighting reflection" },
          { title: "Multi-Touch Precision", body: "Supports concurrent multi-buyer exploration" },
          { title: "Thermal Shock Enclosures", body: "Engineered for continuous commercial operation" },
        ],
      },
      {
        tag: "Display Architecture",
        title: "Fine-Pitch Direct-View LED Walls",
        body: "Ultra-fine-pitch sub-1.2mm bezel-free LED video walls configured specifically for spatial architectural presentation. Calibrated for true-color architectural fidelity, high ambient showroom daylight, and 120Hz refresh rates, delivering flawless visual clarity from every VIP viewing distance.",
        bullets: [
          { title: "Sub-1.2mm Pixel Pitch", body: "Sharp clarity at close distance" },
          { title: "Daylight-Rated Brightness", body: "Maintains contrast against showroom windows" },
          { title: "Micro-LED Reliability", body: "100,000-hour operational lifespan" },
        ],
      },
      {
        tag: "Spatial Centerpiece",
        title: "Immersive Rooms & Hologram Displays",
        body: "Custom-engineered 270° and 360° multi-surface immersive rooms and 3D volumetric hologram displays built as permanent showroom centerpieces. These spatial installations are provided for capital acquisition (for sale only, not for rent), guaranteeing dedicated optical calibration, permanent architectural integration, and full manufacturer warranty governance.",
        bullets: [
          { title: "Multi-Surface Immersive Rooms", body: "270° and 360° spatial enclosures" },
          { title: "Volumetric Hologram Displays", body: "Floating 3D masterplan typologies" },
          { title: "Turnkey Calibration", body: "Dedicated optical and acoustic staging" },
        ],
      },
      {
        tag: "Local Workstation",
        title: "Offline Dedicated Graphics Rigs",
        body: "Enterprise workstations powered by dedicated RTX 6000 Ada series GPUs racked locally inside the sales gallery. These machines execute the native Unreal Engine 5 sales application completely offline, locking 60 FPS in uncompressed 4K resolution with zero network lag.",
        bullets: [
          { title: "Dedicated GPU Rigs", body: "Locked 60 FPS in 4K" },
          { title: "Air-Gapped Reliability", body: "Eliminates external network dependency" },
          { title: "Redundant Hot-Swaps", body: "Automatic failover protects presentation uptime" },
        ],
      },
    ],
  },
  proof: {
    eyebrow: "Commercial Proof",
    title: "How Turnkey Hardware Staging Protects Commercial Launch Momentum",
    items: [
      {
        metric: "Single Master Agreement",
        title: "Zero Vendor Finger-Pointing",
        body: "One unified contract covers display hardware, graphics workstations, custom software, and frontline maintenance, establishing absolute counterparty accountability for the CCO.",
      },
      {
        metric: "99.9% Presentation Uptime",
        title: "Guaranteed Floor Uptime",
        body: "Hardened enterprise components and redundant local power backups guarantee uninterrupted presentations throughout high-density VIP launch weekends.",
      },
      {
        metric: "4-Hour Technician SLA",
        title: "Rapid On-Site Support",
        body: "Dedicated local technical support teams stationed in Riyadh provide rapid physical dispatch, preventive routine maintenance, and immediate spares replacement.",
      },
    ],
  },
  matrix: {
    eyebrow: "Hardware Matrix",
    title: "Commercial Specifications For Sales Gallery Deployments",
    lead: "Every hardware component is selected, tested, and integrated to deliver maximum thermal stability and deterministic performance in high-ambient Riyadh environments.",
    columns: ["Hardware Tier", "Core Component", "Operational Specification", "Gallery Purpose"],
    rows: [
      ["Interactive Surfaces", "65″ – 86″ PCAP Touch Tables", "4K UHD, 40-Point Multi-Touch, Anti-Glare", "Masterplan & Typology Exploration"],
      ["Video Walls", "Direct-View Micro-LED", "1.2mm Pixel Pitch, 1,200 Nits, 120Hz", "Main Showroom Presentation Stage"],
      ["Immersive Rooms", "270° / 360° Spatial Enclosure", "Multi-Projector Blending or Fine-Pitch LED", "Full-Scale Architectural Walkthrough"],
      ["Hologram Displays", "Volumetric 3D Optics", "High-Lumen 3D Holographic Rig", "VIP Architectural Centerpiece"],
      ["Local Workstations", "Enterprise Rackmount GPUs", "Dual RTX 6000 Ada, 128GB ECC RAM", "Offline UE5 Application Execution"],
    ],
  },
  faq: {
    eyebrow: "Technical FAQ",
    headline: "Sales Center Hardware Questions",
    items: [
      {
        q: "Why contract showroom hardware through Manzili instead of separate AV vendors?",
        a: "Separate AV procurement creates an accountability void. When displays lag or crash during a VIP event, AV contractors blame software optimization while 3D agencies blame hardware specifications. Manzili assumes total counterparty accountability under a single Master Service Agreement, guaranteeing deterministic floor execution.",
      },
      {
        q: "What happens if a showroom touch table fails during a launch?",
        a: "Manzili deploys redundant hot-swap hardware units and dual-configured presentation machines on site. In the unlikely event of hardware failure, backup systems engage instantly without disrupting sales operations, backed by our guaranteed 4-hour local Riyadh technician dispatch SLA.",
      },
      {
        q: "Does Manzili provide physical installation and technical staging across Saudi Arabia?",
        a: "Yes. Our in-house engineering and staging teams oversee delivery, installation, structural rigging, thermal testing, and display color calibration across Riyadh, Jeddah, and the Eastern Province, ensuring showroom readiness well before your official launch date.",
      },
    ],
  },
  nav: { eyebrow: "Infrastructure Navigation", ctaLabel: "View Full 6-Pillar Infrastructure" },
  conversion: {
    headline: "Stage Your Showroom For High-Velocity Sales",
    body: "Eliminate multi-vendor risk with turnkey touch tables, LED walls, immersive rooms, and hologram displays deployed under one Master Service Agreement.",
    primary: { label: "Request Hardware Audit", href: "/contact" },
    trust: ["Single Master Agreement", "4-Hour Riyadh Dispatch"],
  },
};
