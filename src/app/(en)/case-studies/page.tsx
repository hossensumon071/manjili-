import { pageMetadata } from "@/lib/seo";
import { CaseIndexView } from "@/components/views/CaseViews";

export const metadata = pageMetadata("en", "/case-studies");

export default function CaseStudiesPage() {
  return <CaseIndexView locale="en" />;
}
