import type { LegalDoc } from "./types";

// Source: 13_Legal_01_Privacy_Policy.md — supports **bold** and [label](href)
export const privacy: LegalDoc = {
  slug: "privacy",
  meta: {
    title: "Enterprise Privacy Policy & Data Governance",
    description: "How Manzili collects, processes, hosts and protects data in alignment with the Saudi Personal Data Protection Law (PDPL) and NCA controls.",
  },
  eyebrow: "Legal • Data Governance",
  title: "Enterprise Privacy Policy & Data Governance Notice",
  intro:
    "How we collect, process, host and protect enterprise and buyer data across our website, Connected Sales Environment, digital twins and sales center hardware.",
  facts: [
    { label: "Effective Date", value: "January 1, 2026" },
    { label: "Operating Entity", value: "IT Home Solutions Company d.b.a. Manzili (CR# 1010797640)" },
    { label: "Corporate Office", value: "AlRayyan District, Riyadh 14212, Kingdom of Saudi Arabia" },
    { label: "Compliance Standard", value: "Saudi PDPL (Royal Decree No. M/19) & NCA Controls" },
  ],
  sections: [
    {
      id: "governance",
      title: "1. Corporate Governance & Executive Summary",
      blocks: [
        { p: "**IT Home Solutions Company d.b.a. Manzili (CR# 1010797640)** (\"Manzili\", \"we\", \"our\") is dedicated to protecting the privacy, security, and digital sovereignty of institutional real estate clients, commercial sales teams, and prospective off-plan property buyers." },
        { p: "This Enterprise Privacy Policy outlines our data architecture, processing principles, and regulatory safeguards governing personal and commercial telemetry captured across our corporate website, connected sales environments (CSE), digital twin masterplans, and sales center hardware controllers in strict alignment with the **Saudi Personal Data Protection Law (PDPL)**." },
      ],
    },
    {
      id: "collected",
      title: "2. Categories of Information Collected",
      blocks: [
        { h3: "A. Enterprise Counterparty & RFP Intake Data" },
        { p: "When developers, asset managers, or family offices submit specifications via our Enterprise Scoping Portal, we collect:" },
        {
          ul: [
            "**Professional Identity:** Full legal name, corporate executive title, and organizational affiliation.",
            "**Corporate Communications:** Verifiable corporate email address and mobile dispatch number.",
            "**Project Specifications:** Parcel dimensions, gross floor area (GFA), tower counts, Wafi off-plan regulatory status, and integration targets.",
          ],
        },
        { h3: "B. Buyer Spatial Telemetry & Behavior (Connected Sales Environment)" },
        { p: "Unlike consumer marketing portals, our Connected Sales Environment (CSE) records spatial behavioral telemetry to evaluate off-plan buyer purchasing intent:" },
        {
          ul: [
            "**Spatial Dwell Metrics:** Time spent evaluating specific tower typologies, residential floor levels, and unit orientations.",
            "**Unit Interaction Logs:** Floor plan configuration toggles, balcony sightline adjustments, and finishing package selections.",
            "**Digital Transaction Authentication:** Nafath identity verification tokens and digital SPA reservation timestamp metadata (processed securely without storing raw biometric or national identity credentials on public web servers).",
          ],
        },
        { h3: "C. Technical & System Infrastructure Logs" },
        {
          ul: [
            "**Enterprise Network Telemetry:** IP addresses, browser engine versions, WebGL hardware rendering capabilities, and session timestamps used to optimize 3D streaming performance.",
            "**Essential Cookies & Local Session Storage:** Cryptographic session tokens and interface preference cookies necessary to maintain showroom and multi-screen state continuity.",
          ],
        },
      ],
    },
    {
      id: "lawful-basis",
      title: "3. Lawful Basis & Purpose of Processing",
      blocks: [
        { p: "In compliance with the Saudi PDPL, all data collection is executed under clear, lawful bases:" },
        {
          ol: [
            "**Contractual Performance & Pre-Contractual Scoping:** Evaluating developer RFP submissions, configuring custom WebGL digital twin builds, and deploying sales center hardware integrations.",
            "**Deterministic Transaction Execution:** Authenticating off-plan reservations and generating compliant Sales and Purchase Agreements (SPAs) per REGA guidelines.",
            "**Legitimate Commercial Analytics:** Aggregating anonymous spatial telemetry to provide master developers with unit absorption heatmaps and buyer demand insights.",
            "**Legal & Regulatory Compliance:** Fulfilling statutory obligations enforced by REGA, the Ministry of Housing (Wafi), and Saudi judicial authorities.",
          ],
        },
      ],
    },
    {
      id: "sovereignty",
      title: "4. In-Kingdom Data Sovereignty & Hosting Infrastructure",
      blocks: [
        {
          ol: [
            "**Zero Unauthorized Cross-Border Data Transfer:** In strict adherence to Saudi PDPL cross-border transfer restrictions, all sensitive buyer transaction data, Nafath authentication records, and client project databases are hosted on **in-Kingdom Tier-IV sovereign cloud infrastructure** (Oracle Cloud Riyadh Region / STC Cloud / Google Cloud Dammam Region).",
            "**No Data Commercialization:** Manzili does not monetize, sell, lease, or trade personal or institutional commercial data to third-party ad networks, lead brokers, or unauthorized entities.",
          ],
        },
      ],
    },
    {
      id: "sub-processors",
      title: "5. Sub-Processors & Enterprise Integrations",
      blocks: [
        { p: "We interface exclusively with audited, enterprise-grade counterparties under strict Data Processing Agreements (DPAs):" },
        {
          ul: [
            "**National Unified Portal (Nafath):** For biometric and national identity verification during off-plan digital SPA execution.",
            "**Enterprise CRM / ERP Systems:** Direct bi-directional API synchronizations with client ERP instances (Salesforce, Microsoft Dynamics 365, Yardi Voyager, SAP Real Estate).",
            "**Spatial Capture Engines:** Matterport Inc. (used for real-world ready-built scanning and model unit capture, subject to strict enterprise privacy controls).",
            "**In-Kingdom Cloud Infrastructure:** Local KSA data centers providing SOC 2 Type II, ISO 27001, and Saudi NCA-compliant cloud compute.",
          ],
        },
      ],
    },
    {
      id: "security",
      title: "6. Enterprise Information Security (NCA Compliance)",
      blocks: [
        { p: "Manzili applies defense-in-depth technical and organizational measures aligned with the **National Cybersecurity Authority (NCA) Essential Cybersecurity Controls (ECC)**:" },
        {
          ul: [
            "**Data Encryption:** TLS 1.3 cryptographic protection for all data in transit; AES-256 encryption for all data at rest.",
            "**Access Control & RBAC:** Role-based access governance with mandatory multi-factor authentication (MFA) across all administrative portals.",
            "**Hardware Showroom Isolation:** Sales center kiosks and command centers utilize partitioned, zero-trust VLAN architecture to safeguard local showroom hardware from public network exposure.",
          ],
        },
      ],
    },
    {
      id: "rights",
      title: "7. Data Subject Rights Under Saudi PDPL",
      blocks: [
        { p: "Natural persons residing within the Kingdom of Saudi Arabia possess enforceable rights regarding their personal data:" },
        {
          ul: [
            "**Right to Know / Access:** The right to obtain confirmation regarding whether personal data is processed and request a copy of relevant records.",
            "**Right to Rectification:** The right to request correction of inaccurate, outdated, or incomplete personal information.",
            "**Right to Destruction:** The right to request the permanent deletion of personal data when the original processing purpose has expired, subject to statutory REGA transaction retention rules.",
            "**Right to Withdraw Consent:** The right to withdraw previously granted consent at any time for non-statutory data processing.",
          ],
        },
        { p: "To exercise any of these statutory rights, submit a formal request to our dedicated Data Protection Officer at: **[support@manzili.sa](mailto:support@manzili.sa)**." },
      ],
    },
    {
      id: "retention",
      title: "8. Data Retention Policies",
      blocks: [
        {
          ul: [
            "**Commercial RFP Submissions:** Retained for the duration of the developer evaluation and contracting process, or archived after 24 months if no contractual engagement ensues.",
            "**Off-Plan Transaction Records:** Retained in compliance with Saudi real estate escrow statutes and statutory corporate audit requirements (minimum 10 years pursuant to commercial law).",
            "**Web Analytics & Session Telemetry:** Anonymized and aggregated after 90 days.",
          ],
        },
      ],
    },
    {
      id: "dpo",
      title: "9. Regulatory Inquiries & Data Protection Office",
      blocks: [
        { p: "**Data Protection Officer (DPO)** — IT Home Solutions Company d.b.a. Manzili (CR# 1010797640)" },
        {
          ul: [
            "**Corporate Office:** AlRayyan District, Riyadh 14212, Kingdom of Saudi Arabia",
            "**Direct Privacy & Support Desk:** [support@manzili.sa](mailto:support@manzili.sa)",
            "**Commercial Inquiries:** [sales@manzili.sa](mailto:sales@manzili.sa)",
            "**Mobile / Direct Contact:** [+966 53-484-4986](tel:+966534844986)",
          ],
        },
      ],
    },
  ],
};
