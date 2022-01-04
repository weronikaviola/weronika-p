import React from "react";
import FontAwesome from "react-fontawesome";
import {
  DISCOGRAPHY,
  MUSIC_DESCRIPTION,
  MUSIC_IMAGE_GALLERY,
} from "../../Constants";
import BaseScreen from "../../components/BaseScreen/BaseScreen";
import Slideshow from "../../components/Slideshow/Slideshow";
import TextField from "../../components/TextField/TextField";
import CdMiniature from "../../components/CdMiniature";

const Music = ({ binMode }) => {
  const moveDown = () => {
    document.getElementById("screen-2").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BaseScreen>
      <div className="music-screen height-90" id="screen-1">
        <div className="music-parallax">
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
            <TextField value={MUSIC_DESCRIPTION} binMode={binMode} />
            <div className="flex space-evenly spacer-top-5">
              <TextField value="Discography:" binMode={binMode} />
              {DISCOGRAPHY.map((record) => (
                <CdMiniature
                  key={record.image}
                  imageLink={record.image}
                  description={record.description}
                  publisherLink={record.link}
                />
              ))}
            </div>
          </div>
          <div className="slideshow-container">
            <Slideshow images={MUSIC_IMAGE_GALLERY} />
          </div>
        </div>
      </div>
      {/* <div className="music-carousel height-90 hidden-section">
          <Carousel title="videos" height="50" items={MUSIC_CAROUSEL_ITEMS} />
      </div> */}
    </BaseScreen>
  );
};

export default Music;
