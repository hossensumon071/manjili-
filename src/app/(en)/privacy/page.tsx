import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata = pageMetadata("en", "/privacy");

export default function Page() {
  return <LegalPage locale="en" which="privacy" />;
}
