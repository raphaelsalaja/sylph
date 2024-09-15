import { elements } from "@/markdown/components/elements";
import { typography } from "@/markdown/components/typography";

import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...elements,
    ...typography,
    ...components,
  };
}
