import React, { useState } from "react";

import BaseScreen from "../../components/BaseScreen/BaseScreen";

import { PROJECTS } from "../../Constants";

const Projects = () => {
  const [visible, changeVisible] = useState(0);
  const PROJECTS_COUNT = PROJECTS.length - 1;

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
