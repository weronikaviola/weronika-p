import React from "react";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  const {
    alternativeName,
    name,
    root,
  } = props;
  return (
    <button className="menu-item">
      <Link to={`/${root ? "" : name}`}>
        <span className="name">{name}</span>
        <span className="alt-name">{alternativeName}</span>
      </Link>
    </button>
  )
};

export default MenuItem;