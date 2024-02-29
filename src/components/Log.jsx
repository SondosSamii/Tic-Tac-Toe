export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map(({ player, square }, index) => (
        <li key={index}>
          Player: {player} played on: {square.row}, {square.col}
        </li>
      ))}
    </ol>
  );
}
