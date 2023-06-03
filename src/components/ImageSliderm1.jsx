import React, { useState, useEffect } from 'react';
import '../estilos/ImageSliderm1.css';
import imagen1 from '../assets/imagenes/slider1.png';
import imagen2 from '../assets/imagenes/slider2.png';
import imagen3 from '../assets/imagenes/slider3.png';
import imagen4 from '../assets/imagenes/slider4.png';


function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [imagen1, imagen2, imagen3, imagen4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide} alt={`Imagen ${index + 1}`} className="centered-image" />
        </div>
      ))}
    </div>
  );
}

export default Slider;