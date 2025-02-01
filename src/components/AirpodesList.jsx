// import React from "react";
import "./AirpodesList.css";

import Airpode1 from "../assets/airpode1.png";
import Airpode2 from "../assets/airpode2.png";
import Airpode3 from "../assets/airpode3.jpg";
import Airpode4 from "../assets/airpode4.jpg";



const AirpodesList = () => {
  return (
    <div className="airpode-list-container">
      <div className="airpode-items">
        <div className="airpode-card">
          <img src={Airpode1} alt="MacBook Pro" />
          <p>Arpodes</p>
        </div>
        <div className="airpode-card">
          <img src={Airpode2} alt="iMac" />
          <p>Arpodes</p>
        </div>
        <div className="airpode-card">
          <img src={Airpode3} alt="Mac Mini" />
          <p>Arpodes</p>
        </div>
        <div className="airpode-card">
          <img src={Airpode4} alt="MacBook Air" />
          <p>Arpodes</p>
        </div>
        
        
        <div className="view-all">
        VIEW ALL →
      </div>
      </div>
    </div>
  );
};

export default AirpodesList;
