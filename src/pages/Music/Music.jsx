import React, {
  Fragment,
  useEffect,
  useState,
} from "react";


import {
  MUSIC_DESCRIPTION,
  MUSIC_CAROUSEL_ITEMS,
} from "../../Constants";

import FontAwesome from "react-fontawesome";

import BaseScreen from "../../components/BaseScreen/BaseScreen";
import Carousel from "../../components/Carousel/Carousel";

const Music = (props) => {
  const moveDown = () => {
    document.getElementById("screen-2").scrollIntoView({ behavior: "smooth" })
  }
  return (
    <Fragment>
      <BaseScreen classNames="music-screen" id="screen-1">
        <div className={`music-parallax`}>
          <FontAwesome
            name="chevron-down"
            size="5x"
            className="opaque-black text-shadow__discrete wobble-on-hover pointer"
            onClick={moveDown}
          />
        </div>
      </BaseScreen>
      <BaseScreen
        height="100"
        classNames="wooden-floor"
        id="screen-2"
      >
        <div className="music-screen flex padder-15">
          <div className="music-description text spacer-right-10 justify text-shadow__classic-black">
            {MUSIC_DESCRIPTION}
          </div>
          <div className="iframe-container standard-shadow">
            <iframe
              title="soundcloud-player"
              width="100%"
              height="300"
              frameBorder="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/525172536&color=%233c3a39&auto_play=false&hide_related=false&show_user=false&show_reposts=false"
            />
          </div>
        </div>
        <Carousel
          title="videos"
          height="50"
          items={MUSIC_CAROUSEL_ITEMS}
        />
      </BaseScreen>
    </Fragment>
  )
};

export default Music;