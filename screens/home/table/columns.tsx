"use client";

import type { ColumnDef } from "@tanstack/react-table";

type Post = {
  id: string;
  slug: string;
  title: string;
  time: {
    created: string;
  };
};

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "time.created",
    header: "Date",
  },
  {
    accessorKey: "slug",
  },
];
