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
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent-color)",
        bold: "var(--bold-color)",
        offwhite: "var(--offwhite)"
      },
      fontFamily: {
        jakarta: "Plus Jakarta Sans",
        dmsans: "DM Sans",
      },
      gridTemplateColumns: {
        "1/1.5": "1fr 1.5fr",
        "3/1": "3fr 1fr",
        "1/2": "1fr 2.5fr",
      }
    },
  },
  plugins: [],
} satisfies Config;
