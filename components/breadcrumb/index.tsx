"use client";

import { cn } from "@/lib/cn";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import React from "react";

export const Breadcrumb = () => {
  const pathname = usePathname();

  const paths = pathname
    .split("/")
    .filter((path) => path !== "")
    .map((path) => path.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()));

  return (
    <div className={cn("mt-0 mb-4 flex w-full items-center gap-1 align-middle font-normal text-small")}>
      <Link className="text-muted" href="/">
        Home
      </Link>
      <ChevronRightIcon className="text-muted" />
      {paths.map((path, index) => {
        const href = `/${paths
          .slice(0, index + 1)
          .join("/")
          .toLowerCase()}`;

        const isLast = index === paths.length - 1;

        return (
          <React.Fragment key={path}>
            {isLast ? (
              <span className="text-muted">{path}</span>
            ) : (
              <Link className="text-muted" href={href}>
                {path}
              </Link>
            )}
            {index < paths.length - 1 && <ChevronRightIcon className="text-muted" />}
          </React.Fragment>
        );
      })}
    </div>
  );
};
