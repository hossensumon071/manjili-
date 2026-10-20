import { pageMetadata } from "@/lib/seo";
import { ContactView } from "@/components/views/ContactView";

export const metadata = pageMetadata("en", "/contact-us");

export default function ContactPage() {
  return <ContactView locale="en" />;
}
