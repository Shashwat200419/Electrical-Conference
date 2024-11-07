import React from "react";

import "../css/studentInfo.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const StudentInfo = () => {
  return (
    <div className="mainDiv">
      <p className="studentInfo" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Student Information</h1></p>
      <FooterSection/>
    </div>
  )
};
