import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { MENU_ITEMS } from "../../Constants";

const Header = ({ binMode }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="header">
      <div className="mobile-nav-menu">
        <button
          className="pointer btn--text"
          type="button"
          onClick={toggleMenu}
        >
          <img src="/hamburger.png" className="hamburger-icon" alt="menu" />
        </button>
      </div>
      <div className={`nav-menu ${open && "visible"}`}>
        {MENU_ITEMS.map((item) => (
          <MenuItem
            name={item.name}
            alternativeName={item.alternative}
            onClick={toggleMenu}
            root={item.root}
            key={item.name}
            binMode={binMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
