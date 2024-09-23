"use client";

import { cn } from "@/lib/cn";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Link } from "next-view-transitions";
import { useCallback, useEffect, useState } from "react";

export const TableOfContents = () => {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: string }[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>("");

  const getHeadings = useCallback(() => {
    return Array.from(document.querySelectorAll("h1, h2, h3"))
      .filter((heading) => heading.id)
      .map((heading) => ({
        id: heading.id,
        text: heading.textContent || "",
        level: heading.tagName.toLowerCase(),
        top: (heading as HTMLElement).offsetTop,
      }));
  }, []);

  useEffect(() => {
    const collectedHeadings = getHeadings();
    setHeadings(collectedHeadings);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      const currentHeading = collectedHeadings.reduce((prev, current) => {
        return Math.abs(current.top - scrollPosition) < Math.abs(prev.top - scrollPosition) ? current : prev;
      });

      setActiveHeading(currentHeading.id);

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveHeading(collectedHeadings[collectedHeadings.length - 1].id);
        return;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getHeadings]);

  const scroll = (id: string) => {
    for (const heading of Array.from(document.querySelectorAll("h1, h2, h3"))) {
      heading.setAttribute("data-highlight", "false");
    }

    const element = document.getElementById(id);

    if (element) {
      if (id === headings[0].id) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (id === headings[headings.length - 1].id) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      } else {
        const top = element.offsetTop - 100;
        window.scrollTo({
          top: top,
          behavior: "smooth",
        });
      }

      element.setAttribute("data-highlight", "true");

      setTimeout(() => {
        element.setAttribute("data-highlight", "false");
      }, 2000);
    }
  };

  return (
    <nav className="fixed top-0 left-20 mt-0 hidden h-full w-64 gap-6 space-y-8 p-4 px-6 py-16 lg:block">
      <Link href="/" className="flex items-center gap-1 hover:opacity-50">
        <ChevronLeftIcon /> Home
      </Link>
      <div className="mt-0 flex flex-col gap-2">
        {headings.map((heading) => (
          <div key={heading.id} className="mt-0">
            <button
              type="button"
              onClick={() => scroll(heading.id)}
              className={cn("mt-0 text-gray-8 opacity-100 transition ease-in-out hover:opacity-50", activeHeading === heading.id && "text-bold text-gray-12")}
              data-active={activeHeading === heading.id ? "true" : "false"}
            >
              {heading.text}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
};
