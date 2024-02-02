import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const button = style({
  all: "unset",
  backgroundColor: "black",
  color: "white",
  padding: "8px 12px",
  fontSize: vars.text.sm,
  fontWeight: vars.text.bold,
  borderRadius: "2px",
});
