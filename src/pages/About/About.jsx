import React, { useState } from "react";
import {
  DESCRIPTION,
  ADA_LOVELACE_QUOTE,
  SKILLS,
  LOREM_IPSUM,
} from "../../Constants";
import BaseScreen from "../../components/BaseScreen/BaseScreen";
import SkillItem from "./SkillItem";
import Quote from "../../components/Quote";

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const onScroll = (evt) => {
    const element = evt.target;
    const newPosition = (100 * element.scrollTop) / (element.scrollHeight - element.offsetHeight);
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
            // eslint-disable-next-line react/jsx-props-no-spreading
            <SkillItem {...skill} key={skill.name} />
          ))}
        </div>
        <div className="width-80 about-main padder-5" onScroll={onScroll}>
          <div className="description code text-shadow__discrete">
            <Quote text={ADA_LOVELACE_QUOTE[0]} author={ADA_LOVELACE_QUOTE[1]} />
            {DESCRIPTION.map((paragraph) => (
              <div className="paragraph padder-1" key={paragraph.slice(0, 10)}>
                {paragraph}
              </div>
            ))}
            {LOREM_IPSUM.map((paragraph) => (
              <div className="paragraph padder-1" key={paragraph.slice(0, 10)}>
                {paragraph}
              </div>
            ))}
            {LOREM_IPSUM.map((paragraph) => (
              <div className="paragraph padder-1" key={paragraph.slice(0, 10)}>
                {paragraph}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BaseScreen>
  );
};

export default About;
