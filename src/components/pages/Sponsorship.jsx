import React from "react";

import "../css/Sponsorship.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const Sponsorship = () => {
  return (
    <div className="mainDiv">
      <p className="Sponsorship" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Sponsorship</h1></p>
      <div className="sponData">
        <p>Industries/Organizations and other institutes are requested to sponsor/co-sponsor this conference toensure its grand success. The sponsors/co-sponsors will be duly acknowledged during the conference.The rates are given below: <br /> Key Sponsors (6 free delegates): Rs. 60,000/- <br /> Sponsors (4 free delegates): Rs. 40,000/- <br /> Co-sponsors (2 free delegates): Rs. 25,000/- <br /> Donor (1 free delegate): Rs. 15,000/- <br /> The payment may be sent through online mode via SBI Collect.</p>
        <h4> Advertisement in Souvenir</h4>
        <span>Back cover(Colour) Rs. 15,000/-</span>
        <span>Inner cover(Colour) Rs. 10,000/-</span>
        <span>Full page Rs. 5,000/-</span>
        <span>Half page Rs. 2,500/-</span>
      </div>
      <FooterSection/>
    </div>
  )
};
