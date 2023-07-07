import "./worksimg.css";

import React, { Component } from "react";

class WorksImg extends Component {
  render() {
    return (
      <div className="works-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default WorksImg;
