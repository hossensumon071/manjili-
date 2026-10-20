import { pageMetadata } from "@/lib/seo";
import { NotFoundView } from "@/components/layout/NotFoundView";

export const metadata = pageMetadata("ar", "*404*", { noindex: true });

export default function NotFound() {
  return <NotFoundView locale="ar" />;
}
