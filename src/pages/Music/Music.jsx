import React from "react";

import { MUSIC_DESCRIPTION } from "../../Constants";

import BaseScreen from "../../components/BaseScreen/BaseScreen";

const Music = (props) => {
  return (
      <BaseScreen
        classNames="music-screen"
      >
        <div className="music-description">
          {MUSIC_DESCRIPTION}
        </div>
        <div className="iframe-container">
          <iframe
            title="soundcloud-player"
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/525172536&color=%233c3a39&auto_play=false&hide_related=false&show_user=true&show_reposts=false"
          />
        </div>
      </BaseScreen>
  )
};

export default Music;