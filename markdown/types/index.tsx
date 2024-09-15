export enum Paths {
  Blog = "app/blog/posts",
  Docs = "app/docs/pages",
}

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  slug: string;
  content: string;
  tags?: string[];
  categories?: string[];
  author?: string;
  readingTime?: string;
  seoTitle?: string;
  seoDescription?: string;
};
