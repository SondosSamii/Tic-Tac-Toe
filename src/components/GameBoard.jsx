import PropTypes from "prop-types";

GameBoard.propTypes = {
  board: PropTypes.array.isRequired,
  onPlay: PropTypes.func.isRequired,
  winner: PropTypes.string,
};

export function GameBoard({ board, onPlay, winner }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onPlay(rowIndex, colIndex)}
                  disabled={board[rowIndex][colIndex] !== null || winner !== null}
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
