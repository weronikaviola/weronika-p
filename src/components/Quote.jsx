import React from "react";
import PropTypes from "prop-types";

const Quote = ({
  text,
  author,
}) => (
  <div className="spacer-10">
    <div className="quote spacer-1">
      {text}
    </div>
    <div className="align-right">
      {`~ ${author}`}
    </div>
  </div>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Quote;
