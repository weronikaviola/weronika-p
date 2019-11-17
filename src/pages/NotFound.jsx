import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import BaseScreen from "../components/BaseScreen/BaseScreen";

const Status = ({
  code,
  children,
}) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) staticContext.status = code;
      return children;
    }}
  />
);

Status.propTypes = {
  code: PropTypes.number,
  children: PropTypes.element,
};

Status.defaultProps = {
  code: undefined,
  children: undefined,
};

const NotFound = () => (
  <Status code={404}>
    <BaseScreen classNames="error-screen">
      <div className="not-found">
        page not found...
      </div>
    </BaseScreen>
  </Status>
);

export default NotFound;
