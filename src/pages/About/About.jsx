import React, { useState } from "react";

import BaseScreen from "../../components/BaseScreen/BaseScreen";

import {
  DESCRIPTION,
  ADA_LOVELACE_QUOTE,
  SKILLS,
} from "../../Constants";
import SkillItem from "./SkillItem";

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
            <div className="quote spacer-10">
              {ADA_LOVELACE_QUOTE}
            </div>
            {DESCRIPTION.map((paragraph) => (
              <div className="paragraph padder-1" key={paragraph.slice(0, 10)}>
                {paragraph}
              </div>
            ))}
            {DESCRIPTION.map((paragraph) => (
              <div className="paragraph padder-1" key={paragraph.slice(0, 10)}>
                {paragraph}
              </div>
            ))}
            {DESCRIPTION.map((paragraph) => (
              <div className="paragraph padder-1" key={paragraph.slice(0, 10)}>
                {paragraph}
              </div>
            ))}
            {DESCRIPTION.map((paragraph) => (
              <div className="paragraph padder-1" key={paragraph.slice(0, 10)}>
                {paragraph}
              </div>
            ))}
            {DESCRIPTION.map((paragraph) => (
              <div className="paragraph padder-1" key={paragraph.slice(0, 10)}>
                {paragraph}
              </div>
            ))}
            {DESCRIPTION.map((paragraph) => (
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
