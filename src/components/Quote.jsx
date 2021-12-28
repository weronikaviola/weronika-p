import React from "react";
import PropTypes from "prop-types";
import TextField from "./TextField/TextField";

const Quote = ({ text, author, binMode }) => (
  <div className="spacer-10">
    <div className="quote spacer-1">
      <TextField value={text} binMode={binMode} />
    </div>
    <div className="align-right">
      <TextField value={`~ ${author}`} binMode={binMode} />
    </div>
  </div>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Quote;
