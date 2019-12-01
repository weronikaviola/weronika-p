import React from "react";
import PropTypes from "prop-types";

const SkillItem = ({
  name,
  logo,
}) => (
  <div className="spacer-1 skill-item standard-shadow">
    <span className="spacer-right-2">
      <i className={`${logo} text-shadow__classic-black`} />
    </span>
    <span className="text-shadow__discrete">
      {name}
    </span>
  </div>
);

SkillItem.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string,
};

SkillItem.defaultProps = {
  logo: "",
};

export default SkillItem;
