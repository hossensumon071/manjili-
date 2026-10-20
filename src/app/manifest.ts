import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Manzili — Enterprise Off-Plan Sales Infrastructure",
    short_name: "Manzili",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F7F7",
    theme_color: "#0477AB",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
