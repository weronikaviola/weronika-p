import React from "react";

const CdMiniature = ({ imageLink, description, publisherLink }) => (
  <div className="small-image" title={description}>
    <a href={publisherLink} target="_blank" rel="noopener noreferrer">
      <img src={imageLink} alt={description}/>
    </a>
  </div>
);

export default CdMiniature;
