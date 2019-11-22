import React from "react";

import BaseScreen from "../../components/BaseScreen/BaseScreen";

import {
  DESCRIPTION,
  ADA_LOVELACE_QUOTE,
  SKILLS,
} from "../../Constants";
import SkillItem from "./SkillItem";

const About = () => (
  <BaseScreen classNames="flex about-page">
    <div className="width-20 flex flex-column about-aside padder-5">
      {SKILLS.map((skill) => (
        <SkillItem skill={skill} key={skill} />
      ))}
    </div>
    <div className="width-80 about-main padder-5">
      <div className="description code text-shadow__discrete">
        <div className="quote spacer-10">
          {ADA_LOVELACE_QUOTE}
        </div>
        {DESCRIPTION.map((paragraph) => (
          <div className="paragraph padder-1" key={paragraph.slice(0, 10)}>
            {paragraph}
          </div>
        ))}
      </div>
    </div>
  </BaseScreen>
);

export default About;
