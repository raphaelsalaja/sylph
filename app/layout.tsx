import "@/styles/main.css";

import type { Metadata } from "next";

import { Root } from "@/components/root";

import { OpenGraphMetadata } from "./open-graph-metadata";

export const metadata: Metadata = {
  ...OpenGraphMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Root>{children}</Root>;
}
