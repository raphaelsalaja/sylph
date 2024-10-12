"use client";

import type React from "react";

import { cn } from "@/lib/cn";

import { Monitor, Moon, Sun } from "lucide-react";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Switch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const buttons = [
    { label: "dark", icon: <Moon width={13} />, active: theme === "dark" },
    { label: "light", icon: <Sun width={13} />, active: theme === "light" },
  ];

  const common = "flex items-center justify-center w-6 h-6 rounded transition-all hover:opacity-50";

  return (
    <div className="flex gap-2">
      <span className="flex w-fit items-center overflow-hidden rounded-md border border-border bg-gray-2">
        <button type="button" onClick={() => setTheme("system")} className={cn(common, theme === "system" ? "bg-gray-4 text-foreground" : "")}>
          <Monitor width={13} />
        </button>
      </span>

      <span className="flex w-fit items-center gap-0.5 overflow-hidden rounded-md border border-border bg-gray-2">
        {buttons.map(({ label, icon, active }) => (
          <button type="button" key={label} onClick={() => setTheme(label)} className={cn(common, active ? "bg-gray-4 text-foreground" : "")}>
            {icon}
          </button>
        ))}
      </span>
    </div>
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
