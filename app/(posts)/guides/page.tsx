import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

import React from "react";

export default function Page() {
  return (
    <React.Fragment>
      <FadeIn.Item>
        <Posts category="guides" />
      </FadeIn.Item>
    </React.Fragment>
  );
}
