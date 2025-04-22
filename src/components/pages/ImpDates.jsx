import React from "react";

import "../css/ImpDates.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const ImpDates = () => {
  return (
    <div className="mainDiv">
      <p className="ImpDates" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Important Dates</h1></p>
      <div className="dataHeader">
        <div className="datesec">
          <p className="dps">Full Paper Submission Deadline : </p>
          <p className="dpe">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<s>31 March, 2025</s>&nbsp;&nbsp;<s>21 April, 2025</s>&nbsp;&nbsp;&nbsp;05 May, 2025 (Extended)</p>
        </div>
        <div className="datesec">
          <p className="dps">Notification of Acceptance : </p>
          <p className="dpe">May 15, 2025</p>
        </div>
        <div className="datesec">
          <p className="dps">Camera-Ready Paper Submission : </p>
          <p className="dpe">June 05, 2025</p>
        </div>
        <div className="datesec">
          <p className="dps">Last date for Registration :</p>
          <p className="dpe">June 15, 2025</p>
        </div>
        <div className="datesec">
          <p className="dps">Date of Conference :</p>
          <p className="dpe">July 4-5, 2025</p>
        </div>
      </div>
      <FooterSection/>
    </div>
  )
};