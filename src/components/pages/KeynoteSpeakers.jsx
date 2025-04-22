import React from "react";

import "../css/KeynoteSpeakers.css";
import backgroundImage from "../../assets/background.jpg.jpeg";
import FooterSection from "../FooterSection";
import keynote_speaker from "../../assets/keynote_speakers.png";
import a from "../../assets/1KS.png";
import b from "../../assets/2KS.png";
import c from "../../assets/3KS.png";
import d from "../../assets/4KS.png";
import e from "../../assets/5KS.png";



const cards = [
  {
    id: 2,
    image: b,
    name: 'Prof. Radhakant Padhi',
    description: 'IISc Bangalore',
  },
  {
    id: 3,
    image: c,
    name: 'Prof. Bhaveshkumar R.Bhalija',
    description: 'IIT Roorkee',
  },
  {
    id: 1,
    image: a,
    name: 'Prof. Bhim Singh',
    description: 'IIT Delhi',
  },
  {
    id: 4,
    image: d,
    name: 'Prof. Rajesh Kumar',
    description: 'University of Johannesburg',
  },
  {
    id: 5,
    image: e,
    name: 'Prof. Sisir Kumar Nayak',
    description: 'IIT Guwahati',
  },
];

export const KeynoteSpeakers = () => {
  return (
    <div className="mainDiv">
      <p className="KeynoteSpeakers" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'}}><h1>Keynote Speakers</h1></p>
      {/* <div className="dataContent">
        <p>Updating Soon...</p>
        <img src={keynote_speaker} alt="img" />
      </div> */}
      <div className="card-grid-container">
      {/* <h2 className="heading">Our Picks</h2> */}
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{card.name}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      <FooterSection/>
    </div>
  )
};
