import { gameBoard } from "./GameBoard.css";
import { Tile } from "./GameBoard/Tile";

export function GameBoard() {
  return (
    <div className={gameBoard}>
      {[...Array(100)].map((_, index) => (
        <Tile key={index}>{index + 1}</Tile>
      ))}
    </div>
  );
}
