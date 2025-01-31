// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductCategories .css";

// Import images
import AirPodsImage from "../assets/AirPodsImage.jpeg";
import TVHomeImage from "../assets/TVHomeImage.jpeg";
import BeatsImage from "../assets/BeatsImage.jpeg";
import WatchImage1 from "../assets/WatchImage1.jpeg";
import iPhoneImage1 from "../assets/iPhoneImage1.jpeg";
import MacImage from "../assets/MacImage.jpeg";
import IpadImage from "../assets/IpadImage.jpeg";

const categories = [
  { name: "AirPods", imageUrl: AirPodsImage },
  { name: "TV & Home", imageUrl: TVHomeImage },
  { name: "Beats by Dr. Dre", imageUrl: BeatsImage },
  { name: "Apple Watch", imageUrl: WatchImage1 },
  { name: "iPhone", imageUrl: iPhoneImage1 },
  { name: "Mac", imageUrl: MacImage },
  { name: "Ipad", imageUrl: IpadImage },
];

const ProductCategories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="product-carousel">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div className="product-card" key={index}>
            <img
              src={category.imageUrl}
              alt={category.name}
              className="product-image"
            />
            <p className="product-name">{category.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCategories;
