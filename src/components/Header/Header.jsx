import React from "react";

import MenuItem from "./MenuItem";

const Header = (props) => {
  return (
    <div className="header">
      <div className="nav-menu">
        {/* don't fornet to translate those */}
        <MenuItem name="main" root alternativeName="01101101 01100001 01101001 01101110"/>
        <MenuItem name="about" alternativeName="01101101 01100101 "/>
        <MenuItem name="skills" alternativeName="01110100 01100101 01100011 01101000"/>
        <MenuItem name="projects" alternativeName="01110111 01101111 01110010 01101011"/>
        <MenuItem name="music" alternativeName="01100001 01110010 01110100"/>
      </div>
    </div>
  );
};

export default Header;