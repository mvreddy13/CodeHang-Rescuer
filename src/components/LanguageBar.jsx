import PropTypes from "prop-types";
import clsx from "clsx";
import { languages } from "./languages";
export default function LanguageBar(props) {
  const styles = {
    color: props.color,
    backgroundColor: props.backgroundColor,
  };

  const className = clsx("lang", props.languageLost && "strike");

  return (
    <span style={styles} className={className}>
      {props.name}
    </span>
  );
}

LanguageBar.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  languageLost: PropTypes.bool.isRequired,
};
