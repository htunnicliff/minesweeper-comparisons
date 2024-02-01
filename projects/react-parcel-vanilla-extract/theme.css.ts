import { createTheme } from "@vanilla-extract/css";

export const [themeStyle, vars] = createTheme({
  colors: {
    primary: "black",
    neutral: "grey",
  },
});
