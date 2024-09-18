import { AppRoutes } from "@/markdown/types";
import { getData } from "@/markdown/utils/mdx";
import { MDX } from "@/mdx-components";

import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  const posts = getData(AppRoutes.Experiments);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface ExperimentsParams {
  params: {
    slug: string;
  };
}

export default function Experiments({ params }: ExperimentsParams) {
  const post = getData(AppRoutes.Experiments).find(
    (post) => post.slug === params.slug
  );

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
    </React.Fragment>
  );
}
