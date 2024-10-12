"use client";

import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ThemeProvider, useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";

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
            System <DesktopIcon width={14} />
          </React.Fragment>
        );
      case "dark":
        return (
          <React.Fragment>
            Dark <MoonIcon width={14} />
          </React.Fragment>
        );
      case "light":
        return (
          <React.Fragment>
            Light <SunIcon width={14} />
          </React.Fragment>
        );
      default:
        return "Unknown";
    }
  };

  return (
    <motion.div>
      <motion.button
        key={theme}
        type="button"
        className={styles.switch}
        onClick={() =>
          setTheme(
            theme === "system" ? "dark" : theme === "dark" ? "light" : "system",
          )
        }
        layout="position"
        layoutId="theme-switch"
      >
        <Theme theme={theme || "system"} />
      </motion.button>
    </motion.div>
  );
};

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class"
      storageKey="theme"
      defaultTheme="system"
    >
      {children}
    </ThemeProvider>
  );
};

export { Switch, Provider };
