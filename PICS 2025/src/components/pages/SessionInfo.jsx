import React from "react";

import "../css/SessionInfo.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const SessionInfo = () => {
  return (
    <div className="mainDiv">
      <p className="SessionInfo" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Session Information</h1></p>
      <FooterSection/>
    </div>
  )
};
