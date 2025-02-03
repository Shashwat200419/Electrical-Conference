import React, { useState } from 'react';
// import '../styling/HeroSection.css';
import "../components/css/HeroSection.css"
import logo from "../assets/logo3.png";
import nlogo from "../assets/nlogo.png";
import nlogoblue from "../assets/PICSLOGO.png";
import d from "../assets/d.png";
import b from "../assets/b.png";
import a from "../assets/a.png";
import c from "../assets/c.png";
import e from "../assets/e.png";
import m from "../assets/m.jpeg";

const HeroSection = () => {
  const images = [
    // 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', 
    // 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', 
    // 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', 
    'https://media.glassdoor.com/l/91/0a/10/c4/nit-hamirpur.jpg?signature=5b1e26e2600f530c2c375b3a916a5e81604a02dcdcdabe0089c0267c13c2222e',
     m,b,c,e,
    // 'https://media.glassdoor.com/lst2x/23/92/73/d2/nit-hamirpur.jpg?signature=6923482caaae3bd30aac0ac58270b1ece1579b64679993808b9ff7c0f6dfda99',
    'https://media.glassdoor.com/lst2x/91/0a/10/c4/nit-hamirpur.jpg?signature=0db4cb4123445c279aba79ef7675736bd7ecffe0e6ba79d1f6d10fd7bfbdbdcf',
    // 'https://media.glassdoor.com/l/91/0a/10/c4/nit-hamirpur.jpg?signature=5b1e26e2600f530c2c375b3a916a5e81604a02dcdcdabe0089c0267c13c2222e',
    // 'https://media.glassdoor.com/lst2x/23/92/73/d2/nit-hamirpur.jpg?signature=6923482caaae3bd30aac0ac58270b1ece1579b64679993808b9ff7c0f6dfda99',
    // 'https://media.glassdoor.com/lst2x/91/0a/10/c4/nit-hamirpur.jpg?signature=0db4cb4123445c279aba79ef7675736bd7ecffe0e6ba79d1f6d10fd7bfbdbdcf',
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="hero-section">
      <div className="left-container">
        <button className="arrow-left" onClick={handlePrev}>
          &#9664;
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slide-image"
        />
        <button className="arrow-right" onClick={handleNext}>
          &#9654;
        </button>
      </div>
      <div className="right-container">
        <div className="logo">
        <img
            src={nlogoblue}
            // src="https://confcats-siteplex.s3.us-east-1.amazonaws.com/cdc25/large_Logo_CDC_2025_3e6db1dc79.png"
            alt="PICS Logo"
            className="logo-image"
            height={100}
            width={100}
          />
        </div>
        <div className="headdiv"><h1 className='head'>PICS-2025</h1></div>
        <div className="subheaddiv"><h3 className='sub-head'>1st International Conference on Power and Intelligent Control System</h3></div>
        <div className="datediv"><p className='date'>July 04 - 05, 2025</p></div>
        <div className="departmentdiv"><p className='department'>Department of Electrical Engineering</p></div>
        <div className="locationdiv"><p className='location'>National institute of technology, Hamirpur</p></div>
        <div className="descriptivediv"><p className='descriptive-text'>The Power and Intelligent Control Systems (PICS-2025) is the first
 international conference dedicated to power engineering, control systems,
 and artificial intelligence. It brings together researchers, academicians,
 and practitioners to share ideas, discuss emerging technologies, and
 inspire transformative advancements. Join us in shaping the future of
 these dynamic fields!</p></div>
      </div>

      </div>
  );
};

export default HeroSection;