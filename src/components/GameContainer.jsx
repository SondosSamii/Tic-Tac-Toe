import { useState } from "react";
import PropTypes from "prop-types";
import { GameBoard } from "./GameBoard";
import { GameOver } from "./GameOver";
import { Players } from "./Players";

GameContainer.propTypes = {
  activePlayer: PropTypes.string.isRequired,
  board: PropTypes.array.isRequired,
  turns: PropTypes.array.isRequired,
  onPlay: PropTypes.func.isRequired,
  winnerSymbol: PropTypes.string,
  hasDraw: PropTypes.bool,
  onRematch: PropTypes.func.isRequired,
};

export function GameContainer({ activePlayer, board, turns, onPlay, winnerSymbol, hasDraw, onRematch }) {
  const [players, setPlayers] = useState({
    X: "John",
    O: "Doe",
  });

  function handlePlayerName(symbol, newName) {
    setPlayers({ ...players, [symbol]: newName });
  }

  return (
    <div id="game-container">
      <Players
        activePlayer={winnerSymbol ?? activePlayer}
        players={players}
        onChangePlayerName={handlePlayerName}
      />
      {(winnerSymbol || hasDraw) && <GameOver winner={players[winnerSymbol]} onRematch={onRematch} />}
      <GameBoard board={board} turns={turns} onPlay={onPlay} winnerSymbol={winnerSymbol} />
    </div>
  );
}
