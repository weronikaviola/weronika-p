import React from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";
import TextField from "../../components/TextField/TextField";

const ExperienceItem = ({
  binMode,
  bullets,
  description,
  endDate,
  link,
  name,
  position,
  startDate,
}) => {
  const {
    address,
    name: linkName,
  } = link;
  return (
    <div className="paragraph padder-bottom-1 spacer-1 experience-item" key={name}>
      <div className="experience-item__header bcg-semi-black standard-shadow padder-1">
        <div tabIndex="0">
          <TextField value={`${name} - ${position}`} binMode={binMode} />
        </div>
        <div>
          <TextField value={startDate && `${startDate} - ${endDate}`} binMode={binMode} />
        </div>
      </div>
      <div className="align-right">
        <a href={address} target="__blank">
          <TextField value={linkName} binMode={binMode} />
          <FontAwesome name="external-link-alt" className="spacer-left-2" />
        </a>
      </div>
      <div className="padder-1 spacer-top-2">
        <TextField value={description} binMode={binMode} />
      </div>
      <div className="padder-4">
        {bullets.map((bullet) => (
          <div key={bullet.slice(0, 10)} className="padder-1">
            <FontAwesome name="rocket" className="spacer-right-2" />
            <TextField value={bullet} binMode={binMode} />
          </div>
        ))}
      </div>
    </div>
  );
};

ExperienceItem.propTypes = {
  bullets: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  link: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  startDate: PropTypes.string,
};

ExperienceItem.defaultProps = {
  bullets: [],
  endDate: undefined,
  startDate: undefined,
};

export default ExperienceItem;
