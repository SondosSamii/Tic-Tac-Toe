import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function GameBoard({ onSelectSquare, activeSymbol }) {
  const [board, setBoard] = useState(initialBoard);

  function handlePlay(rowIndex, colIndex) {
    if (board[rowIndex][colIndex] === null) {
      setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        newBoard[rowIndex] = [...prevBoard[rowIndex]];
        newBoard[rowIndex][colIndex] = activeSymbol;
        return newBoard;
      });
      onSelectSquare(rowIndex, colIndex);
    }
  }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handlePlay(rowIndex, colIndex)}>{cell}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
