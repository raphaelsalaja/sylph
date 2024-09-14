import { rehype } from "@/markdown/components/rehype";
import { typography } from "@/markdown/components/typography";

import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...typography,
    ...rehype,
    ...components,
  };
}
