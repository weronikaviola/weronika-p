import React, { Fragment, useState } from "react";
import FontAwesome from "react-fontawesome";

import BaseScreen from "../../components/BaseScreen/BaseScreen";
import Card from "../../components/Card/Card";

import { PROJECTS } from "../../Constants";

const Projects = (props) => {
  const [visible, changeVisible] = useState(0);
  const PROJECTS_COUNT = PROJECTS.length - 1;

  const handleChevronClick = (direction) => {
    if (direction === "up" && visible > 0) {
      changeVisible(visible - 1);
    } else if (direction === "down" && visible < PROJECTS_COUNT) {
      changeVisible(visible + 1);
    }
  };

  return (
    <Fragment>
      <BaseScreen classNames="projects-screen">
        <div className="projects-div">
          <div className="flex">
            <FontAwesome
              name="chevron-up"
              size="5x"
              className={`next-project pointer center-span ${visible === 0 ? "visibility-hidden" : ""}`}
              onClick={() => handleChevronClick("up")}
            />
            <FontAwesome
              name="chevron-down"
              size="5x"
              className={`next-project pointer center-span ${visible === PROJECTS_COUNT ? "visibility-hidden" : ""}`}
              onClick={() => handleChevronClick("down")}
            />
          </div>
          {PROJECTS.map((project, idx) => (
            <Card
              name={project.name}
              title={project.title}
              description={project.description}
              image={project.image}
              className={idx === visible ? "visible" : ""}
              key={`project-${project.name}-${idx}`}
            />
          ))}
        </div>
      </BaseScreen>
    </Fragment>
  )
};

export default Projects;