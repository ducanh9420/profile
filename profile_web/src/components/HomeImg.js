import "./homeimg.css";

import React from "react";

import IntroImg from "../assets/intro-img.jpg";
import { Link } from "react-router-dom";

const HomeImg = () => {
  return (
    <div className="home">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HELLO, I'M DUC ANH.</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/works" className="btn">
            Works
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeImg;
