import type { Metadata } from "next";
import { privacy } from "@/content/legal/privacy";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: privacy.meta.title,
  description: privacy.meta.description,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage doc={privacy} />;
}
