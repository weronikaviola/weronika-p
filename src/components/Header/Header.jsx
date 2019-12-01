import React, { useState } from "react";
import MenuItem from "./MenuItem";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="header">
      <div className="mobile-nav-menu">
        <button className="pointer image-button" type="button" onClick={toggleMenu}>
          <img src="/hamburger.png" className="hamburger-icon" alt="menu" />
        </button>
      </div>
      <div className={`nav-menu ${open && "visible"}`}>
        <MenuItem name="main" root alternativeName="01101101 01100001 01101001 01101110" onClick={toggleMenu} />
        {/* <MenuItem name="about" alternativeName="01101101 01100101" onClick={toggleMenu} />
        <MenuItem name="projects" alternativeName="01110111 01101111 01110010 01101011" onClick={toggleMenu} />
        <MenuItem name="music" alternativeName="01100001 01110010 01110100" onClick={toggleMenu} /> */}
      </div>
    </div>
  );
};

export default Header;
