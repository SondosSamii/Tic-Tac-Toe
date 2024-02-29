import { Player } from "./Player";

export function Players({ activePlayer }) {
  return (
    <ol id="players" className="highlight-player">
      <Player initialName="John" symbol="X" isActive={activePlayer === "X"} />
      <Player initialName="Doe" symbol="O" isActive={activePlayer === "O"} />
    </ol>
  );
}
