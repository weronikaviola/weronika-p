/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Json = ({
  elements,
  includeGithubLink,
}) => {
  const optionalIcon = () => {
    if (includeGithubLink) {
      return (
        <a href="https://github.com/weronikaviola/" target="__blank" tabIndex="-1">
          <button
            className="btn btn--repo standard-shadow"
            type="button"
            tabIndex="0"
          >
            github
            <i className="devicon-github-plain colored spacer-left-2" />
          </button>
        </a>
      );
    }
    return null;
  };
  return (
    <div className="json-wrapper standard-shadow">
      {optionalIcon()}
      <div className="json code">
        <div className="json__row">
          {"{"}
        </div>
        {elements.map((element, idx) => (
          <Fragment key={element.name}>
            <div className="json__row spacer-left-4" key={element.id}>
              {`"${element.name}": {`}
            </div>
            <div className="json__row spacer-left-8">
              {`"role": "${element.title}",`}
            </div>
            <div className="json__row spacer-left-8 indent-8">
              {`"url":`}
              <a href={element.url} target="__blank">{` "${element.url}"`}</a>
            </div>
            <div className="json__row spacer-left-4">
              {`}${idx < elements.length - 1 ? "," : ""}`}
            </div>
          </Fragment>
        ))}
        <div className="json__row">
          {"}"}
        </div>
      </div>
    </div>
  );
};

Json.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  includeGithubLink: PropTypes.bool,
};

Json.defaultProps = {
  includeGithubLink: true,
};

export default Json;
