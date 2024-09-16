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

  const formatter = new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return (
    <div className="mt-6 flex flex-col">
      <h1 className="pb-2">
        Thoughts {posts.length > 0 && `(${posts.length})`}
      </h1>
      {posts.map((post, index) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <div
            className={clsx({
              " flex w-full justify-between py-2 transition-all": true,
              "border-b border-b-gray-4": index !== posts.length - 1,
              "border-t border-t-gray-4": index === 0,
            })}
          >
            <p>{post.title}</p>
            <p className="text-gray-8">
              {formatter.format(new Date(post.time.created))}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
