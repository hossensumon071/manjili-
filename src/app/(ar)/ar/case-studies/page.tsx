import { pageMetadata } from "@/lib/seo";
import { CaseIndexView } from "@/components/views/CaseViews";

export const metadata = pageMetadata("ar", "/case-studies");

export default function CaseStudiesPageAr() {
  return <CaseIndexView locale="ar" />;
}
