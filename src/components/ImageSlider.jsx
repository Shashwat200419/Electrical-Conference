import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import "../components/css/ImageSlider.css"

const ImageSlider = () => {
  const settings = {
    dots: true,           // Shows navigation dots
    infinite: true,       // Allows infinite scrolling
    speed: 500,           // Transition speed in ms
    slidesToShow: 1,      // Number of slides to show at once
    slidesToScroll: 1,    // Number of slides to scroll per action
    autoplay: true,       // Auto-play the slides
    autoplaySpeed: 1000   // Auto-play interval in ms
  };

  // Images to be displayed in the slider
  const images = [
    'https://media.glassdoor.com/l/91/0a/10/c4/nit-hamirpur.jpg?signature=5b1e26e2600f530c2c375b3a916a5e81604a02dcdcdabe0089c0267c13c2222e',
    'https://media.glassdoor.com/lst2x/23/92/73/d2/nit-hamirpur.jpg?signature=6923482caaae3bd30aac0ac58270b1ece1579b64679993808b9ff7c0f6dfda99',
    'https://media.glassdoor.com/lst2x/91/0a/10/c4/nit-hamirpur.jpg?signature=0db4cb4123445c279aba79ef7675736bd7ecffe0e6ba79d1f6d10fd7bfbdbdcf',
    'https://media.glassdoor.com/l/91/0a/10/c4/nit-hamirpur.jpg?signature=5b1e26e2600f530c2c375b3a916a5e81604a02dcdcdabe0089c0267c13c2222e',
    'https://media.glassdoor.com/lst2x/23/92/73/d2/nit-hamirpur.jpg?signature=6923482caaae3bd30aac0ac58270b1ece1579b64679993808b9ff7c0f6dfda99',
    'https://media.glassdoor.com/lst2x/91/0a/10/c4/nit-hamirpur.jpg?signature=0db4cb4123445c279aba79ef7675736bd7ecffe0e6ba79d1f6d10fd7bfbdbdcf',
    'https://media.glassdoor.com/l/91/0a/10/c4/nit-hamirpur.jpg?signature=5b1e26e2600f530c2c375b3a916a5e81604a02dcdcdabe0089c0267c13c2222e',
    'https://media.glassdoor.com/lst2x/23/92/73/d2/nit-hamirpur.jpg?signature=6923482caaae3bd30aac0ac58270b1ece1579b64679993808b9ff7c0f6dfda99',
    'https://media.glassdoor.com/lst2x/91/0a/10/c4/nit-hamirpur.jpg?signature=0db4cb4123445c279aba79ef7675736bd7ecffe0e6ba79d1f6d10fd7bfbdbdcf',
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
