import { pageMetadata } from "@/lib/seo";
import { PlatformView } from "@/components/views/PlatformView";

export const metadata = pageMetadata("ar", "/platform-cse");

export default function PlatformPageAr() {
  return <PlatformView locale="ar" />;
}
