// import React from "react";
import Slider from "react-slick";
import "./SliderComponent.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import resellerImage from "../assets/resellerImage.png";
import iphoneImage from "../assets/iphoneImage.png";
import appleCareImage from "../assets/appleCareImage.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "10px", // Add some space to the sides of the carousel
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <>
      <div className="help-heading">
        <h1>Offer Essentials</h1>
      </div>
      <div className="sub-head-offer">
        <p>Your smart guide to leading offers!</p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="slide">
            <div className="card">
              <img src={resellerImage} alt="Apple Premium Resellers" />
              <div className="card-content">
                <h3>Why Apple Premium Resellers</h3>
                <p>
                  Complete product range. Trained experts. Irresistible offers.
                </p>
                <a href="#">Know more &gt;</a>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="slide">
            <div className="card">
              <img src={iphoneImage} alt="iPhone for life" />
              <div className="card-content">
                <h3>Always have the latest iPhone. For life.</h3>
                <p>Upgrade to iPhone with an EMI starting ₹2341 pm*</p>
                <a href="#">Know more &gt;</a>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="slide">
            <div className="card">
              <img src={appleCareImage} alt="AppleCare+" />
              <div className="card-content">
                <h3>Peace of mind. Included with AppleCare+ for iPhone.</h3>
                <p>Get service and support from Apple experts.</p>
                <a href="#">Know more &gt;</a>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="slide">
            <div className="card">
              <img src={image4} alt="Exclusive Deals" />
              <div className="card-content">
                <h3>Exclusive Deals</h3>
                <p>Explore exclusive discounts on Apple products.</p>
                <a href="#">Know more &gt;</a>
              </div>
            </div>
          </div>

          {/* Slide 5 */}
          <div className="slide">
            <div className="card">
              <img src={image5} alt="Fast Delivery" />
              <div className="card-content">
                <h3>Fast Delivery</h3>
                <p>Get your Apple products delivered quickly and safely.</p>
                <a href="#">Know more &gt;</a>
              </div>
            </div>
          </div>

          {/* Slide 6 */}
          <div className="slide">
            <div className="card">
              <img src={image6} alt="Expert Support" />
              <div className="card-content">
                <h3>Expert Support</h3>
                <p>24/7 support from certified Apple experts.</p>
                <a href="#">Know more &gt;</a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SliderComponent;
