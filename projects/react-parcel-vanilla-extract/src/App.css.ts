import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const appStyle = style({
  fontFamily: [
    "Bahnschrift",
    "DIN Alternate",
    "Franklin Gothic Medium",
    "Nimbus Sans Narrow",
    "sans-serif-condensed",
    "sans-serif",
  ],
  fontWeight: "normal",
  color: vars.colors.neutral,
});
