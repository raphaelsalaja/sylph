import { Paths } from "@/markdown/types";
import { getData } from "@/markdown/utils/mdx";
import clsx from "clsx";
import Link from "next/link";

export function Posts() {
  const posts = getData(Paths.Blog).sort((a, b) => {
    if (new Date(a.time.created) > new Date(b.time.created)) {
      return -1;
    }
    return 1;
  });

  return (
    <div className="mt-8 flex flex-col">
      {posts.map((post, index) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <div
            className={clsx({
              "mb-2 flex w-full gap-4 pb-2": true,
              "border-b border-b-gray-4": index !== posts.length - 1,
            })}
          >
            <p>{post.time.created}</p>
            <p>{post.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
