import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1921px",
      },
      container: {
        center: true,
        padding: "16px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1172px",
        },
      },
      lineHeight: {
        "custom-xl": "19.2px",
        "custom-2xl": "23.41px",
        "custom-3xl": "27.2px",
        "custom-4xl": "27.44px",
        "custom-5xl": "28.8px",
        "custom-6xl": "30px",
        "custom-7xl": "41.16px",
        "custom-8xl": "43.2px",
        "custom-9xl": "54px",
        "custom-10xl": "57.6px",
        "custom-11xl": "67.2px",
        "custom-12xl": "115.2px",
      },
      colors: {
        "purple": "#c641c6",
        "blue": "#4e6cff",
        "deep-blue": "#952ffe",
        "orange": "#ff676b",
        "light-black":"#0A0A2B80",
      },
       backgroundImage: {
         "hero-bg": "url('/assets/images/webp/hero-bg.webp')",
         "hero-tab-bg": "url('/assets/images/webp/tab-hero-bg.webp')",
         "hero-mobile-bg": "url('/assets/images/webp/mobile-hero.webp')",
      },
    },
  },
  plugins: [],
} satisfies Config;
