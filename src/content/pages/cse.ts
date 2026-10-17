import type { IconName } from "@/components/ui/Icon";
import { routes } from "@/content/site";

// Source: 03_Page_03_Platform_CSE.md
export const csePage = {
  meta: {
    title: "Connected Sales Environment (CSE)",
    description:
      "A REGA-compliant platform turning off-plan sales into a digital transaction workflow: 3D masterplan navigation, live inventory, milestone financing, Nafath authentication and buyer telemetry.",
  },
  hero: {
    crumb: "Connected Sales Environment (CSE)",
    eyebrow: "Enterprise Platform • REGA Compliant",
    title: "The Connected Sales Environment For Off-Plan Real Estate",
    subheader:
      "A fully REGA-compliant platform that transforms off-plan real estate sales into an automated digital transaction workflow—guiding buyers from masterplan exploration to Nafath authentication and instant contract execution.",
    primary: { label: "Launch CSE Platform", href: routes.contact },
    secondary: { label: "Explore Intent Telemetry", href: "#telemetry" },
    status: ["REGA Compliant", "Nafath Integrated", "Dynamic Milestone Schedules", "Live Telemetry"],
  },
  capabilities: {
    eyebrow: "Platform Capabilities",
    title: "Converting Off-Plan Browsing Into Binding Digital Transactions",
    lead: "Traditional off-plan sales lose high-intent buyers between static brochures and fragmented administrative handoffs. The Manzili CSE unifies 3D spatial exploration, live ERP inventory, and legal contract execution into a continuous digital transaction engine.",
    features: [
      {
        tag: "Spatial Exploration",
        title: "Macro-To-Micro Spatial Visualization",
        body: "Guides prospective buyers fluidly from community masterplan navigation directly into unit-level virtual tours. Buyers inspect district infrastructure, sunlight angles, and actual balcony view sightlines before examining interior layouts, eliminating spatial hesitation prior to reservation.",
        bullets: [
          { title: "Masterplan-to-Unit Navigation", body: "Continuous transition without loading delays" },
          { title: "Calibrated Balcony Sightlines", body: "Real-world elevation and angle simulation" },
          { title: "Dynamic Sunlight Modeling", body: "Accurate solar exposure across seasons" },
        ],
      },
      {
        tag: "Financial Engineering",
        title: "Live Inventory & Dynamic Financing",
        body: "Displays real-time unit availability synchronized directly with developer ERPs, alongside interactive floor plans and customizable milestone payment calculators. Prospective buyers tailor down payment thresholds and construction-linked milestone schedules to match their capital liquidity.",
        bullets: [
          { title: "Real-Time Availability Engine", body: "Instant sync prevents unit collisions" },
          { title: "Milestone-Based Calculators", body: "Customizable construction-linked payment schedules" },
          { title: "Interactive Floor Plans", body: "Dimensioned layout filters and elevations" },
        ],
      },
      {
        tag: "Transaction Core",
        title: "Binding REGA-Compliant Digital Transactions",
        body: "Authenticates buyers immediately through government-grade Nafath national identity integration. The platform auto-generates REGA-compliant Sales and Purchase Agreements (SPAs) and locks unit reservations on-platform, executing binding commitments without manual paperwork.",
        bullets: [
          { title: "Instant Nafath Authentication", body: "Government-grade identity verification in seconds" },
          { title: "Automated SPA Generation", body: "Legally verified contracts produced instantly" },
          { title: "On-Platform Unit Reservation", body: "Binding deposit lock into escrow" },
        ],
      },
    ],
  },
  telemetry: {
    eyebrow: "Behavioral Intent",
    title: "Eliminating Anecdotal Notes With Granular Buyer Telemetry",
    lead: "Traditional off-plan sales rely on subjective agent notes and superficial website pageviews. The CSE records platform-level telemetry across every interaction, empowering commercial leadership with empirical intent intelligence.",
    metrics: [
      {
        icon: "eye" as IconName,
        title: "Granular Spatial Engagement Metrics",
        body: "Measures exact second-by-second dwell time across individual unit typologies, corner layouts, and specific view orientations, pinpointing which architectural features drive serious purchase interest.",
        spec: "Sub-Second Dwell Telemetry",
      },
      {
        icon: "wallet" as IconName,
        title: "Financial Intent Validation",
        body: "Analyzes how prospective buyers adjust down payment sliders and milestone schedules, identifying viable financial liquidity and purchasing power before sales executives begin direct outreach.",
        spec: "Verified Payment Capacity",
      },
      {
        icon: "activity" as IconName,
        title: "Funnel Bottleneck Detection",
        body: "Pinpoints precise conversion drop-off stages—from masterplan exploration to Nafath verification and SPA generation—delivering actionable data to optimize sales pipelines and prioritize deal-ready buyers.",
        spec: "Zero Pipeline Blindspots",
      },
    ],
    // Illustrative funnel stages for the telemetry visual (no claimed figures).
    funnel: ["Masterplan exploration", "Unit virtual tour", "Financing configured", "Nafath verified", "SPA generated"],
  },
  comparison: {
    eyebrow: "Comparative Architecture",
    title: "Static Showroom Sales vs. Connected Sales Environment",
    lead: "Transitioning off-plan sales operations from legacy manual procedures to an automated, telemetry-driven digital transaction infrastructure.",
    columns: ["Operational Vector", "Legacy Off-Plan Sales", "Manzili Connected Sales Environment (CSE)"],
    rows: [
      ["Buyer Exploration", "Static printed brochures and non-interactive PDF floor plans", "Macro-to-micro 3D masterplan navigation and unit virtual tours"],
      ["Inventory Status", "Manually reconciled spreadsheets with frequent reservation collisions", "Sub-500ms real-time ERP inventory sync with instant unit locking"],
      ["Payment Schedules", "Static one-size-fits-all financing sheets", "Dynamic milestone calculator with custom equity/schedule modeling"],
      ["Buyer Authentication", "In-person physical passport/ID scanning and paper photocopies", "Instant digital identity verification via national Nafath integration"],
      ["Contract Execution", "Multi-day manual SPA drafting, physical courier, and signatures", "Instant automated REGA-compliant SPA generation on-platform"],
      ["Commercial Telemetry", "Anecdotal agent notes and unverified web traffic vanity clicks", "Granular spatial dwell time, liquidity modeling, and drop-off analytics"],
    ],
  },
  faq: {
    eyebrow: "Technical FAQ",
    headline: "Connected Sales Environment Operational Questions",
    items: [
      {
        q: "How does Nafath identity integration protect transaction compliance?",
        a: "The CSE connects directly to the Saudi national unified access system (Nafath). This instantly verifies citizen and resident identity records with government databases, ensuring all off-plan reservation commitments and generated SPAs comply fully with REGA legal mandates.",
      },
      {
        q: "Can the CSE integrate with our existing ERP and CRM?",
        a: "Yes. The platform features native two-way APIs for Salesforce, Yardi, and SAP. Inventory status, unit locks, payment schedules, and buyer telemetry sync continuously between the CSE and your core enterprise systems in under 500 milliseconds.",
      },
      {
        q: "How does behavioral intent telemetry improve sales team efficiency?",
        a: "Rather than calling cold leads, sales directors prioritize prospects who have configured payment milestones, validated financing, and dwelled on specific unit layouts. Sales executives enter conversations with verified data on exact buyer preferences and budget capabilities.",
      },
    ],
  },
  ecosystem: {
    eyebrow: "Enterprise Ecosystem",
    title: "Powered By The 6-Pillar Infrastructure",
    cta: { label: "Explore The 6-Pillar Infrastructure", href: routes.solutions },
  },
  conversion: {
    headline: "Deploy The Connected Sales Environment",
    body: "Transition your off-plan development into an automated digital transaction workflow with Nafath authentication and empirical buyer telemetry.",
    primary: { label: "Request Platform Access", href: routes.contact },
    trust: ["REGA Compliant", "Nafath Integrated", "In-Kingdom Hosting"],
  },
};
