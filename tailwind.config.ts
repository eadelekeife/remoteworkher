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
        jost: "Jost"
      },
      fontWeight: {
        600: "600"
      },
      gridTemplateColumns: {
        "1/1.5": "1fr 1.5fr",
        "1/3": "1fr 2fr",
        "2/1": "2fr 1fr",
        "3/1": "3fr 1fr",
        "1/2": "1fr 2.5fr",
        "1.5/1": "1.5fr 1fr",
        autoFit: "repeat(auto-fit, minmax(150px, 1fr))"
      }
    },
    screens: {
      sm: '790px',
      md: '792px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
} satisfies Config;
