import { FlagCount } from "./Header/FlagCount";
import { header } from "./Header.css";
import { NewGameButton } from "./Header/NewGameButton";
import { Timer } from "./Header/Timer";

export function Header() {
  return (
    <header className={header}>
      <h1 style={{ flexGrow: 1 }}>Minesweeper</h1>
      <Timer />
      <FlagCount />
      <NewGameButton />
    </header>
  );
}
