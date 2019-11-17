import React from "react";

import BaseScreen from "../../components/BaseScreen/BaseScreen";

import { SKILLS } from "../../Constants";
import SkillItem from "./SkillItem";

const About = (props) => {
  return (
      <BaseScreen classNames="flex about-page">
        <div className="width-20 flex flex-column about-aside">
          {SKILLS.map(skill => (
            <SkillItem skill={skill} key={skill} />
          ))}
        </div>
        <div className="width-80 about-main">
          <div className="description code text-shadow__discrete">
            <div className="paragraph">
              Hi! I'm Weronika. And this will be some kind of description.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ea ducimus minus error facilis possimus mollitia tempora quam odio repellat itaque laudantium animi, harum iste neque, ratione voluptate quasi dignissimos!
            </div>
          </div>
        </div>
      </BaseScreen>
  )
};

export default About;