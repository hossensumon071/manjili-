import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata = pageMetadata("ar", "/terms");

export default function Page() {
  return <LegalPage locale="ar" which="terms" />;
}
