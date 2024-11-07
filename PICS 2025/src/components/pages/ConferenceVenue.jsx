import React from "react";

import "../css/ConferenceVenue.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const ConferenceVenue = () => {
  return (
    <div className="mainDiv">
      <p className="ConferenceVenue" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>The Conference Venue</h1></p>
      <FooterSection/>
    </div>
  )
};
