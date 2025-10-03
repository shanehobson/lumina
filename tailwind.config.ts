import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'desktop': '900px',
        'lg-container': '1000px',
      },
      colors: {
        lumina: {
          cream: "#FDF5E6",
          coral: "#FF6B6B",
          dark: "#1A1A1A",
          gray: "#4A4A4A",
          lightGray: "#E5E5E5",
        },
      },
      fontFamily: {
        gelasio: ["Gelasio", "Georgia", "serif"],
        readex: ["Readex Pro", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      fontSize: {
        'display': ['48px', { lineHeight: '1.1' }],
        'heading': ['24px', { lineHeight: '1.3' }],
        'body': ['14px', { lineHeight: '1.6' }],
        'small': ['12px', { lineHeight: '1.5' }],
      },
      letterSpacing: {
        'display': '-0.02em',
        'heading': '-0.01em',
        'wide': '0.08em',
        'wider': '0.15em',
      },
    },
  },
  plugins: [],
};

export default config;