// import React from "react";
import "./Navcat.css";

import Iphone from "../assets/Iphone.png";
import Mac from "../assets/Mac.png";
import Ipad from "../assets/Ipad.png";
import Watch from "../assets/Watch.png";
import Airpods from "../assets/Airpods.png";
import Tvhome from "../assets/Tv&home.png";

const Navcat = ({ onIphoneClick, onMacClick,onIpadClick,onWatchClick,onAirpodsClick,onTvHomeClick}) => {
  return (
    <div className="navbar-container">
      <div className="img-container">
        <div
          className="product-item"
          onClick={onIphoneClick}
          style={{ cursor: "pointer" }}
        >
          <img className="product-image1" src={Iphone} alt="iPhone" />
          <p className="product-label">iPhone</p>
        </div>
        <div
          className="product-item"
          onClick={onMacClick}
          style={{ cursor: "pointer" }}
        >
          <img className="product-image1" src={Mac} alt="Mac" />
          <p className="product-label">Mac</p>
        </div>
        <div className="product-item"
         onClick={onIpadClick}
         style={{ cursor: "pointer" }}
         >
          <img className="product-image1" src={Ipad} alt="iPad" />
          <p className="product-label">iPad</p>
        </div>
        <div className="product-item"
                 onClick={onWatchClick}
                 style={{ cursor: "pointer" }}
                 >
          <img className="product-image1" src={Watch} alt="Watch" />
          <p className="product-label">Watch</p>
        </div>
        <div className="product-item"
          onClick={onAirpodsClick}
          style={{ cursor: "pointer" }}
         >
          <img className="product-image1" src={Airpods} alt="AirPods" />
          <p className="product-label">AirPods</p>
        </div>
        <div className="product-item"
         onClick={onTvHomeClick}
         style={{ cursor: "pointer" }}
         >
          <img className="product-image1" src={Tvhome} alt="TV & Home" />
          <p className="product-label">TV & Home</p>
        </div>
      </div>
    </div>
  );
};

export default Navcat;
