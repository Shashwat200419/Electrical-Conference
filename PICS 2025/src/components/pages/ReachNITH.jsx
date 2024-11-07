import React from "react";

import "../css/ReachNITH.css";
// import "../css/accommodations.css"
// import MapTilerComponent1 from "../MapTilerComponent1";
import MapTilerComponent1 from "../MapTilerComponent1";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const ReachNITH = () => {
  return (
    <div className="mainDiv">
      <p className="ReachNITH" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>How to reach NIT-H</h1></p>
      <div className="book">
        <div className="pg1">
          <h3>Road Link</h3>
          <p>The campus is situated at Anu in Hamirpur district of Himachal Pradesh and is 4 Kms from main bus stand of Hamirpur on Hamirpur
             Tauni Devi road. The city of Hamirpur is well connected with the rest of the country by road. Hamirpur is at a distance of about
             480 Kms from Delhi.</p>
          <h3>Rail Link</h3>
          <p>Nearest broad gauge train head is at Una (Himachal Pradesh ), at a distance of 80 Kms from Hamirpur. Una is well linked to all parts
             of India and journey is of nine hours from Old Delhi Railway Station. Taxi/Bus services are available from Hamirpur to Una. NIT Hamirpur
              is around 4 kilometers away from Hamirpur bus stand.<br/> To find details about train service from different cities towards Una, visit <a href="http://www.indianrail.gov.in/">http://www.indianrail.gov.in/</a>.</p>
          <h3>Air Link</h3>
          <p>The nearest airport is at Dharamshala (Gaggal, district Kangra) which is about 75 Kms from Hamirpur. Currently, Kingfisher Airlines operates from Delhi to Dharamshala.
             For more information, please visit the website of Kingfisher Airlines..</p>       
        </div>
        <div className="pg2">
          <MapTilerComponent1/>
          </div>  
      </div>
      <FooterSection/>
    </div>
  )
};
