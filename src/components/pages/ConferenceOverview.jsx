import React from "react";

import "../css/ConferenceOverview.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const ConferenceOverview = () => {
  return (
    <div className="mainDiv">
      <p className="ConferenceOverview" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Conference Overview</h1></p>
      <h3 className="h3">Updating soon...</h3>
      <FooterSection/>
    </div>
  )
};
