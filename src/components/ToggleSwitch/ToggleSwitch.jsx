import React from "react";
import PropTypes from "prop-types";

const ToggleSwitch = ({
  onSwitch,
  on,
}) => (
  <div className="toggleSwitch">
    <label className={`switch ${on ? 'on' : ''}`}>binary mode
      <input type="checkbox" defaultChecked={on} id="switchInput"/>
    </label>
    <span className="slider" onClick={onSwitch}></span>
  </div>
);

ToggleSwitch.propTypes = {
  on: PropTypes.bool.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default ToggleSwitch;