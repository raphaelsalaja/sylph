import { typography } from "@/markdown/components/typography";

import { Posts } from "@/app/blog/components/posts";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Preview: ({ children, codeblock }) => (
      <div data-with-codeblock={codeblock} className="preview">
        {children}
      </div>
    ),
    BlogPosts: () => <Posts />,
    ...typography,
    ...components,
  };
}
