import "./aboutcontent.css";

import React from "react";
import AboutImg from "../assets/Anhthe.PNG";
import CVpdf from "../assets/DuongDucAnh-CVFE.pdf";

const AboutContent = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section-title">About me</h2>

      <div className="about-container grid">
        <img src={AboutImg} alt="" className="about-img" />

        <div className="about-data grid">
          <div className="about-info">
            <div className="about-description">
              <p className="about-pj">
                Working in a large company, using all the professional knowledge
                learned in school and having the opportunity to hone new skills
                and experience in the workplace.
              </p>
              <p className="about-pj">
                Contributing their efforts, intelligence and enthusiasm to the
                development of the company, taking on the position well and
                having the opportunity to advance to a higher position.
              </p>
              <div className="about-school">
                <h3 className="skills-name">Education</h3>
                <span className="edu-info">
                  Hanoi University of Science and Technology (Troy University)
                </span>
                <p className="edu-info">Computer Science</p>
                <p className="edu-info">GPA: 3.0/4.0</p>
              </div>
            </div>
            <a
              href={CVpdf}
              download="DuongDucAnh-CVFE"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Download CV
            </a>
          </div>

          <div className="about-skills grid">
            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">Programming Languages</h3>
                <span className="skills-description">
                  HTML, CSS, Javascript
                </span>
              </div>
              <div className="skills-titles">
                <h3 className="skills-name">Frameworks</h3>
                <span className="skills-description">ReactJS, NodeJS</span>
              </div>
              <div className="skills-titles">
                <h3 className="skills-name">Database Management Systems</h3>
                <span className="skills-description">MySQL</span>
              </div>
              <div className="skills-titles">
                <h3 className="skills-name">Computer</h3>
                <span className="skills-description">
                  Word, Excel, PowerPoint
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
