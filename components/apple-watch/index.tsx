import * as AppleWatchWidgets from "@/components/apple-watch/widgets";

import React from "react";

function AppleWatch() {
  return (
    <React.Fragment>
      <div className="relative h-[280px] w-[247.5px]">
        <div className="relative h-[242px] w-[198px] overflow-hidden rounded-2xl translate-x-[19.5px] translate-y-[19px]">
          <AppleWatchWidgets.Background />
          <AppleWatchWidgets.Date />
          <AppleWatchWidgets.Clock />
        </div>
        <AppleWatchWidgets.Case />
      </div>
    </React.Fragment>
  );
}

export default AppleWatch;
