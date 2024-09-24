"use client";

import { cn } from "@/lib/cn";

import { useCallback, useEffect, useState } from "react";

import "@/components/on-this-page/styles.css";

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
    <nav className="fixed top-[6rem] right-[6rem] mt-0 hidden h-full w-64 justify-start space-y-4 transition lg:block">
      <div className="mt-0 flex flex-col gap-0">
        {headings.map((heading) => (
          <div key={heading.id} className="mt-0 ">
            <button
              type="button"
              onClick={() => scroll(heading.id)}
              className={cn({
                "mt-0 border-l border-l-gray-4 py-2 pl-4 text-left text-muted text-muted opacity-100 transition ease-in-out hover:opacity-50": true,
                "text-bold text-gray-12": activeHeading === heading.id,
                "ml-2": heading.level === "h2",
                "ml-4": heading.level === "h3",
                "border-l border-l-gray-12 ": activeHeading === heading.id,
              })}
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
