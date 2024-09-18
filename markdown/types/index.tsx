export type Metadata = {
  title: string;
  slug: string;
  content: string;

  tags?: string[];
  author?: string;
  summary?: string;

  time: {
    created: string;
    updated: string;
  };

  media?: {
    image?: string;
    video?: string;
    audio?: string;
  };

  categorization?: {
    readingTime?: string;
  };

  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };

  audience?: {
    likes?: number;
    views?: number;
    comments?: number;
  };

  related?: {
    media?: string[];
    links?: string[];
    articles?: string[];
  };

  social?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
    pinterest?: string;
    others?: string[];
  };

  status?: "draft" | "published" | "archived";
};
