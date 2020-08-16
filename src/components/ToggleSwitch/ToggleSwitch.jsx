import React from "react";
import PropTypes from "prop-types";

const ToggleSwitch = ({
  onSwitch,
  on,
}) => (
  <div className="toggleSwitch">
    <label className="switch">
      <input type="checkbox" checked={on} onChange={onSwitch}/>
      <span className="slider"></span>
    </label>
  </div>
);

ToggleSwitch.propTypes = {
  on: PropTypes.bool.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default ToggleSwitch;