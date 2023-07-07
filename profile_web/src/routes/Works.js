import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WorksImg from "../components/WorksImg";
import Work from "../components/Work";

const Works = () => {
  return (
    <div>
      <Navbar />
      <WorksImg heading="WORKS." text="Some of my most recent works" />
      <Work />
      <Footer />
    </div>
  );
};

export default Works;
