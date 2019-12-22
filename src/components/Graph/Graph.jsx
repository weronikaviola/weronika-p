import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GRAPH_PROP_TYPES } from "../../Constants";
import { generateRandom } from "../../utilities/utils";

const MAX_GRID_COLUMNS = 6;
const MAX_GRID_ROWS = 4;

const GraphElement = ({
  area,
  id,
  name,
  url,
}) => (
  <div
    className="graph__element"
    style={{
      // gridArea: area,
    }}
  >
    element
  </div>
);


GraphElement.propTypes = {
  //
};


const Graph = ({
  elements,
}) => {
  return (
    <div className="graph">
      {elements.map(element => (
        <GraphElement {...element} key={element.id} />
      ))}
    </div>
  );
};

Graph.propTypes = {
  elements: PropTypes.arrayOf(GRAPH_PROP_TYPES).isRequired,
};

export default Graph;
