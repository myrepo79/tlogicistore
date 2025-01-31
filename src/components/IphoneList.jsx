// import React from "react";
import "./IphoneList.css";

import Iphone16 from "../assets/Iphone16.png";
import Iphone16Plus from "../assets/Iphone16Plus.png";
import Iphone16Pro from "../assets/Iphone16Pro.png";
import Iphone16ProMax from "../assets/Iphone16ProMax.png";
import Iphone15 from "../assets/Iphone15.png";
import Iphone15Plus from "../assets/Iphone15Plus.png";

const IphoneList = () => {
  return (
    <div className="iphone-list-container">
      <div className="iphone-items">
        <div className="iphone-card">
          <img src={Iphone16} alt="iPhone 16" />
          <p>iPhone 16</p>
        </div>
        <div className="iphone-card">
          <img src={Iphone16Plus} alt="iPhone 16 Plus" />
          <p>iPhone 16 Plus</p>
        </div>
        <div className="iphone-card">
          <img src={Iphone16Pro} alt="iPhone 16 Pro" />
          <p>iPhone 16 Pro</p>
        </div>
        <div className="iphone-card">
          <img src={Iphone16ProMax} alt="iPhone 16 Pro Max" />
          <p>iPhone 16 Pro Max</p>
        </div>
        <div className="iphone-card">
          <img src={Iphone15} alt="iPhone 15" />
          <p>iPhone 15</p>
        </div>
        <div className="iphone-card">
          <img src={Iphone15Plus} alt="iPhone 15 Plus" />
          <p>iPhone 15 Plus</p>
        </div>
      </div>
      <div className="view-all">
        VIEW ALL →
      </div>
    </div>
  );
};

export default IphoneList;
