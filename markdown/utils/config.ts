import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import type { PluggableList } from "unified";

export const mdxOptions = {
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
