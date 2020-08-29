import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import FontAwesome from "react-fontawesome";

const ENTER_KEY_CODE = 13;

const Carousel = ({
  items,
  height,
}) => {
  const mountedRef = useRef(true);
  const [active, setActive] = useState(1);
  useEffect(() => {
    return () => {
      mountedRef.current = false;
    }
  }, []);

  const itemsLength = items.length;
  const generateClassName = (idx) => {
    let baseClass = "carousel__item standard-shadow";
    const left = active - 1 < 0 ? active + 2 : active - 1;
    const right = active + 1 >= itemsLength ? active - 2 : active + 1;
    if (idx === active) baseClass += " active";
    else if ([left, right].includes(idx)) baseClass += " small";
    else baseClass += " hidden";
    return baseClass;
  };

  const moveLeft = () => {
    const newActive = active - 1 < 0 ? itemsLength - 1 : active - 1;
    if (!mountedRef.current) return null;
    setActive(newActive);
  };

  const moveRight = () => {
    const newActive = (active + 1) % itemsLength;
    if (!mountedRef.current) return null;
    setActive(newActive);
  };

  return (
    <div className={`height-${height} carousel padder-1`}>
      <div className="carousel__videos">
        <FontAwesome
          name="chevron-left"
          size="3x"
          className="spacer-right-5 pointer text-shadow__discrete"
          onClick={moveLeft}
          onKeyDown={(e) => {
            if (e.keyCode === ENTER_KEY_CODE) {
              moveLeft();
            }
          }}
          // tabIndex="0"
        />
        <div className="carousel__items">
          {items.map((item, idx) => (
            <a
              className={generateClassName(idx)}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.link.slice(item.link.length - 10)}
              aria-label={`video-link-${idx}`}
              onKeyDown={(e) => {
                if (e.keyCode === 39 && (active === idx - 1 || active === idx - 2)) {
                  moveRight();
                }
                if (e.keyCode === 37 && (active === idx + 1 || active === idx + 2)) {
                  moveLeft()
                }
              }}
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
  height: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Carousel.defaultProps = {
  height: "50",
};

export default Carousel;
