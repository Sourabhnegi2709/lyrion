/** @type {import('tailwindcss').Config} */
const palette = {
  charcoal: "#36454f",
  softGray: "#dfe6e9",
  white: "#ffffff",
  gold: "#d4af37",
};

const neutralShades = {
  50: palette.white,
  100: palette.softGray,
  150: palette.softGray,
  200: palette.softGray,
  300: palette.softGray,
  400: palette.softGray,
  500: palette.softGray,
  600: palette.charcoal,
  700: palette.charcoal,
  800: palette.charcoal,
  900: palette.charcoal,
  950: palette.charcoal,
};

const accentShades = {
  50: palette.softGray,
  100: palette.softGray,
  200: palette.softGray,
  300: palette.gold,
  400: palette.gold,
  500: palette.gold,
  600: palette.gold,
  700: palette.gold,
  800: palette.gold,
  900: palette.gold,
  950: palette.gold,
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: palette.charcoal,
        "soft-gray": palette.softGray,
        white: palette.white,
        gold: palette.gold,
        black: palette.charcoal,
        gray: neutralShades,
        slate: neutralShades,
        zinc: neutralShades,
        neutral: neutralShades,
        stone: neutralShades,
        red: accentShades,
        orange: accentShades,
        amber: accentShades,
        yellow: accentShades,
        lime: accentShades,
        green: accentShades,
        emerald: accentShades,
        teal: accentShades,
        cyan: accentShades,
        sky: accentShades,
        blue: accentShades,
        indigo: accentShades,
        violet: accentShades,
        purple: accentShades,
        fuchsia: accentShades,
        pink: accentShades,
        rose: accentShades,
      },
    },
  },
  plugins: [],
};