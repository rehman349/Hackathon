import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myPink : " rgba(249, 133, 133, 1)",
        myBlack : " rgba(33, 36, 61, 1)",
        recentBackground : "rgba(244, 226, 226, 1)",
        background:" rgba(195, 192, 192, 1)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
