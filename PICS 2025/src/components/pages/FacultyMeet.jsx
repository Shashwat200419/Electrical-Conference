import React from "react";

import "../css/facultyMeet.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const FacultyMeet = () => {
  return (
    <div className="mainDiv">
      <p className="facultyMeet" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Meet the Faculty Candidates Poster Session</h1></p>
      <FooterSection/>
    </div>
  )
};
