import PropTypes from "prop-types";
import { Player } from "./Player";

Players.propTypes = {
  activePlayer: PropTypes.string.isRequired,
  players: PropTypes.object.isRequired,
  onChangePlayerName: PropTypes.func.isRequired,
};

export function Players({ activePlayer, players, onChangePlayerName }) {
  return (
    <ol id="players" className="highlight-player">
      <Player
        initialName={players.X}
        symbol="X"
        isActive={activePlayer === "X"}
        onChangePlayerName={onChangePlayerName}
      />
      <Player
        initialName={players.O}
        symbol="O"
        isActive={activePlayer === "O"}
        onChangePlayerName={onChangePlayerName}
      />
    </ol>
  );
}
