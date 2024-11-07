import React from "react";

import "../css/accommodations.css"
import MapTilerComponent from "../MapTilerComponent";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const Accommodations = () => {
  return (
    <div className="mainDiv">
      <p className="accommodations" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Accommodations</h1></p>
      <MapTilerComponent/>
      <FooterSection/>
    </div>
  )
};
