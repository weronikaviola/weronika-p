import React from "react";
import PropTypes from "prop-types";

const BaseScreen = (props) => {
  const { children, classNames, height, id } = props;

  return (
    <div
      className={`base-screen ${classNames} height-${height}`}
      id={id}
    >
      {children}
    </div>
  );
};

BaseScreen.propTypes = {
  children: PropTypes.element.isRequired,
  classNames: PropTypes.string,
  height: PropTypes.string,
};

BaseScreen.defaultProps = {
  classNames: "",
  height: "90"
};

export default BaseScreen;