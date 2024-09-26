import * as Theme from "@/components/theme";

import { ViewTransitions } from "next-view-transitions";

export function Root({ children }: Readonly<{ children: React.ReactNode }>) {
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
