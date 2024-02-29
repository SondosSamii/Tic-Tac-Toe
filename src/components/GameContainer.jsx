import { GameBoard } from "./GameBoard";
import { GameOver } from "./GameOver";
import { Players } from "./Players";

export function GameContainer({ activePlayer, board, turns, onPlay, winner }) {
  return (
    <div id="game-container">
      <Players activePlayer={winner ? null : activePlayer} />
      {winner && <GameOver winner={winner} />}
      <GameBoard board={board} turns={turns} onPlay={onPlay} winner={winner} />
    </div>
  );
}
