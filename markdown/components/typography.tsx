import type { MDXComponents } from "mdx/types";

export const typography: MDXComponents = {
  h1: ({ children }) => <h1>{children}</h1>,
  p: ({ children }) => <p>{children}</p>,
};
