import PropTypes from "prop-types";

export default function Keyboard({ value, onClick, isGameOver, className }) {
  return (
    <button disabled={isGameOver} onClick={onClick} className={className}>
      {value}
    </button>
  );
}

Keyboard.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isGameOver: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};
