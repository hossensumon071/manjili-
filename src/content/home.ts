import type { IconName } from "@/components/ui/Icon";
import { routes } from "./site";

/**
 * Homepage copy — sourced from 01_Page_01_Homepage.md (Production Release v1.0).
 * Edit text here; components read everything from this file.
 */
export const home = {
  hero: {
    eyebrow: "Enterprise Off-Plan Sales Infrastructure",
    // Headline is split so the first word can carry the lighter weight from the design.
    headline: { light: "Drive", strong: "Off-Plan Sales", rest: "Velocity Across KSA" },
    subheader:
      "Manzili equips Saudi master developers and commercial sales leadership with high-performance digital twins, integrated showroom hardware, and the REGA-compliant Connected Sales Environment (CSE) to accelerate contract execution.",
    primaryCta: { label: "Deploy Sales Engine", href: routes.contact },
    secondaryCta: { label: "Explore 6 Pillars", href: "#pillars" },
    status: ["Unreal Engine 5 Spatial Core", "Native 60 FPS 4K", "REGA Compliant", "Local KSA Hosting"],
  },

  mandate: {
    eyebrow: "Enterprise Mandate",
    statement:
      "We engineer off-plan absorption velocity across Saudi Arabia’s master developments by deploying high-performance BIM-integrated digital twins and the Connected Sales Environment to convert spatial verification into immediate, binding contract commitments.",
    cta: { label: "Inspect Enterprise Solutions", href: routes.solutions },
  },

  trust: {
    eyebrow: "Built For Saudi Arabia’s Master Developments",
    headline: "Infrastructure Built for High-Value Developments",
    body: "From master-planned communities to flagship sales centers, Manzili delivers the infrastructure required to power high-value off-plan developments across KSA.",
    cta: { label: "Contact Us", href: routes.contact },
    segments: [
      "Master Planned Communities",
      "Mixed-Use Towers",
      "Luxury Villa Enclaves",
      "Flagship Sales Centers",
      "Major Real Estate Expos",
    ],
    compliance: ["Enterprise SLA Counterparties", "Local PDPL Compliance", "REGA & Wafi Aligned"],
  },

  problem: {
    eyebrow: "The Execution Gap",
    headline: "Static Visualization Stalls Capital Absorption",
    cards: [
      {
        index: "01",
        icon: "monitor" as IconName,
        title: "The Showroom Shelfware Trap",
        body: "Untrained sales teams abandon complex 3D files for paper brochures under VIP negotiation pressure. This execution failure lengthens transaction cycles and squanders high-capital showroom investments.",
      },
      {
        index: "02",
        icon: "unlink" as IconName,
        title: "Multi-Vendor Fragmentation Tax",
        body: "Dividing procurement between 3D software studios and AV hardware integrators creates zero operational accountability. Hardware crashes during high-stakes launches trigger mutual vendor blame while the developer absorbs revenue delays.",
      },
      {
        index: "03",
        icon: "eye" as IconName,
        title: "Buyer Spatial Hesitation",
        body: "Unverified floor sightlines and ambiguous unit orientations prevent off-plan buyers from committing capital. Without deterministic spatial validation, prospective VIP purchasers defer reservation commitments.",
      },
    ],
  },

  cse: {
    eyebrow: "Flagship Product",
    headline: "Manzili Connected Sales Environment (CSE)",
    lead: "An end-to-end, REGA-compliant platform that transitions off-plan sales from static showrooms into an automated digital transaction workflow. Guides buyers from 3D masterplans directly into unit tours, dynamic financing calculators, and instant Nafath authentication.",
    cta: { label: "Explore Connected Sales Environment", href: routes.cse },
    features: [
      {
        icon: "map" as IconName,
        title: "Macro-to-Micro 3D Spatial Navigation",
        body: "Connects interactive community masterplans directly to unit virtual tours with verified balcony sightlines and real-world solar simulations.",
      },
      {
        icon: "wallet" as IconName,
        title: "Live Inventory & Dynamic Financing",
        body: "Sub-500ms ERP synchronization with Yardi, Salesforce, and SAP, paired with interactive floor plans and milestone payment calculators.",
      },
      {
        icon: "fingerprint" as IconName,
        title: "Binding Nafath Digital Transactions",
        body: "Instant government-grade biometric ID verification via Nafath, automated REGA-compliant SPA generation, and on-platform escrow unit locking.",
      },
      {
        icon: "activity" as IconName,
        title: "Behavioral Intent Telemetry",
        body: "Measures exact dwell time on unit typologies, tracks down-payment adjustments, and pinpoints funnel drop-offs to prioritize ready buyers.",
      },
    ],
  },

  pillars: {
    eyebrow: "Enterprise Infrastructure",
    headline: "The 6-Pillar Sales Infrastructure",
    lead: "A unified commercial deployment model replacing fragmented vendors with single-source accountability under one Master Service Agreement.",
  },

  process: {
    eyebrow: "Deployment Framework",
    headline: "From BIM To Contract Execution",
    subheader:
      "Our deployment framework activates launch-ready digital twins within 14 operational days from engineering data freeze.",
    steps: [
      {
        index: "01",
        title: "Data Ingestion & Optimization",
        body: "We parse Revit, IFC, and GIS data into optimized geometry, preserving architectural tolerances under strict NDAs.",
      },
      {
        index: "02",
        title: "WebGL & Unreal Engine Deployment",
        body: "We compile 3D assets into dual runtimes—high-performance Unreal Engine 5 offline apps and lightweight mobile WebGL portals.",
      },
      {
        index: "03",
        title: "Sales Floor & CSE Activation",
        body: "We train sales teams on behavioral negotiation SOPs, link live inventory to Yardi and Salesforce, and activate the CSE transaction engine.",
      },
    ],
  },

  // From the approved Figma design. Sync with 10_Page_04_Case_Studies_Hub.md when that page is built.
  caseStudies: {
    eyebrow: "Case Studies",
    headline: "Inspect the project, deployment, and evidence.",
    cta: { label: "Explore Now", href: routes.caseStudies },
    items: [
      {
        name: "Masar Ma’ab",
        badge: "3 towers",
        location: "Makkah, Saudi Arabia",
        type: "Residential development",
        summary: "Spatial sales enablement for a three-tower development.",
        href: routes.caseStudies,
        art: "towers" as const,
      },
      {
        name: "Dyari Signature",
        badge: "33 buildings",
        location: "Saudi Arabia",
        type: "Residential development",
        summary: "Exhibition-ready discovery across 33 buildings.",
        href: routes.caseStudies,
        art: "residence" as const,
      },
    ],
  },

  finalCta: {
    badge: ["Enterprise SLAs", "REGA Compliant", "Riyadh Headquartered"],
    headline: "Accelerate Your Next Masterplan Launch",
    body: "Deploy an enterprise sales engine that converts off-plan buyer interest into legally binding escrow deposits from day one.",
    primary: { label: "Schedule Technical Demo", href: routes.contact },
  },

  faq: {
    eyebrow: "Procurement Due Diligence",
    headline: "De-Risking Your Sales Staging",
    description:
      "Review technical specifications, data protection standards, and deployment timelines required for institutional master developments.",
    cta: { label: "Contact Us", href: routes.contact },
    items: [
      {
        q: "What is the Manzili Connected Sales Environment (CSE)?",
        a: "The CSE is an end-to-end, REGA-compliant digital sales platform combining 3D masterplan navigation, real-time ERP inventory synchronization, dynamic milestone financing calculators, and instant Nafath authentication to execute binding digital contracts on-platform.",
      },
      {
        q: "How does Manzili’s 6-Pillar model eliminate vendor fragmentation?",
        a: "Traditional procurement splits software studios, AV contractors, and training firms into isolated silos. Manzili unifies software runtimes, sales center hardware, frontline SOP coaching, launch command, and lifecycle support under a single Master Service Agreement with class-A SLAs.",
      },
      {
        q: "At what stage does Manzili deploy with master developers?",
        a: "We integrate once a project is Wafi-approved to sell. From architectural concept and launch events through to Matterport 3D scans of physical model units and handover of ready-built assets, we support developers across the complete multi-year lifecycle.",
      },
      {
        q: "Where is project data hosted, and how is IP protected?",
        a: "All architectural assets, transaction records, and buyer data reside in local Saudi cloud infrastructure complying fully with KSA PDPL and National Cybersecurity Authority regulations. Proprietary 3D geometry is encrypted at rest and in transit.",
      },
    ],
  },
};
