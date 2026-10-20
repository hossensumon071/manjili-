import { notFound } from "next/navigation";

/** Any unknown English URL renders the English 404 inside the English root layout. */
export default function Missing() {
  notFound();
}
