import React, { useState } from "react";

import FontAwesome from "react-fontawesome"

const Carousel = (props) => {
  const [active, setActive] = useState(1);
  const {
    title,
    height,
    items,
  } = props;
  const itemsLength = items.length;
  const generateClassName = (idx) => {
    let baseClass = "carousel__item";
    let left = active - 1 < 0 ? itemsLength-1 : active-1;
    let right = (active+1)%itemsLength;
    if (idx === active) baseClass += " active";
    else if ([left, right].includes(idx)) baseClass += " small";
    else baseClass += " hidden";
    return baseClass;
  }

  const moveLeft = () => {
    let newActive = active - 1 < 0 ? itemsLength-1 : active - 1;
    setActive(newActive)
  };

  const moveRight = () => {
    let newActive = (active+1)%itemsLength;
    setActive(newActive);
  };
  return (
    <div className={`height-${height} carousel padder-10`}>
      <div className="carousel__title">{title}</div>
      <div className="carousel__videos">
        <FontAwesome
          name="chevron-left"
          size="3x"
          className="spacer-right-5 pointer"
          onClick={moveLeft}
        />
        <div className="carousel__items">
          {items.map((item, idx) => (
            <div
              className={generateClassName(idx)}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
        <FontAwesome
          name="chevron-right"
          size="3x"
          className="spacer-left-5 pointer"
          onClick={moveRight}
        />
      </div>
    </div>
  )
};

export default Carousel;
