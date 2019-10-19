import React from "react";



const BaseScreen = (props) => {
  const { children, classNames } = props;

  return (
    <div className={`base-screen ${classNames}`}>
      main screen
      {children}
    </div>
  );
};

export default BaseScreen;