export default function Log({ gameTurns }) {
  console.log("gameTurns: ", gameTurns);

  return (
    <ol id="log">
      {gameTurns.map(({ player, row, col }, index) => (
        <li key={index}>
          Player: {player} played on: {row}, {col}
        </li>
      ))}
    </ol>
  );
}
