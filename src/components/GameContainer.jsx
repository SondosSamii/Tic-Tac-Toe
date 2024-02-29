import { GameBoard } from "./GameBoard";
import { Players } from "./Players";

export function GameContainer({ activePlayer, board, turns, onPlay }) {
  return (
    <div id="game-container">
      <Players activePlayer={activePlayer} />
      <GameBoard board={board} turns={turns} onPlay={onPlay} />
    </div>
  );
}
