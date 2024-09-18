import type { Metadata } from "next";

import * as Theme from "@/components/theme";
import { ViewTransitions } from "next-view-transitions";

import "@/styles/main.css";
import { OpenGraphMetadata } from "./metadata";

export const metadata: Metadata = {
  ...OpenGraphMetadata,
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
            <main className="mx-auto max-w-[692px] overflow-x-hidden px-6 py-12 antialiased sm:py-32 md:overflow-x-visible md:py-16">
              <article className="article">{children}</article>
            </main>
          </Theme.Provider>
        </ViewTransitions>
      </body>
    </html>
  );
}
