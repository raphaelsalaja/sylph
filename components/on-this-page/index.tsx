"use client";

import { cn } from "@/lib/cn";

import { useEffect, useState } from "react";

interface HeadingData {
  id: string;
  text: string;
  level: number;
}

export const TableOfContents = () => {
  const [activeId, setActiveId] = useState<string>("");
  const [headings, setHeadings] = useState<HeadingData[]>([]);
  const [pageTitle, setPageTitle] = useState<string>("");
  const [showTOC, setShowTOC] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const firstH1 = document.querySelector("h1");
      if (!firstH1) return;

      const rect = firstH1.getBoundingClientRect();
      setShowTOC(rect.bottom < 0 || isHovering);
    };
    window.addEventListener("scroll", handleScroll);

    const elements = Array.from(document.querySelectorAll("h1, h2, h3"));
    const firstH1 = elements[0];
    setPageTitle(firstH1?.textContent ?? "");
    const headingData = elements.slice(1).map((heading) => ({
      id: heading.id,
      text: heading.textContent ?? "",
      level: Number.parseInt(heading.tagName[1]),
    }));
    setHeadings(headingData);

    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntries = entries.filter((entry) => entry.isIntersecting);

        if (intersectingEntries.length > 0) {
          const viewportHeight = window.innerHeight;
          const targetPosition = viewportHeight / 3;

          const closest = intersectingEntries.reduce((prev, current) => {
            const rect = current.target.getBoundingClientRect();
            const distance = Math.abs(rect.top - targetPosition);

            const prevRect = prev.target.getBoundingClientRect();
            const prevDistance = Math.abs(prevRect.top - targetPosition);

            return distance < prevDistance ? current : prev;
          });

          setActiveId(closest.target.id);
        }
      },
      {
        rootMargin: "-100px 0px -70% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1.0],
      },
    );

    for (const elem of elements) {
      observer.observe(elem);
    }
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHovering]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      element.setAttribute("data-highlight", "true");
      setTimeout(() => element.removeAttribute("data-highlight"), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (headings.length === 0) return null;

  return (
    <nav
      className={cn(
        "fixed top-40 left-8 hidden max-h-[calc(100vh-10rem)] w-48 overflow-y-auto lg:block",
        "transition-opacity duration-200",
        showTOC || isHovering ? "opacity-100" : "opacity-0",
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="space-y-1 text-sm">
        <div className="mb-2 font-medium text-gray-12">{pageTitle}</div>
        {headings.map((heading) => (
          <button
            type="button"
            key={heading.id}
            onClick={() => handleClick(heading.id)}
            className={cn(
              "block w-full text-left transition-colors hover:text-gray-12",
              "py-1 text-gray-11",
              heading.level === 1 && "pl-0",
              heading.level === 2 && "pl-3",
              heading.level === 3 && "pl-6",
              activeId === heading.id &&
                cn(
                  "border-gray-12 border-l-2 font-medium text-gray-12",
                  heading.level === 1 && "pl-2",
                  heading.level === 2 && "pl-5",
                  heading.level === 3 && "pl-8",
                ),
            )}
          >
            {heading.text}
          </button>
        ))}
      </div>

      {showTOC && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 text-gray-9 text-sm transition-colors hover:text-gray-12"
        >
          ↑ Back to top
        </button>
      )}
    </nav>
  );
};
