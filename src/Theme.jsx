import { extendTheme } from "@chakra-ui/react";

const colors = {
  custom: {
    50: "#1A3E73",
    100: "#0B4E84",
    200: "#006C99",
    300: "#0097C7",
    400: "#00B9E5",
  },
};

const fonts = {
  heading: "'Satoshi', serif",
  body: "'Satoshi', sans-serif",
};
const fontSizes = {
  customLarge: "3.0rem",
  customMedium: "2.3rem",
  customSmall: "1.25rem",
  customSmallest: "1rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.30rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

const Theme = extendTheme({ colors, fonts, fontWeights, fontSizes });

export default Theme;
