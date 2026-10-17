import type { PillarPageData } from "./types";

// Source: 05_Pillar_02_CRM_Inventory.md
export const pillar02: PillarPageData = {
  href: "/pillars/crm-inventory-integration",
  meta: {
    title: "Pillar 02: CRM & Inventory Integration",
    description:
      "Sub-500ms bidirectional sync between 3D sales runtimes and Salesforce, Yardi, SAP and HubSpot — eliminating unit double-bookings during VIP launches.",
  },
  hero: {
    crumb: "Pillar 02: CRM & Inventory Integration",
    eyebrow: "Pillar 02 • Enterprise Sync",
    title: "Eliminate Off-Plan Unit Allocation Collisions",
    subheader:
      "Manzili synchronizes spatial sales runtimes with enterprise CRM and ERP databases in sub-500 milliseconds, preventing inventory double-bookings and streaming live buyer telemetry directly to your sales floor.",
    primary: { label: "Connect Sales Infrastructure", href: "/contact" },
    secondary: { label: "Review API Architecture", href: "#architecture" },
    status: ["Sub-500ms Two-Way Sync", "Salesforce", "Yardi", "SAP", "HubSpot"],
    panel: {
      title: "Inventory sync · Enterprise connectors",
      live: "< 500ms",
      items: [
        { icon: "database", label: "Salesforce Property Cloud", meta: "Bidirectional event stream · < 350ms", state: "active" },
        { icon: "database", label: "Yardi Voyager 7S / 8", meta: "Real-time webhook pipeline · < 450ms", state: "active" },
        { icon: "database", label: "SAP Real Estate (RE-FX)", meta: "OData / RFC middleware · < 500ms", state: "active" },
        { icon: "database", label: "HubSpot Enterprise CRM", meta: "REST API trigger · < 400ms", state: "ok" },
      ],
      footer: "PDPL compliant · In-Kingdom data residency",
    },
  },
  architecture: {
    eyebrow: "System Architecture",
    title: "Sub-500ms Bidirectional Inventory Sync Across Every Device",
    lead: "High-velocity launch events fail when disconnected portals display stale unit availability. Manzili binds your 3D spatial models directly to your enterprise database, guaranteeing instantaneous unit status accuracy across showroom touch tables, LED walls, and mobile web sessions.",
    features: [
      {
        tag: "Concurrency Protection",
        title: "Atomic Unit Reservation Locking",
        body: "The millisecond a sales agent initiates a reservation commitment or draft contract on a unit, Manzili broadcasts an atomic reservation lock across all global endpoints. Competing showroom tables and web sessions instantly mark the unit as pending, eliminating reservation collisions and protecting high-value VIP buyer trust.",
        bullets: [
          { title: "Global Concurrency Guard", body: "Blocks simultaneous reservations within 500ms" },
          { title: "Configurable Hold Windows", body: "Releases timed-out allocations automatically" },
          { title: "Audit-Ready Logs", body: "Records agent, timestamp, and buyer ID" },
        ],
      },
      {
        tag: "Enterprise Ecosystem",
        title: "Certified Enterprise CRM Connectors",
        body: "Deploy pre-configured REST and GraphQL connectors engineered for real estate ERPs including Salesforce Property Cloud, Yardi Voyager, SAP Real Estate, and HubSpot. Unit pricing adjustments, phase releases, and payment plan modifications reflect across the 3D twin without engineering intervention or manual data re-entry.",
        bullets: [
          { title: "Certified Adapters", body: "Native hooks for Salesforce and Yardi" },
          { title: "Instant Price Updates", body: "Reflects revised payment terms immediately" },
          { title: "Automated Phase Releases", body: "Unlocks new blocks without downtime" },
        ],
      },
      {
        tag: "Behavioral Telemetry",
        title: "Live Spatial Buyer Intent Telemetry",
        body: "Every 3D interaction generates actionable commercial intelligence. The engine tracks dwell time by unit typology, balcony sightline angles inspected, sun-study timeframes examined, and floorplan comparisons. This telemetry streams directly into the sales agent’s CRM contact record before the buyer reaches the negotiation table.",
        bullets: [
          { title: "Spatial Heatmaps", body: "Reveals highest-demand views and layouts" },
          { title: "Enriched Lead Profiles", body: "Arms agents with exact buyer preferences" },
          { title: "Conversion Scoring", body: "Prioritizes leads based on interaction depth" },
        ],
      },
    ],
  },
  proof: {
    eyebrow: "Commercial Proof",
    title: "How Inventory Synchronization Protects Launch Momentum",
    items: [
      {
        metric: "0% Allocation Collisions",
        title: "Zero Unit Double-Bookings",
        body: "Eliminating inventory lag ensures sales teams never sell the same unit twice during high-density launch environments, preserving developer reputation and legal compliance.",
      },
      {
        metric: "<500ms Global Propagation",
        title: "Real-Time Launch Visibility",
        body: "CCOs and sales directors monitor live absorption rates, revenue velocity, and remaining inventory across sales galleries and digital channels from a single operational console.",
      },
      {
        metric: "3.2x Faster Commitments",
        title: "Accelerated Contract Execution",
        body: "Direct handoff from 3D unit selection to CRM reservation forms compresses buyer negotiation time and secures binding contracts during peak intent windows.",
      },
    ],
  },
  matrix: {
    eyebrow: "Enterprise Matrix",
    title: "Certified Connectors For Saudi Master Developers",
    lead: "Manzili deploys pre-tested enterprise connectors compliant with Saudi PDPL regulations and in-Kingdom data residency mandates, integrating directly with your core financial and operational stack.",
    columns: ["Enterprise Platform", "Synchronization Mode", "Unit Lock Latency", "Compliance Scope"],
    rows: [
      ["Salesforce Property Cloud", "Two-Way Bidirectional Event Stream", "<350ms WebSocket Broadcast", "PDPL / KSA Data Residency"],
      ["Yardi Voyager 7S / 8", "RESTful Real-Time Webhook Pipeline", "<450ms Database Queue", "Financial Audit Trail Aligned"],
      ["SAP Real Estate (RE-FX)", "OData / RFC Enterprise Middleware", "<500ms Transaction Commit", "Master Escrow Reconciliation"],
      ["HubSpot Enterprise CRM", "Bidirectional REST API Trigger", "<400ms Pipeline Sync", "Lead Telemetry & Nurture"],
    ],
  },
  faq: {
    eyebrow: "Technical FAQ",
    headline: "Inventory Integration Technical Questions",
    items: [
      {
        q: "How does Manzili prevent concurrent unit reservation collisions?",
        a: "When a sales consultant initiates an offer or reservation flow, the engine executes an atomic lock on that unit’s unique identifier in the centralized database. Within 500 milliseconds, all active touch tables, LED walls, and mobile web sessions visually transition the unit to pending status.",
      },
      {
        q: "What happens to inventory sync if showroom internet drops?",
        a: "The offline UE5 sales application continues rendering in high fidelity locally. If network connectivity drops, the application displays the last verified inventory state and requires a local network heartbeat before executing new binding unit reservations, preventing unconfirmed allocations.",
      },
      {
        q: "How does buyer spatial telemetry integrate with our CRM?",
        a: "Spatial interaction events—such as viewing angles, floor plan toggles, and sun simulations—are packaged into structured JSON event payloads. These are injected directly into the buyer’s CRM contact timeline via webhook, giving sales reps complete visibility into buyer intent prior to negotiation.",
      },
    ],
  },
  nav: { eyebrow: "Infrastructure Navigation", ctaLabel: "View Full 6-Pillar Infrastructure" },
  conversion: {
    headline: "Unify Your Inventory And Sales Infrastructure",
    body: "Connect your enterprise CRM to live 3D masterplans and eliminate launch-day inventory collisions across every sales channel.",
    primary: { label: "Schedule Architecture Audit", href: "/contact" },
    trust: ["Sub-500ms Sync", "Certified Enterprise Connectors"],
  },
};
