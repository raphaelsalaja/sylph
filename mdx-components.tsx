import { typography } from "@/markdown/components/typography";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import type { PluggableList } from "unified";

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            light: "vitesse-light",
            dark: "vitesse-dark",
          },
          keepBackground: false,
          defaultLang: "tsx",
          filterMetaString: (string: string) =>
            string.replace(/filename="[^"]*"/, ""),
        },
      ],
    ] as PluggableList,
  },
};

const components: MDXComponents = {
  Preview: ({ children, codeblock }) => (
    <div data-with-codeblock={codeblock} className="preview">
      {children}
    </div>
  ),
  ...typography,
};

export function MDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return <MDXRemote {...props} components={components} options={options} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...typography,
    ...components,
  };
}
