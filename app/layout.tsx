import "@/styles/main.css";

import type { Metadata } from "next";

import * as Theme from "@/components/theme";
import { OpenGraph } from "@/lib/og";

import clsx from "clsx";
import { ViewTransitions } from "next-view-transitions";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  ...OpenGraph,
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(inter.className)} suppressHydrationWarning>
      <body>
        <ViewTransitions>
          <Theme.Provider>
            <main className="mx-auto max-w-screen-sm overflow-x-hidden px-6 py-24 md:overflow-x-visible ">
              <article className="article">{children}</article>
            </main>
          </Theme.Provider>
        </ViewTransitions>
      </body>
    </html>
  );
}
