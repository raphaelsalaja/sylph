"use client";

import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { ThemeProvider, useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const Switch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const Theme = ({ theme }: { theme: string }) => {
    switch (theme) {
      case "system":
        return (
          <React.Fragment>
            System <DesktopIcon width={12} />
          </React.Fragment>
        );
      case "dark":
        return (
          <React.Fragment>
            Dark <MoonIcon width={12} />
          </React.Fragment>
        );
      case "light":
        return (
          <React.Fragment>
            Light <SunIcon width={12} />
          </React.Fragment>
        );
      default:
        return "Unknown";
    }
  };

  return (
    <button
      type="button"
      className="flex items-center gap-1 bg-hover"
      onClick={() => setTheme(theme === "system" ? "dark" : theme === "dark" ? "light" : "system")}
    >
      <Theme theme={theme || "system"} />
    </button>
  );
};

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class" storageKey="theme" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

export { Switch, Provider };
