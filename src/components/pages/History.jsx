import React from "react";

import "../css/history.css"
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const History = () => {
  return(
    <div className="mainDiv">
      <p className="history" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>History</h1></p>
      <FooterSection/>
    </div>
  )
};
