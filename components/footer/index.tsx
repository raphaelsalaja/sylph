"use client";

import type { Metadata } from "@/markdown/types/index";
import { usePathname } from "next/navigation";

interface FooterProps {
  posts: Array<Metadata>;
}

function Footer({ posts }: FooterProps) {
  posts.sort((a, b) => {
    return new Date(b.time.created).getTime() - new Date(a.time.created).getTime();
  });

  const currentSlug = usePathname().split("/").pop();
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug);
  const previous = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const next = currentIndex > 0 ? posts[currentIndex - 1] : null;

  if (!previous && !next) {
    return null;
  }

  return (
    <div className="flex justify-between pt-8 mt-16 w-full border-t border-gray-4">
      {previous && (
        <a href={`${previous.slug}`} className="text-left flex flex-col gap-1">
          <span className="text-gray-8">Previous</span>
          <span>{previous.title}</span>
        </a>
      )}
      {next && (
        <a href={`${next.slug}`} className="text-right flex flex-col gap-1">
          <span className="text-gray-8">Next</span>
          <span>{next.title}</span>
        </a>
      )}
    </div>
  );
}

export { Footer };
