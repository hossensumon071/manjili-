import { pageMetadata } from "@/lib/seo";
import { ContactView } from "@/components/views/ContactView";

export const metadata = pageMetadata("ar", "/contact-us");

export default function ContactPageAr() {
  return <ContactView locale="ar" />;
}
