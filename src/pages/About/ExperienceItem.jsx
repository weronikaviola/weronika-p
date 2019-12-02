import React from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";

const ExperienceItem = ({
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
    <div className="paragraph padder-1 spacer-1 experience-item" key={name}>
      <div className="experience-item__header bcg-semi-black padder-1">
        <div>{`${name} - ${position}`}</div>
        <div>{startDate && `${startDate} - ${endDate}`}</div>
      </div>
      <div className="align-right">
        <a href={address} target="__blank">
          {linkName}
          <FontAwesome name="external-link-alt" className="spacer-left-2" />
        </a>
      </div>
      <div className="padder-1 spacer-top-2">
        {description}
      </div>
      <div className="padder-4">
        {bullets.map((bullet) => (
          <div key={bullet.slice(0, 4)} className="padder-1">
            <FontAwesome name="rocket" className="spacer-right-2" />
            {bullet}
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
