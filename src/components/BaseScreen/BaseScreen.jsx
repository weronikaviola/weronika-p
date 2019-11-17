import React from "react";
import PropTypes from "prop-types";

const BaseScreen = ({
  children,
  classNames,
  height,
  id,
}) => (
  <div
    className={`base-screen ${classNames} height-${height}`}
    id={id}
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
};

BaseScreen.defaultProps = {
  classNames: "",
  height: "90",
  id: "",
};

export default BaseScreen;
