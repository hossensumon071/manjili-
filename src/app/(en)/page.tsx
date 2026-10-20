import { pageMetadata } from "@/lib/seo";
import { HomeView } from "@/components/views/HomeView";

export const metadata = pageMetadata("en", "/");

export default function HomePage() {
  return <HomeView locale="en" />;
}
