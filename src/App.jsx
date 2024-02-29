import { useState } from "react";
import { GameContainer } from "./components/GameContainer";
import Log from "./components/Log";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  const board = initialBoard;

  function handleSelectSquare(rowIndex, colIndex) {
    if (board[rowIndex][colIndex] === null) {
      setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
      setGameTurns([
        { player: activePlayer, square: { row: rowIndex, col: colIndex } },
        ...gameTurns,
      ]);
    }
  }

  return (
    <main>
      <GameContainer
        activePlayer={activePlayer}
        board={board}
        gameTurns={gameTurns}
        onSelectSquare={handleSelectSquare}
      />
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
