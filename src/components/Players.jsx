import PropTypes from "prop-types";
import { Player } from "./Player";

Players.propTypes = {
  activePlayer: PropTypes.string.isRequired,
  players: PropTypes.object.isRequired,
  onPlayerNameChange: PropTypes.func.isRequired,
};

export function Players({ activePlayer, players, onPlayerNameChange }) {
  return (
    <ol id="players" className="highlight-player">
      <Player
        initialName={players.X}
        symbol="X"
        isActive={activePlayer === "X"}
        onPlayerNameChange={onPlayerNameChange}
      />
      <Player
        initialName={players.O}
        symbol="O"
        isActive={activePlayer === "O"}
        onPlayerNameChange={onPlayerNameChange}
      />
    </ol>
  );
}
