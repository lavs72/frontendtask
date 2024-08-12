import React, { useRef } from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import './App.css'; // Import the CSS file
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [showSlider, setShowSlider] = useState(false);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleFastClick = () => {
    setShowSlider(true);
    setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(1); // Move to the third slide (index 2) when "Fast" is clicked
      }
    }, 100); // Delay to ensure the slider is rendered before going to a slide
  };

  return (
    <div className="app">
       <header className="header">
        <nav className="nav">
        
          <ul className="nav-list">
          
            <li className="nav-item">AI Innovations</li>
            <li className="nav-item">Features</li>
            <li className="nav-item">Safety</li>
            <li className="nav-item">By Google</li>
            <li className="nav-item">Extensions</li>
            
          </ul>
        </nav>
        
      </header>

      <main className="main-content">
        <div className="hero-section">
          <div className="container">
            <img src="https://www.google.com/chrome/static/images/chrome-logo.svg" alt="Google Chrome Logo" className="chrome-logo"/>
          </div>
          
          <h1 className="hero-title">The browser built to be yours</h1>
          <div className="options-box">
            <span className="option">Updates</span>
            <span className="option">AI</span>
            <span className="option">Yours</span>
            <span className="option">Safe</span>
            <span className="option" onClick={handleFastClick}>Fast</span>
            <span className="option">By Google</span>
          </div>
          <p className="download-text">
            Need the Chrome installer? <a href="#" className="download-link">Download here</a>.
          </p>
        </div>
        {showSlider && (
          <Slider ref={sliderRef} {...settings} className="slider">
            <div>
              <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" className="slide-image" />
            </div>
            <div>
              <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" className="slide-image" />
            </div>
            <div>
              <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" className="slide-image" />
            </div>
          </Slider>
        )}
      </main>
    </div>
  );
}

export default App;