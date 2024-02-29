import { Player } from "./Player";

const players = [
  { name: "John", symbol: "X" },
  { name: "Doe", symbol: "O" },
];
export function Players({ activePlayer }) {
  return (
    <ol id="players" className="highlight-player">
      {/* {players.map(player => <Player key={player.name} name={player.name} symbol={player.symbol}/>)} */}
      <Player initialName="John" symbol="X" isActive={activePlayer === "X"} />
      <Player initialName="Doe" symbol="O" isActive={activePlayer === "O"} />
    </ol>
  );
}
