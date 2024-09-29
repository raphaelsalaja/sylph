import type { Post } from "@/types";

import { PostNavigation } from "@/components/post-navigation";
import { TableOfContents } from "@/components/on-this-page";
import { getPosts } from "@/lib/mdx";
import { MDX } from "@/mdx-components";

import React from "react";

interface Props {
  post: Post;
  route: string;
}

export const Layout = ({ post, route }: Props) => {
  const posts = getPosts(route);

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
      <PostNavigation posts={posts} />
      <TableOfContents />
    </React.Fragment>
  );
};
