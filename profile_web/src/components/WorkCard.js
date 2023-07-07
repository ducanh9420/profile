import "./workcard.css";

import React from "react";

const WorkCard = (props) => {
  return (
    <div className="work-card">
      <img src={props.imgsrc} alt="" />
      <h2 className="work-title">{props.title}</h2>
      <div className="work-details">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default WorkCard;
