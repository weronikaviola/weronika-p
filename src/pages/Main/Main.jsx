import React from "react";
import BaseScreen from "../../components/BaseScreen/BaseScreen";

const Main = () => (
  <BaseScreen
    classNames="main-screen"
  >
    <div className="main code text-shadow__classic-black">
      <div className="title">Weronika Miller</div>
      <div className="subtitle">
        software engineer
      </div>
      <div className="social_media">
        <a href="https://www.linkedin.com/in/weronikamiller/" target="__blank">
          <i className="fab fa-linkedin-in fa-2x" />
        </a>
        <a href="https://github.com/weronikaviola/" target="__blank">
          <i className="fab fa-github-square fa-2x spacer-left-4" />
        </a>
        {/* <i className="fas fa-at fa-2x spacer-left-4" /> */}
      </div>
    </div>
  </BaseScreen>
);

export default Main;
