import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { OpenGraph } from "@/lib/og";

import React from "react";

const category = "examples";

export function generateMetadata() {
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent(category)}`;

  return {
    ...OpenGraph,
    category,
    openGraph: {
      category,
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
        <Posts category={category} />
      </FadeIn.Item>
    </React.Fragment>
  );
}
