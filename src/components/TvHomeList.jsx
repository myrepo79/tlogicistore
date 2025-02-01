// import React from "react";
import "./TvHomeList.css";

import Tv1 from "../assets/tv1.png";
import Tv2 from "../assets/tv2.png";
import Tv3 from "../assets/tv3.png";
import tv4 from "../assets/tv4.jpg";
import tv5 from "../assets/tv5.jpg";
import tv6 from "../assets/tv6.jpg";





const TvHomeList = () => {
  return (
    <div className="tvhome-list-container">
      <div className="tvhome-items">
        <div className="tvhome-card">
          <img src={Tv1} alt="MacBook Pro" />
          <p>TV </p>
        </div>
        <div className="tvhome-card">
          <img src={Tv2} alt="iMac" />
          <p>HomePodMini</p>
        </div>
        <div className="tvhome-card">
          <img src={Tv3} alt="Mac Mini" />
          <p>HomePod </p>
        </div>
        <div className="airpode-card">
          <img src={tv4} alt="MacBook Air" />
          <p>MacBook Air</p>
        </div>
        <div className="airpode-card">
          <img src={tv5} alt="MacBook Air" />
          <p> Tv</p>
        </div>
        <div className="airpode-card">
          <img src={tv6} alt="MacBook Air" />
          <p>Tv</p>
        </div>
        
        <div className="view-all">
        VIEW ALL →
      </div>
      </div>
    </div>
  );
};

export default TvHomeList;
