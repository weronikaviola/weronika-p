import React from "react";
import PropTypes from "prop-types";

const BaseScreen = ({
  children,
  className,
  height,
  id,
  onScroll,
  style,
}) => (
  <div
    className={`base-screen ${className} height-${height}`}
    id={id}
    style={style}
    onScroll={onScroll}
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
  onScroll: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
};

BaseScreen.defaultProps = {
  classNames: "",
  height: "90",
  id: "",
  onScroll: undefined,
  style: undefined,
};

export default BaseScreen;
