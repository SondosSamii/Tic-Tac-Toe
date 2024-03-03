import PropTypes from "prop-types";

GameOver.propTypes = {
  winner: PropTypes.string,
  onRematch: PropTypes.func.isRequired,
};

export function GameOver({ winner, onRematch }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <button onClick={onRematch}>Rematch!</button>
    </div>
  );
}
