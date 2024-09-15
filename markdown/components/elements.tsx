import type { MDXComponents } from "mdx/types";

export const elements: MDXComponents = {
  Preview: ({ children, codeblock }) => (
    <div data-with-codeblock={codeblock} className="preview">
      {children}
    </div>
  ),
  Content: ({ children }) => <div className="content">{children}</div>,
};
