import React from "react";
import PropTypes from "prop-types";

const BaseScreen = ({
  children,
  classNames,
  height,
  id,
  style,
}) => (
  <div
    className={`base-screen ${classNames} height-${height}`}
    id={id}
    style={style}
  >
    {children}
  </div>
);

BaseScreen.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.arrayOf(PropTypes.element), PropTypes.element],
  ).isRequired,
  classNames: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

BaseScreen.defaultProps = {
  classNames: "",
  height: "90",
  id: "",
  style: undefined,
};

export default BaseScreen;
