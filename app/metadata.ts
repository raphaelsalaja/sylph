import type { Metadata } from "next/types";

export const OpenGraphMetadata: Metadata = {
  title: {
    default: "Kendall Roy",
    template: "%s",
  },
  description:
    "Visionary leader and former CEO of Waystar Royco, navigating the complexities of corporate media with a relentless drive for success.",
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
  authors: [
    {
      name: "Kendall Roy",
      url: "https://kendallroy.com",
    },
  ],
  creator: "Kendall Roy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kendallroy.com",
    title: "Kendall Roy",
    description:
      "Visionary leader and former CEO of Waystar Royco, navigating the complexities of corporate media with a relentless drive for success.",
    siteName: "Kendall Roy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kendall Roy",
    description:
      "Visionary leader and former CEO of Waystar Royco, navigating the complexities of corporate media with a relentless drive for success.",
    images: ["https://kendallroy.com/api/og"],
    creator: "@kendallroy",
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
