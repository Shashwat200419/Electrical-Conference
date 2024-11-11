import React from "react";

import "../css/ImpDates.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const ImpDates = () => {
  return (
    <div className="mainDiv">
      <p className="ImpDates" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Important Dates</h1></p>
      <FooterSection/>
    </div>
  )
};
