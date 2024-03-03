import PropTypes from "prop-types";
import { useState } from "react";

Player.propTypes = {
  initialName: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onPlayerNameChange: PropTypes.func.isRequired,
};

export function Player({ initialName, symbol, isActive, onPlayerNameChange }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((prevState) => !prevState);
  }

  function handleNameChange(newValue) {
    setName(newValue);
    onPlayerNameChange(symbol, newValue);
  }

  let playerName = <span className="player-name">{name}</span>;
  let btnTitle = "Edit";

  if (isEditing) {
    playerName = (
      <input type="text" required value={name} onChange={(e) => handleNameChange(e.target.value)} />
    );
    btnTitle = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{btnTitle}</button>
    </li>
  );
}
