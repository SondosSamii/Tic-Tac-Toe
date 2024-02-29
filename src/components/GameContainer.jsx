import { useState } from "react";
import { GameBoard } from "./GameBoard";
import { Players } from "./Players";

export function GameContainer({ onPlay }) {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
    onPlay((prevLog) => [{ player: activePlayer, row: rowIndex, col: colIndex }, ...prevLog]);
  }

  return (
    <div id="game-container">
      <Players activePlayer={activePlayer} />
      <GameBoard onSelectSquare={handleSelectSquare} activeSymbol={activePlayer} />
    </div>
  );
}
