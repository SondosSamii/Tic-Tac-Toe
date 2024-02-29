export function GameBoard({ board, turns, onPlay }) {
  for (const turn of turns) {
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
                <button onClick={() => onPlay(rowIndex, colIndex)}>{cell}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
