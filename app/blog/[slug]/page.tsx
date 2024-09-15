import { Paths } from "@/markdown/types";
import { getData } from "@/markdown/utils/mdx";

import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getData(Paths.Blog);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogParams {
  params: {
    slug: string;
  };
}

export default function Blog({ params }: BlogParams) {
  const post = getData(Paths.Blog).find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="article">
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {post.publishedAt}
        </p>
      </div>

      <MDXRemote source={post.content} />
    </article>
  );
}
