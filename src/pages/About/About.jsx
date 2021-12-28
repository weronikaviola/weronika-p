/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import {
  ADA_LOVELACE_QUOTE,
  DESCRIPTION,
  EXPERIENCE_TECH,
  SKILLS,
} from "../../Constants";
import BaseScreen from "../../components/BaseScreen/BaseScreen";
import ExperienceItem from "./ExperienceItem";
import SkillItem from "./SkillItem";
import Quote from "../../components/Quote";
import TextField from "../../components/TextField/TextField";

const About = ({ binMode }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const onScroll = (evt) => {
    const element = evt.target;
    const newPosition =
      (100 * element.scrollTop) / (element.scrollHeight - element.offsetHeight);
    setScrollPosition(newPosition);
  };

  return (
    <BaseScreen
      classNames="about-page-container"
      style={{
        backgroundPosition: `${scrollPosition}% 0%`,
      }}
    >
      <div className="about-page flex">
        <div className="width-20 flex flex-column about-aside padder-5">
          {SKILLS.map((skill) => (
            <SkillItem {...skill} key={skill.name} binMode={binMode} />
          ))}
        </div>
        <div className="width-80 about-main padder-5" onScroll={onScroll}>
          <div className="description code text-shadow__classic-black">
            <Quote
              text={ADA_LOVELACE_QUOTE[0]}
              author={ADA_LOVELACE_QUOTE[1]}
              binMode={binMode}
            />
            {DESCRIPTION.map((paragraph) => (
              <div className="paragraph padder-1" key={paragraph.slice(0, 10)}>
                <TextField value={paragraph} binMode={binMode} />
              </div>
            ))}
            <div className="spacer-top-10">
              {EXPERIENCE_TECH.map((entry) => (
                <ExperienceItem {...entry} key={entry.name} binMode={binMode} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </BaseScreen>
  );
};

export default About;
