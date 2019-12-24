import React from "react";
import PropTypes from "prop-types";

const Json = ({
  elements,
}) => {
  return (
    <div className="json-wrapper standard-shadow">
      <div className="json code">
        <div className="json__row">
          {"{"}
        </div>
        {elements.map((element, idx) => (
          <>
            <div className="json__row spacer-left-4" key={element.id}>
              {`"${element.name}": {`}
            </div>
            <div className="json__row spacer-left-8">
              {`"role": "${element.title}",`}
            </div>
            <div className="json__row spacer-left-8 indent-8">
              {`"url":`}
              <a href={element.url}>{` "${element.url}"`}</a>
            </div>
            <div className="json__row spacer-left-4">
              {`}${idx < elements.length - 1 ? "," : ""}`}
            </div>
          </>
        ))}
        <div className="json__row">
          {"}"}
        </div>
      </div>
    </div>
  );
};

Json.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Json;
