import { GameBoard } from "./GameBoard";
import { Players } from "./Players";

export function GameContainer({ activePlayer, board, turns, onPlay, winner }) {
  return (
    <div id="game-container">
      <Players activePlayer={activePlayer} />
      {winner && <p>You are the winner: {winner}!</p>}
      <GameBoard board={board} turns={turns} onPlay={onPlay} winner={winner} />
    </div>
  );
}
