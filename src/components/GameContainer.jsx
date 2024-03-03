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
};

export function GameContainer({ activePlayer, board, turns, onPlay, winner, hasDraw }) {
  return (
    <div id="game-container">
      <Players activePlayer={winner ?? activePlayer} />
      {(winner || hasDraw) && <GameOver winner={winner} />}
      <GameBoard board={board} turns={turns} onPlay={onPlay} winner={winner} />
    </div>
  );
}
