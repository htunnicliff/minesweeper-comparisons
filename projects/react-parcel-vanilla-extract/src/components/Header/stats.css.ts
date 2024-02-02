import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const stats = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const label = style({
  fontSize: vars.text.sm,
  fontWeight: vars.text.bold,
  color: vars.color.text.neutral,
});

export const output = style({
  fontSize: vars.text.lg,
});
