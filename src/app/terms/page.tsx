import type { Metadata } from "next";
import { terms } from "@/content/legal/terms";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: terms.meta.title,
  description: terms.meta.description,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}
