import { Paths } from "@/markdown/types";
import { getData } from "@/markdown/utils/mdx";

import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import React from "react";

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
    <React.Fragment>
      <h1>{post.title}</h1>
      <h2>{post.time.created}</h2>
      <MDXRemote source={post.content} />
    </React.Fragment>
  );
}
