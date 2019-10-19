import React from "react";

import BaseScreen from "../../components/BaseScreen/BaseScreen";
import Json from "../../components/Json/Json";

import {
  PROJECTS,
} from "../../Constants";

const Projects = () => (
  <>
    <BaseScreen classNames="projects-screen">
      <div className="projects-div">
        <Json elements={PROJECTS} />
      </div>
    </BaseScreen>
  </>
);

export default Projects;
