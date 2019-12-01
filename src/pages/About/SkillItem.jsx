import React from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";

const SkillItem = ({
  name,
  logo,
}) => {
  const generateLogo = () => {
    return (
      logo
        ? <i className={`${logo} text-shadow__classic-black`} />
        : <FontAwesome name="laptop-code" className="text-shadow__classic-black" />
    );
  };

  return (
    <div className="spacer-1 skill-item standard-shadow">
      <span className="spacer-right-2">
        {generateLogo()}
      </span>
      <span className="text-shadow__discrete">
        {name}
      </span>
    </div>
  );
};

SkillItem.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string,
};

SkillItem.defaultProps = {
  logo: "",
};

export default SkillItem;
