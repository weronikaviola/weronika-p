import React from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";
import TextField from "../../components/TextField/TextField";

const SkillItem = ({
  name,
  logo,
  binMode,
}) => {
  const generateLogo = () => {
    return (
      logo
        ? <i className={`${logo} text-shadow__classic-black`} />
        : <FontAwesome name="laptop-code" className="text-shadow__classic-black" />
    );
  };

  return (
    <div className="spacer-1 skill-item standard-shadow" tabIndex="0">
      <span className="spacer-right-2">
        {generateLogo()}
      </span>
      <span className="text-shadow__discrete">
        <TextField value={name} binMode={binMode} />
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
