import React from "react";
import PropTypes from "prop-types";

const SkillItem = ({
  skill,
}) => (
  <div>
    {skill}
  </div>
);

SkillItem.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default SkillItem;
