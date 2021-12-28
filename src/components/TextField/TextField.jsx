import React from "react";
import PropTypes from "prop-types";
import { translateToBin } from "../../utilities/utils";

const TextField = ({ value, binMode }) => {
  const binValue = translateToBin(value);
  return <span>{binMode ? binValue : value}</span>;
};

TextField.propTypes = {
  value: PropTypes.string,
  binMode: PropTypes.bool.isRequired,
};

TextField.defaultProps = {
  value: "",
};

export default TextField;
