import { mdxOptions } from "@/markdown/utils/config";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import type { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import Link from "@/components/link";

const components: MDXComponents = {
  Preview: ({ children, codeblock }) => (
    <div data-with-codeblock={codeblock} className="preview">
      {children}
    </div>
  ),
};

export function MDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return <MDXRemote {...props} components={components} options={mdxOptions} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children, href }) => {
      return (
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-muted"
          underline
        >
          {children} <ExternalLinkIcon />
        </Link>
      );
    },
    ...components,
  };
}
