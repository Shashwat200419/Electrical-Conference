import React from "react";

import "../css/KeynoteSpeakers.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";
import keynote_speaker from "../../assets/keynote_speakers.png";

export const KeynoteSpeakers = () => {
  return (
    <div className="mainDiv">
      <p className="KeynoteSpeakers" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Keynote Speakers</h1></p>
      <div className="dataContent">
        {/* <p>Updating Soon...</p> */}
        <img src={keynote_speaker} alt="img" />
      </div>
      <FooterSection/>
    </div>
  )
};
