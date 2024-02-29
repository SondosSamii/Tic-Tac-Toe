import { GameBoard } from "./GameBoard";
import { Players } from "./Players";

export function GameContainer({ activePlayer, board, gameTurns, onSelectSquare }) {
  return (
    <div id="game-container">
      <Players activePlayer={activePlayer} />
      <GameBoard board={board} gameTurns={gameTurns} onSelectSquare={onSelectSquare} />
    </div>
  );
}
