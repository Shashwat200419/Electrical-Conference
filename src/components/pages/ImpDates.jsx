import React from "react";

import "../css/ImpDates.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const ImpDates = () => {
  return (
    <div className="mainDiv">
      <p className="ImpDates" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Important Dates</h1></p>
      <div className="dataHeader">
        <p className="Date">&#8226; <span className="span">Full Paper Submission Deadline:</span>  March 31, 2025</p>
        <p className="Date">&#8226; <span className="span">Notification of Acceptance:</span>  May 15, 2025</p>
        <p className="Date">&#8226; <span className="span">Camera-Ready Paper Submission:</span>  June 05, 2025</p>
        <p className="Date">&#8226; <span className="span">Last date for Registration:</span>  June 15, 2025</p>
        <p className="Date2">&#8226; <span className="span">Date of Conference:</span>  July 4-5, 2025</p>
      </div>
      <FooterSection/>
    </div>
  )
};
