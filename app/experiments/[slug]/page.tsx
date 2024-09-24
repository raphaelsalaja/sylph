import { Footer } from "@/components/footer";
import { TableOfContents } from "@/components/table-of-contents";
import { getData } from "@/markdown/utils/mdx";
import { MDX } from "@/mdx-components";

import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  const posts = getData("app/experiments/posts");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const posts = getData("app/experiments/posts");
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const formatter = new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return (
    <React.Fragment>
      <h1>{post.title}</h1>
      <h2>{formatter.format(new Date(post.time.created))}</h2>
      <MDX source={post.content} />
      <Footer posts={posts} />
      <TableOfContents />
    </React.Fragment>
  );
}
