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
      <div className="mt-2 mb-8 flex items-center justify-between text-sm">
        <p className="text-neutral-600 text-sm dark:text-neutral-400">
          {post.time.published}
        </p>
      </div>

      <MDXRemote source={post.content} />
    </article>
  );
}
