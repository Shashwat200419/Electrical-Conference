import React from "react";

import "../css/ConferenceOverview.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";

export const ConferenceOverview = () => {
  return (
    <div className="mainDiv">
      <p className="ConferenceOverview" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Conference Overview</h1></p>
      <div className="info">
      <p>The conference covers diverse research areas, including but not limited to the following:</p>
      <div className="information1">
        <h3>Track 1 : Power Engineering</h3>
        <ul>
          <li>Power System</li>
          <li>Power Electronics and Applications</li>
          <li>Electric Transportation</li>
          <li>Renewable Energy</li>
          <li>Condition Monitoring of Power Apparatus</li>
        </ul>
      </div>
      <div className="information2">
        <h3> Track 2 : Control and Automation</h3>
        <ul>
          <li>Cyber Physical System</li>
          <li>Robust and Adaptive Control</li>
          <li>Robotics and Intelligent Control</li>
          <li>Multiagent System</li>
          <li>Modeling and Simulation</li>
          <li>Internet of Things (IoT)</li>
        </ul>
      </div>
      <div className="information3">
        <h3> Track 3 : Artificial Intelligence (AI)</h3>
        <ul>
          <li>Machine Learning (ML) and Optimization</li>
          <li>AI/ML in Electrical Engineering</li>
          <li>Generative AI</li>
          <li>Natural Language Processing (NLP)</li>
          <li>AI/ML in Healthcare</li>
          <li>Speech & Signal Processing</li>
          <li>Computer Vision</li>
        </ul>
      </div>
      </div>
      <FooterSection/>
    </div>
  )
};
