import React, { useState, useEffect } from "react";
import macbookImage from "../assets/macbookImage.jpg";
import Iphone1 from "../assets/Iphone1.jpg";
import Iphone2 from "../assets/Iphone2.jpg";
import Mac1 from "../assets/Mac1.jpg";
import "bootstrap/dist/css/bootstrap.css";
//  import Container from "react-bootstrap/Container";

import "./MacBookBanner.css";

const MacBookBanner = () => {
  const images = [macbookImage, Iphone1, Iphone2, Mac1];
  const [currentIndex, setCurrentIndex] = useState(0); // Set default value to 0

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  // const handleKnowMore = () => {
  //   alert("Redirecting to more details about the MacBook Pro...");
  // };

  return (
    <>
   
      <div className="banner-content">
        <div className="banner-image">
          <div className="image-container">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          </div>
        </div>
      </div>


    
    

    <div className="help-heading"> <h2> Explore What’s New</h2></div>
    <div className="sub-head-offer">
      <p>Get latest updates on trending products!

</p>
    </div>
    </>
    
  );
};

export default MacBookBanner;
