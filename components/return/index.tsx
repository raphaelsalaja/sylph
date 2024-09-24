"use client";

import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Link } from "next-view-transitions";

import "@/components/return/styles.css";

export const Return = () => {
  return (
    <div className="fixed top-[6rem] left-[6rem] mt-0">
      <Link href="/" className="flex items-center gap-1 hover:opacity-50">
        <ChevronLeftIcon />
        Home
      </Link>
    </div>
  );
};
