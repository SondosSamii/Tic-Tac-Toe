import { useState } from "react";
import { GameContainer } from "./components/GameContainer";
import Log from "./components/Log";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getActivePlayer(turns) {
  return turns[0]?.player === "X" ? "O" : "X";
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const gameBoard = initialBoard;

  for (const turn of gameTurns) {
    const { player, square } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => [
      { player: getActivePlayer(prevTurns), square: { row: rowIndex, col: colIndex } },
      ...prevTurns,
    ]);
  }

  return (
    <main>
      <GameContainer
        activePlayer={getActivePlayer(gameTurns)}
        board={gameBoard}
        turns={gameTurns}
        onPlay={handleSelectSquare}
      />
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
