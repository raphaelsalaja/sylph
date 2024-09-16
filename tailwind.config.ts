import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./mdx-components.tsx"],
  theme: {
    extend: {
      colors: {
        gray: {
          1: "var(--gray-1)",
          2: "var(--gray-2)",
          3: "var(--gray-3)",
          4: "var(--gray-4)",
          5: "var(--gray-5)",
          6: "var(--gray-6)",
          7: "var(--gray-7)",
          8: "var(--gray-8)",
          9: "var(--gray-9)",
          10: "var(--gray-10)",
          11: "var(--gray-11)",
          12: "var(--gray-12)",
          a1: "var(--gray-a1)",
          a2: "var(--gray-a2)",
          a3: "var(--gray-a3)",
          a4: "var(--gray-a4)",
          a5: "var(--gray-a5)",
          a6: "var(--gray-a6)",
          a7: "var(--gray-a7)",
          a8: "var(--gray-a8)",
          a9: "var(--gray-a9)",
          a10: "var(--gray-a10)",
          a11: "var(--gray-a11)",
          a12: "var(--gray-a12)",
        },
        black: {
          a1: "var(--black-a1)",
          a2: "var(--black-a2)",
          a3: "var(--black-a3)",
          a4: "var(--black-a4)",
          a5: "var(--black-a5)",
          a6: "var(--black-a6)",
          a7: "var(--black-a7)",
          a8: "var(--black-a8)",
          a9: "var(--black-a9)",
          a10: "var(--black-a10)",
          a11: "var(--black-a11)",
          a12: "var(--black-a12)",
        },
      },
    },
  },
  darkMode: "class",
};

export default config;
