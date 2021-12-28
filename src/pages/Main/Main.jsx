import React from "react";
import BaseScreen from "../../components/BaseScreen/BaseScreen";
import TextField from "../../components/TextField/TextField";

const Main = ({binMode}) => (
  <BaseScreen
    classNames="main-screen">
    <div className={`main code text-shadow__classic-black ${binMode ? 'binMode' : ''}`}>
      <div className="title">
        <TextField value="Veronica (Weronika) Miller" binMode={binMode}/>
      </div>
      <div className="subtitle">
        <TextField value="software engineer / musician" binMode={binMode}/>
      </div>
      <div className="social_media">
        <a href="https://www.linkedin.com/in/weronikamiller/" target="__blank" aria-label="linkedin">
          <i className="fab fa-linkedin-in fa-2x" aria-label="linkedin" />
        </a>
        <a href="https://github.com/weronikaviola/" target="__blank" aria-label="github" className="spacer-left-4">
          <i className="fab fa-github-square fa-2x" aria-label="github" />
        </a>
      </div>
    </div>
  </BaseScreen>
);

export default Main;
