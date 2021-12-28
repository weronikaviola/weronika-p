import React from "react";

const SoundCloudPlayer = () => {
  return (
    <div className="sound-cloud-player">
      <iframe
        className="standard-shadow"
        width="40%"
        height="110"
        scrolling="no"
        frameborder="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1370371756&color=%233c3a39&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
      ></iframe>
    </div>
  );
};

export default SoundCloudPlayer;
