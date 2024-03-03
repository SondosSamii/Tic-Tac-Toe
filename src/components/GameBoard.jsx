import PropTypes from "prop-types";

GameBoard.propTypes = {
  board: PropTypes.array.isRequired,
  onPlay: PropTypes.func.isRequired,
  winnerSymbol: PropTypes.string,
};

export function GameBoard({ board, onPlay, winnerSymbol }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onPlay(rowIndex, colIndex)}
                  disabled={board[rowIndex][colIndex] !== null || winnerSymbol !== null}
                >
                  {cell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
