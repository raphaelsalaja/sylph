import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

import React from "react";

export default function Page() {
  return (
    <React.Fragment>
      <FadeIn.Item>
        <Posts category="thoughts" />
      </FadeIn.Item>
    </React.Fragment>
  );
}
