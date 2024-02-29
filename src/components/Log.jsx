import PropTypes from "prop-types";

Log.propTypes = {
  turns: PropTypes.array.isRequired,
};

export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map(({ player, square }) => (
        <li key={`${square.row}${square.col}`}>
          {player} selected [{square.row}, {square.col}]
        </li>
      ))}
    </ol>
  );
}
