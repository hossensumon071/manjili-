import { pageMetadata } from "@/lib/seo";
import { PlatformView } from "@/components/views/PlatformView";

export const metadata = pageMetadata("en", "/platform-cse");

export default function PlatformPage() {
  return <PlatformView locale="en" />;
}
