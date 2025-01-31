// import React from "react";
import "./MacList.css";

import MacBookPro from "../assets/MacBookPro.png";
import iMac from "../assets/iMac.png";
import MacMini from "../assets/MacMini.png";
import MacBookAir from "../assets/MacBookAir.png";
import MacBookAir1 from "../assets/MacBookAir1.png";
import MacBookPro1 from "../assets/MacBookPro1.png";



const MacList = () => {
  return (
    <div className="mac-list-container">
      <div className="mac-items">
        <div className="mac-card">
          <img src={MacBookPro} alt="MacBook Pro" />
          <p>MacBook Pro</p>
        </div>
        <div className="mac-card">
          <img src={iMac} alt="iMac" />
          <p>iMac</p>
        </div>
        <div className="mac-card">
          <img src={MacMini} alt="Mac Mini" />
          <p>Mac Mini</p>
        </div>
        <div className="mac-card">
          <img src={MacBookAir} alt="MacBook Air" />
          <p>MacBook Air</p>
        </div>
        <div className="mac-card">
          <img src={MacBookAir1} alt="MacBook Air1" />
          <p>MacBook Air</p>
        </div>
        <div className="mac-card">
          <img src={MacBookPro1} alt="MacBook Pro" />
          <p>MacBook Pro</p>
        </div>
        <div className="view-all">
        VIEW ALL →
      </div>
      </div>
    </div>
  );
};

export default MacList;
