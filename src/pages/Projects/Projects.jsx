import React, { useState } from "react";
import FontAwesome from "react-fontawesome";

import BaseScreen from "../../components/BaseScreen/BaseScreen";
import Card from "../../components/Card/Card";

import { PROJECTS } from "../../Constants";

const Projects = (props) => {
  const [firstVisible, changeFirstVisible] = useState(0);
  const generateClassName = (idx) => {
    let className;
    if ([firstVisible, firstVisible+1, firstVisible+2].includes(idx)) {
      className += " visible"
    };
    return className;
  }
  return (
      <BaseScreen classNames="projects-screen">
        projecs will be here
      </BaseScreen>
  )
};

export default Projects;