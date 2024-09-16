import * as FadeIn from "@/components/motion/staggers/fade";
import * as Home from "@/markdown/app/home";

import React from "react";

export default function Page() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <Home.Header />
      </FadeIn.Item>
      <FadeIn.Item>
        <Home.AboutMe />
      </FadeIn.Item>
      <FadeIn.Item>
        <Home.Posts />
      </FadeIn.Item>
      <FadeIn.Item>
        <Home.Posts />
      </FadeIn.Item>
      <FadeIn.Item>
        <Home.Posts />
      </FadeIn.Item>
      <FadeIn.Item>
        <Home.Posts />
      </FadeIn.Item>
      <FadeIn.Item>
        <Home.Posts />
      </FadeIn.Item>
      <FadeIn.Item>
        <Home.Posts />
      </FadeIn.Item>
      <FadeIn.Item>
        <Home.Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
