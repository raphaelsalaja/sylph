import type { Metadata } from "next/types";

export const OpenGraph: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: {
    default: "Sylph",
    template: "%s",
  },
  description: "...",
  keywords: ["Design", "Development", "Engineering"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "Sylph",
    description: "...",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}api/og`],
    siteName: "Sylph",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sylph",
    description: "...",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}api/og`],
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
