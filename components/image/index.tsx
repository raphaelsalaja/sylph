"use client";

import { gray } from "@radix-ui/colors";
import { motion } from "framer-motion";
import Image from "next/image";
import type { ImageProps } from "next/image";
import React from "react";

export default function CustomImage({ caption, ...props }: ImageProps & { caption?: string }) {
  const [isImageLoading, setImageLoading] = React.useState(true);
  const { alt, ...remaining } = props;

  return (
    <motion.div
      className="my-6 flex cursor-pointer flex-col justify-end gap-2"
      onClick={() => window.open(props.src.toString(), "_blank")}
      whileHover={{
        scale: 0.975,
        opacity: 0.9,
      }}
    >
      <div
        className="overflow-hidden rounded border"
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
          maxHeight: "480px",
          backgroundColor: gray.gray4,
        }}
      >
        <Image
          unoptimized
          alt={alt}
          width={1000}
          height={1000}
          sizes="100vw"
          style={{
            objectFit: "contain",
            width: "100%",
            height: "auto",
            objectPosition: "center",
            WebkitFilter: isImageLoading ? "blur(8px)" : "none",
            transition: "all 0.5s ease",
          }}
          onLoad={() => setImageLoading(false)}
          {...remaining}
        />
      </div>
      {caption && <sub className="pt-2 text-center">{caption}</sub>}
    </motion.div>
  );
}
