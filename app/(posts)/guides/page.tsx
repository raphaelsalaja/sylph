import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { OpenGraph } from "@/lib/og";

import React from "react";

export function generateMetadata() {
  const title = "Guides";
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent(title)}`;

  return {
    ...OpenGraph,
    title,
    openGraph: {
      title,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  };
}

export default function Page() {
  return (
    <React.Fragment>
      <FadeIn.Item>
        <Posts category="guides" />
      </FadeIn.Item>
    </React.Fragment>
  );
}
