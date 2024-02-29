export function GameBoard({ board, gameTurns, onSelectSquare }) {
  for (const turn of gameTurns) {
    const { player, square } = turn;
    const { row, col } = square;
    board[row][col] = player;
  }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{cell}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
