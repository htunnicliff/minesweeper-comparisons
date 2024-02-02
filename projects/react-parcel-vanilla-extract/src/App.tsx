import "./theme.css";
import "./reset.css";

import { GameBoard } from "./components/GameBoard";
import { Header } from "./components/Header";
import { app } from "./App.css";

export function App() {
  return (
    <div className={app}>
      <Header />
      <main>
        <GameBoard />
      </main>
    </div>
  );
}
