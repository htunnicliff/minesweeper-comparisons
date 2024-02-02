import {
  assignVars,
  createGlobalTheme,
  globalStyle,
} from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  space: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    6: "24px",
    8: "32px",
    12: "48px",
    16: "64px",
  },
  font: {
    body: "Recursive, monospace",
  },
  text: {
    // Sizes
    xs: "12px",
    sm: "14px",
    md: "18px",
    lg: "24px",
    // Weights
    normal: "normal",
    bold: "bold",
  },
  color: {
    gray: "#D8D8D8",
    text: {
      primary: "#000",
      neutral: "#808080",
      white: "#fff",
    },
    danger: {
      200: "#FFF0ED",
      300: "#FFD2C9",
      400: "#FFAE9E",
      500: "#FF7A60",
    },
    gradient: {
      danger: "linear-gradient(133deg, #FFD2C9 0%, #FF7A60 100%)",
    },
  },
  border: {
    default: "1px solid #D8D8D8",
  },
});

globalStyle("html, body", {
  fontFamily: vars.font.body,
  fontWeight: "normal",
  color: vars.color.text.primary,
});
