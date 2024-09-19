import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "@/markdown/types";
import matter from "gray-matter";

function readFile(filePath: string): Metadata | null {
  try {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(rawContent);

    const slug = path.basename(filePath, path.extname(filePath));

    return {
      ...data,
      slug,
      content,
    } as Metadata;
  } catch (error) {
    console.error(`Failed to read or parse the file at ${filePath}:`, error);
    return null;
  }
}

function getFiles(dir: string): string[] {
  try {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
  } catch (error) {
    console.error(`Failed to read directory at ${dir}:`, error);
    return [];
  }
}

export function getData(directory: string): Metadata[] {
  const mdxFiles = getFiles(directory);
  return mdxFiles.map((file) => readFile(path.join(directory, file))).filter((metadata): metadata is Metadata => metadata !== null);
}
