import type React from "react";

import styles from "./styles.module.css";

const Preview = ({
  children,
  codeblock,
}: React.HTMLAttributes<HTMLDivElement> & { codeblock?: string }) => (
  <figure data-with-codeblock={codeblock} className={styles.preview}>
    {children}
  </figure>
);

export default Preview;
