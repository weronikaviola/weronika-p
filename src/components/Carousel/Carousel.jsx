import React, { useState } from "react";
import PropTypes from "prop-types";

import FontAwesome from "react-fontawesome";

const Carousel = ({
  items,
  height,
  title,
}) => {
  const [active, setActive] = useState(1);
  const itemsLength = items.length;
  const generateClassName = (idx) => {
    let baseClass = "carousel__item standard-shadow";
    const left = active - 1 < 0 ? itemsLength - 1 : active - 1;
    const right = (active + 1) % itemsLength;
    if (idx === active) baseClass += " active";
    else if ([left, right].includes(idx)) baseClass += " small";
    else baseClass += " hidden";
    return baseClass;
  };

  const moveLeft = () => {
    const newActive = active - 1 < 0 ? itemsLength - 1 : active - 1;
    setActive(newActive);
  };

  const moveRight = () => {
    const newActive = (active + 1) % itemsLength;
    setActive(newActive);
  };

  return (
    <div className={`height-${height} carousel padder-10`}>
      <div className="carousel__title caption text-shadow__underline bcg-semi-black">{title}</div>
      <div className="carousel__videos">
        <FontAwesome
          name="chevron-left"
          size="3x"
          className="spacer-right-5 pointer text-shadow__discrete"
          onClick={moveLeft}
        />
        <div className="carousel__items">
          {items.map((item, idx) => (
            <a
              className={generateClassName(idx)}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.link.slice(item.link.length - 10)}
            >
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                className="flex flex-center"
              >
                <FontAwesome name="play-circle" size="3x" className="text-shadow__discrete" />
              </div>
            </a>
          ))}
        </div>
        <FontAwesome
          name="chevron-right"
          size="3x"
          className="spacer-left-5 pointer text-shadow__discrete"
          onClick={moveRight}
        />
      </div>
    </div>
  );
};

Carousel.propTypes = {
  title: PropTypes.string,
  height: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Carousel.defaultProps = {
  title: "",
  height: "50",
};

export default Carousel;
