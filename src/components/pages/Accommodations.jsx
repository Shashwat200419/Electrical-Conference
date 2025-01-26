import React from "react";

import "../css/accommodations.css"
import MapTilerComponent from "../MapTilerComponent";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const Accommodations = () => {
  return (
    <div className="mainDiv">
      <p className="accommodations" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Accommodations</h1></p>
      <div className="accomodation_info">
        <p className="first">
        <h2>Accommodation to the participants will be provided in NIT Hamirpur, on sharing basis.</h2>
        <h3>In case you wish to explore hotel options for you/your family, you can explore the below options.</h3>
        </p>
        <p className="second">
          <h2>Some of the hotel options nearest to the Institute are as follows:</h2>
          <span>1. Hotel Hamir: Ph: 01972 222608.</span>
          <span>Website: <a href="http://hptdc.in/index.php/the-hamir-hamirpur/">http://hptdc.in/index.php/the-hamir-hamirpur/</a></span>
          {/* <span>Website: http://hptdc.in/index.php/the-hamir-hamirpur/</span> */}
          <span>2. Hotel Chopra Residency: Ph: +91 98164 69849, 01972 225816</span>
        </p>
      </div>
      <MapTilerComponent/>
      <FooterSection/>
    </div>
  )
};
