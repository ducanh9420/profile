import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WorksImg from "../components/WorksImg";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <WorksImg heading="CONTACT." text="Let's collaborate!" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
