import React from "react";

import BaseScreen from "../../components/BaseScreen/BaseScreen";

import {
  ABOUT_ME,
  SKILLS,
} from "../../Constants";
import SkillItem from "./SkillItem";

const About = () => (
  <BaseScreen classNames="flex about-page">
    <div className="width-20 flex flex-column about-aside">
      {SKILLS.map((skill) => (
        <SkillItem skill={skill} key={skill} />
      ))}
    </div>
    <div className="width-80 about-main">
      <div className="description code text-shadow__discrete">
        <div className="paragraph">
          {ABOUT_ME}
        </div>
      </div>
    </div>
  </BaseScreen>
);

export default About;
