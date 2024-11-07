import React from "react";

import "../css/workshops.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const Workshops = () => {
  return (
    <div className="mainDiv">
      <p className="workshops" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Workshops</h1></p>
      <FooterSection/>
    </div>
  )
};
