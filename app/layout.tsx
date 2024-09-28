import "@/styles/main.css";

import type { Metadata } from "next";

import * as Theme from "@/components/theme";
import { OpenGraph } from "@/lib/og";

import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  ...OpenGraph,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ViewTransitions>
          <Theme.Provider>
            <main className="mx-auto max-w-screen-md overflow-x-hidden px-6 py-24 md:overflow-x-visible ">
              <article className="article">{children}</article>
            </main>
          </Theme.Provider>
        </ViewTransitions>
      </body>
    </html>
  );
}
