import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import BaseScreen from "../components/BaseScreen/BaseScreen";
import TextField from "../components/TextField/TextField";

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

const NotFound = ({binMode}) => {
  const [additionalClasses, setAdditionalClasses] = useState('');
  const [showCats, setShowCats] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAdditionalClasses('add-transition');
      setTimeout(() => {
        setAdditionalClasses('add-tranition rotate');
      }, 15000);
    }, 1000);
  }, []);

  const classicContent = () => (
    <BaseScreen classNames={`error-screen ${additionalClasses}`}>
      <div className="not-found" onClick={() => {setAdditionalClasses('')}}>
        <TextField value="404" binMode={binMode} /><br/>
        <TextField value="page not found..." binMode={binMode} /><br/>
        <button
          className="btn btn--repo"
          onClick={() => setShowCats(!showCats) }
        >
          <TextField value="click me" binMode={binMode} />
        </button>
      </div>
      {showCats && crazyContent()}
    </BaseScreen>
  );

  const crazyContent = () => (
    <div className="crazy-cats">
      <div className="cat crazy-cat-1" />
      <div className="cat crazy-cat-2" />
      <div className="cat crazy-cat-3" />
    </div>
  );

  return (
    <Status code={404}>
      {classicContent()}
    </Status>
  )
};

export default NotFound;
