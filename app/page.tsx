import { Geolocation } from "@/components/geolocation";
import Home from "@/markdown/pages/home.mdx";

import React from "react";

export default function Page() {
  return (
    <React.Fragment>
      <Home />
      <Geolocation />
    </React.Fragment>
  );
}
