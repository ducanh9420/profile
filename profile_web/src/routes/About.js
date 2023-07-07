import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WorksImg from "../components/WorksImg";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <WorksImg heading="ABOUT." text="Im a part-time introvert person." />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
