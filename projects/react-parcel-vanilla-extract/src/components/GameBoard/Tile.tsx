import { tile } from "./Tile.css";

export function Tile({ children }) {
  return <div className={tile}>{children}</div>;
}
