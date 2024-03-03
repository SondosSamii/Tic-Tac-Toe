import { useState } from "react";
import { GameContainer } from "./components/GameContainer";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

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

  const activePlayer = getActivePlayer(gameTurns);

  for (const turn of gameTurns) {
    const { player, square } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      winner = firstSquare;
    }
  }

  const hasDraw = gameTurns.length >= 9;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => [
      { player: getActivePlayer(prevTurns), square: { row: rowIndex, col: colIndex } },
      ...prevTurns,
    ]);
  }

  return (
    <main>
      <GameContainer
        activePlayer={activePlayer}
        board={gameBoard}
        turns={gameTurns}
        onPlay={handleSelectSquare}
        winner={winner}
        hasDraw={hasDraw}
      />
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
