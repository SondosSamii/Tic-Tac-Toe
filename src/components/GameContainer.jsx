import PropTypes from "prop-types";
import { GameBoard } from "./GameBoard";
import { GameOver } from "./GameOver";
import { Players } from "./Players";

GameContainer.propTypes = {
  activePlayer: PropTypes.string.isRequired,
  board: PropTypes.array.isRequired,
  turns: PropTypes.array.isRequired,
  onPlay: PropTypes.func.isRequired,
  winner: PropTypes.string,
  hasDraw: PropTypes.bool,
  onRematch: PropTypes.func.isRequired,
};

export function GameContainer({ activePlayer, board, turns, onPlay, winner, hasDraw, onRematch }) {
  return (
    <div id="game-container">
      <Players activePlayer={winner ?? activePlayer} />
      {(winner || hasDraw) && <GameOver winner={winner} onRematch={onRematch} />}
      <GameBoard board={board} turns={turns} onPlay={onPlay} winner={winner} />
    </div>
  );
}
