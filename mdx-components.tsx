import { mdxOptions } from "@/markdown/utils/config";
import type { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";

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
    ...components,
  };
}
