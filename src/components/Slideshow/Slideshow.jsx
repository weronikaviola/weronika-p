import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Slideshow = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [blur, setBlur] = useState(false);
  const calculateNextImage = () => {
    return (currentImage + 1) % images.length;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBlur(true);
      setTimeout(() => {
        setCurrentImage(calculateNextImage());
        setTimeout(() => {
          setBlur(false);
        }, 500);
      }, 1000);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  const displayImage = () => {
    if (images) {
      const image = images[currentImage];
      return (
        <img
          src={image.path}
          alt={image.alt}
          className={`slideshow__image standard-shadow ${blur && "blur"}`}
        />
      );
    }
    return false;
  };

  return <div className="slideshow">{displayImage()}</div>;
};

Slideshow.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
};

export default Slideshow;
