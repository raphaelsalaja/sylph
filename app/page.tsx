import { BlogPosts } from "@/components/blog-posts";
import Home from "@/markdown/pages/home.mdx";

export default function Page() {
  return (
    <article className="article">
      <Home />
      <BlogPosts />
    </article>
  );
}
