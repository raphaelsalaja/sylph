import { Paths } from "@/markdown/types";
import { getData } from "@/markdown/utils/mdx";
import Link from "next/link";

export function Posts() {
  const allBlogs = getData(Paths.Blog);

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.time.published) > new Date(b.time.published)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="mb-4 flex flex-col space-y-1"
            href={`/blog/${post.slug}`}
          >
            <div className="flex w-full flex-col space-x-0 md:flex-row md:space-x-2">
              <p className="w-[100px] text-neutral-600 tabular-nums dark:text-neutral-400">
                {post.time.published}
              </p>
              <p className="text-neutral-900 tracking-tight dark:text-neutral-100">
                {post.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
