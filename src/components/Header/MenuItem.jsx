import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MenuItem = ({
  alternativeName,
  name,
  root,
}) => (
  <button className="menu-item" type="button">
    <Link to={`/${root ? "" : name}`}>
      <span className="name">{name}</span>
      <span className="alt-name">{alternativeName}</span>
    </Link>
  </button>
);

MenuItem.propTypes = {
  alternativeName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  root: PropTypes.bool,
};

MenuItem.defaultProps = {
  root: false,
};
export default MenuItem;
