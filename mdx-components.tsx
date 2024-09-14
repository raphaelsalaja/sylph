import { typography } from "@/markdown/components/typography";
import { rehype } from "@/markdown/components/rehype";

import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...typography,
    ...rehype,
    ...components,
  };
}
