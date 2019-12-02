import React, { useState } from "react";
import FontAwesome from "react-fontawesome";
import {
  MUSIC_DESCRIPTION,
  MUSIC_CAROUSEL_ITEMS,
  MUSIC_IMAGE_GALLERY,
} from "../../Constants";
import BaseScreen from "../../components/BaseScreen/BaseScreen";
import Carousel from "../../components/Carousel/Carousel";
import Slideshow from "../../components/Slideshow/Slideshow";

const BLUR_OFFSET = 100;

const Music = () => {
  const [blurred, setBlurred] = useState(false);
  const moveDown = () => {
    document.getElementById("screen-2").scrollIntoView({ behavior: "smooth" });
  };
  const onScroll = (evt) => {
    const offset = evt.target.scrollTop;
    if (offset > BLUR_OFFSET) setBlurred(true);
    if (offset < BLUR_OFFSET) setBlurred(false);
  };

  return (
    <BaseScreen onScroll={onScroll}>
      <div className="music-screen" id="screen-1">
        <div className={`music-parallax ${blurred && "blur"}`}>
          <FontAwesome
            name="chevron-down"
            size="5x"
            className="opaque-black text-shadow__discrete wobble-on-hover pointer"
            onClick={moveDown}
          />
        </div>
      </div>
      <div className="music-screen wooden-floor height-90" id="screen-2">
        <div className="flex music-description__container">
          <div className="music-description text justify text-shadow__classic-black">
            {MUSIC_DESCRIPTION}
          </div>
          <div className="slideshow-container">
            <Slideshow images={MUSIC_IMAGE_GALLERY} />
          </div>
        </div>
        <div className="music-carousel">
          <Carousel
            title="videos"
            height="40"
            items={MUSIC_CAROUSEL_ITEMS}
          />
        </div>
      </div>
    </BaseScreen>
  );
};

export default Music;
