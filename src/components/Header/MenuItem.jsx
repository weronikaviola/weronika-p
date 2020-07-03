import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MenuItem = ({
  alternativeName,
  name,
  onClick,
  root,
}) => (
  <button className="menu-item" type="button" onClick={onClick} tabIndex="-1">
    <Link to={`/${root ? "" : name}`} tabIndex="0">
      <span className="name">{name}</span>
      <span className="alt-name">{alternativeName}</span>
    </Link>
  </button>
);

MenuItem.propTypes = {
  alternativeName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  root: PropTypes.bool,
};

MenuItem.defaultProps = {
  onClick: undefined,
  root: false,
};
export default MenuItem;
