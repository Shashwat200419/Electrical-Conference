import React from "react";

import "../css/Contact.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";
import Card from "../Card";

export const Contact = () => {
  return (
    <div className="mainDiv">
      <p className="Contact" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Contact</h1></p>
      {/* <div className="Card1">
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="John Doe" 
        position="Software Engineer" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      <Card 
        image="https://via.placeholder.com/300x200" 
        name="Jane Smith" 
        position="Project Manager" 
      />
      </div> */}
      <div className="contact_info">
        <h2>For any query, Contact us :</h2>
        <span>Dr. Ram Niwash Mahia (Email: ram@nith.ac.in, Phone: 7976332739),</span>
        <span>Dr. Katam Nishanth (Email: katam@nith.ac.in, Phone:9441843624),</span>
        <span className="last_span">Dr. Pankaj K. Mishra (Email: pmishra@nith.ac.in, Phone:9101514943)</span>
      </div>
      <FooterSection/>
    </div>
  )
};
