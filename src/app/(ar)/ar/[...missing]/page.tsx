import { notFound } from "next/navigation";

/** Any unknown Arabic URL renders the Arabic 404 inside the Arabic root layout. */
export default function Missing() {
  notFound();
}
