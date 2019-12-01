import React from "react";

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

export default Quote;
