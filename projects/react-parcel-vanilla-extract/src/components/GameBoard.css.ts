import { style } from "@vanilla-extract/css";

export const gameBoard = style({
  aspectRatio: "1 / 1",
  display: "grid",
  gap: "16px",
  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
  gridTemplateRows: "repeat(auto-fit, minmax(100px, 1fr))",
  width: "100%",
  padding: "16px",
});
