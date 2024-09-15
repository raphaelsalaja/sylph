import { BlogPosts } from "@/components/blog-posts";
import Home from "@/markdown/pages/home.mdx";
import React from "react";

export default function Page() {
  return (
    <React.Fragment>
      <Home />
      <BlogPosts />
    </React.Fragment>
  );
}
