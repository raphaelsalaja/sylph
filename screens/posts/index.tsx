import type { Post } from "@/types";

import Link from "@/components/link";
import { TableOfContents } from "@/components/on-this-page";
import { PostNavigation } from "@/components/post-navigation";
import { getPosts } from "@/lib/mdx";
import { MDX } from "@/mdx-components";

import React from "react";
import { readingTime } from "reading-time-estimator";

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
      <p>{readingTime(post.content).text}</p>
      <p>
        By{" "}
        <Link underline href={post.author?.link}>
          {post.author?.name}
        </Link>
      </p>

      <MDX source={post.content} />
      <PostNavigation posts={posts} />
      <TableOfContents />
    </React.Fragment>
  );
};
