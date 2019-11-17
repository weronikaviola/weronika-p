import React from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";

const Card = ({
  className,
  image,
  name,
  title,
  description,
}) => (
  <div className="base-card-wrapper">
    <div className={`base-card standard-shadow ${className}`}>
      <div className="card-top">
        {`${name} - ${title}`}
        <img
          src={image}
          className="card-image"
          alt={`${name}-logo`}
        />
      </div>
      <div className="card-bottom">
        {description.map(item => (
          <div className="description-item" key={item.slice(0,10)}>
            <FontAwesome name="music" className="bullet-point" />
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Card;

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Card.defaultProps = {
  className: "",
};
