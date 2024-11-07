import React from "react";

import "../css/author.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const Author = () => {
  return (
    <div className="mainDiv">
      <p className="author" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Author Instructions</h1></p>
      <FooterSection/>
    </div>
  )
};
