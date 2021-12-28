import React from "react";
import PropTypes from "prop-types";

const ENTER_KEY_CODE = 13;

const ToggleSwitch = ({ onSwitch, on }) => (
  <div
    className="toggleSwitch"
    onKeyDown={(e) => {
      if (e.keyCode === ENTER_KEY_CODE) onSwitch(e);
    }}
  >
    <label className={`switch ${on ? "on" : ""}`}>
      <input type="checkbox" defaultChecked={on} id="switchInput" />
    </label>
    <span className="slider" onClick={onSwitch}></span>
  </div>
);

ToggleSwitch.propTypes = {
  on: PropTypes.bool.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default ToggleSwitch;
