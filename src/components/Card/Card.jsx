import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const {
    className,
    children
  } = props;

  return (
    <div className={`base-card ${className}`}>
      {children}
    </div>
  );
};

export default Card;

Card.propTypes = {
  children: PropTypes.element.isRequired,
};
