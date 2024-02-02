import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const tile = style({
  aspectRatio: "1 / 1",
  fontWeight: vars.text.bold,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "150%",
  backgroundColor: vars.color.gray,
  borderRadius: "4px",
});
