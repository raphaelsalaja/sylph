import type { Metadata } from "next/types";

export const OpenGraphMetadata: Metadata = {
  title: {
    default: "Sylph",
    template: "%s",
  },
  description: "...",
  keywords: [
    "Kendall Roy",
    "Waystar Royco",
    "Media Empire",
    "Corporate Takeover",
    "Leadership",
    "Streaming",
    "Digital Media",
    "CEO",
    "Succession",
    "Power Moves",
    "High-Stakes Strategy",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sylph.raphaelsalaja.com",
    title: "Sylph",
    description: "...",
    siteName: "Sylph",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sylph",
    description: "...",
    images: ["https://sylph.raphaelsalaja.com/api/og:image"],
    creator: "@raphaelsalaja",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
