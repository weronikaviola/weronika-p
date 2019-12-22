import React from "react";

import BaseScreen from "../../components/BaseScreen/BaseScreen";
import Graph from "../../components/Graph/Graph";

import {
  PROJECTS,
} from "../../Constants";

const Projects = () => (
  <>
    <BaseScreen classNames="projects-screen">
      <div className="projects-div">
        <Graph elements={PROJECTS} />
      </div>
    </BaseScreen>
  </>
);

export default Projects;
