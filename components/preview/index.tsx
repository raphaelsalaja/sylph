import type React from "react";

import "./styles.css";

const Preview = ({ children, codeblock }: React.HTMLAttributes<HTMLDivElement> & { codeblock?: string }) => (
  <figure data-with-codeblock={codeblock} className="preview">
    {children}
  </figure>
);

export default Preview;
