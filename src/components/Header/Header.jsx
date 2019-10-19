import React from "react";

import MenuItem from "./MenuItem";

const Header = (props) => {
  return (
    <div className="header">
      <div className="nav-menu">
        {/* don't fornet to translate those */}
        <MenuItem name="main" root alternativeName="01101101 01100001 01101001 01101110"/>
        <MenuItem name="about" alternativeName="01101101 01100001 01101001 01101110"/>
        <MenuItem name="skills" alternativeName="01101101 01100001 01101001 01101110"/>
        <MenuItem name="projects" alternativeName="01101101 01100001 01101001 01101110"/>
        <MenuItem name="music" alternativeName="01101101 01100001 01101001 01101110"/>
      </div>
    </div>
  );
};

export default Header;