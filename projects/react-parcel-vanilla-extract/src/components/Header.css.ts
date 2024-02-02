import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const header = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "80px",
  gap: vars.space[6],
  padding: `0 ${vars.space[6]}`,
  borderBottom: vars.border.default,
});
