import * as Blog from "@/app/blog/components";
import Home from "@/markdown/pages/home.mdx";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <React.Fragment>
      <Home />
      <Link href="/blog">Blog</Link>
      <Blog.Posts />
    </React.Fragment>
  );
}
