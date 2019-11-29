import React, { useState } from "react";
import FontAwesome from "react-fontawesome";

import BaseScreen from "../../components/BaseScreen/BaseScreen";
import Card from "../../components/Card/Card";

import { PROJECTS } from "../../Constants";

const Projects = () => {
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
    <>
      <BaseScreen classNames="projects-screen">
        <div className="projects-div">
          
        </div>
      </BaseScreen>
    </>
  );
};

export default Projects;
