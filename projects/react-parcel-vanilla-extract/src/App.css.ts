import { style } from "@vanilla-extract/css";

export const app = style({
  display: "grid",
  height: "100vh",
  gridTemplateRows: "80px 1fr",
  gridAutoFlow: "row",
});
