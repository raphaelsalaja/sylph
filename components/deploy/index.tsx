"use client";

import { DeployLink } from "@/lib/deploy";

import { motion } from "framer-motion";
import Link from "next/link";

export const DeployButton = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        bottom: -32,
        filter: "blur(8px)",
      }}
      animate={{
        opacity: 1,
        bottom: 24,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        bottom: -32,
        filter: "blur(8px)",
      }}
      transition={{
        ease: [0.19, 1, 0.22, 1],
        duration: 0.4,
        delay: 1,
      }}
      className="-translate-x-1/2 fixed left-1/2 transform text-small"
    >
      <Link href={DeployLink}>
        <motion.div
          whileHover={{
            scale: 0.98,
            opacity: 0.8,
            filter: "blur(0.3px)",
          }}
          transition={{
            ease: [0.19, 1, 0.22, 1],
            duration: 0.4,
          }}
          className="flex cursor-pointer items-center gap-2 rounded-md border border-border bg-gray-2 px-2 py-1"
        >
          <svg strokeLinejoin="round" viewBox="0 0 16 16" width="10" height="10">
            <title>Deploy Icon</title>
            <path fillRule="evenodd" clipRule="evenodd" d="M8 1L16 15H0L8 1Z" fill="currentColor" />
          </svg>
          Deploy With Vercel
        </motion.div>
      </Link>
    </motion.div>
  );
};
