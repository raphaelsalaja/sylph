import { Footer } from "@/components/footer";
import { TableOfContents } from "@/components/on-this-page";
import { Return } from "@/components/return";
import { getData } from "@/markdown/utils/mdx";
import { MDX } from "@/mdx-components";

import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  const posts = getData("app/guides/posts");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const posts = getData("app/guides/posts");
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
      <Return />
      <TableOfContents />
    </React.Fragment>
  );
}
