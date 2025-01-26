import React from 'react';
import '../components/css/Card.css';

const Card = ({ image, name, position }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <div className="card-content">
        <h2 className="card-name">{name}</h2>
        <p className="card-position">{position}</p>
      </div>
    </div>
  );
};

export default Card;


