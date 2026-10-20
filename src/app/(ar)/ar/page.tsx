import { pageMetadata } from "@/lib/seo";
import { HomeView } from "@/components/views/HomeView";

export const metadata = pageMetadata("ar", "/");

export default function HomePageAr() {
  return <HomeView locale="ar" />;
}
