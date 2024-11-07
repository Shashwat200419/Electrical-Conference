import React from "react";

import "../css/papers.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const Papers = () => {
  return (
    <div className="mainDiv">
      <p className="papers" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Call for Papers</h1></p>
      <FooterSection/>
    </div>
  )
};
