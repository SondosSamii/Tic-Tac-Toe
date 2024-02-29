import PropTypes from "prop-types";
import { useState } from "react";

Player.propTypes = {
  initialName: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export function Player({ initialName, symbol, isActive }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((prevState) => !prevState);
  }

  let playerName = <span className="player-name">{name}</span>;
  let btnTitle = "Edit";

  if (isEditing) {
    playerName = (
      <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
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
