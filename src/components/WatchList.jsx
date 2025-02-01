// import React from "react";
import "./WatchList.css";

import Watch1 from "../assets/watch1.png";
import Watch2 from "../assets/watch2.png";
import Watch3 from "../assets/watch3.png";
import Watch4 from "../assets/watch4.png";



const MacList = () => {
  return (
    <div className="watch-list-container">
      <div className="watch-items">
        <div className="watch-card">
          <img src={Watch1} alt="MacBook Pro" />
          <p>MacBook Pro</p>
        </div>
        <div className="watch-card">
          <img src={Watch2} alt="iMac" />
          <p>iMac</p>
        </div>
        <div className="watch-card">
          <img src={Watch3} alt="Mac Mini" />
          <p>Mac Mini</p>
        </div>
        <div className="watch-card">
          <img src={Watch4} alt="MacBook Air" />
          <p>MacBook Air</p>
        </div>
        
        
        <div className="view-all">
        VIEW ALL →
      </div>
      </div>
    </div>
  );
};

export default MacList;
