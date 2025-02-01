// import React from "react";
import "./IpadList.css";

import IpadMini from "../assets/ipadmini.png";
import Ipadpro from "../assets/ipadpro.png";
import Ipadpro1 from "../assets/Ipadpro1.png";
import IpadAir from "../assets/ipadAir.png";
import IpadAir1 from "../assets/ipadAir1.png";
import Ipad1 from "../assets/ipad1.png";



const IpadList = () => {
  return (
    <div className="ipad-list-container">
      <div className="ipad-items">
        <div className="ipad-card">
          <img src={IpadMini} alt="MacBook Pro" />
          <p>IpadMini</p>
        </div>
        <div className="ipad-card">
          <img src={Ipadpro} alt="iMac" />
          <p>iMac</p>
        </div>
        <div className="ipad-card">
          <img src={Ipadpro1} alt="Mac Mini" />
          <p>Ipadpro</p>
        </div>
        <div className="ipad-card">
          <img src={IpadAir} alt="MacBook Air" />
          <p>IpadAir</p>
        </div>
        <div className="ipad-card">
          <img src={IpadAir1} alt="MacBook Air1" />
          <p>IpadAir</p>
        </div>
        <div className="ipad-card">
          <img src={Ipad1} alt="MacBook Pro" />
          <p>Ipad</p>
        </div>
        <div className="view-all">
        VIEW ALL →
      </div>
      </div>
    </div>
  );
};

export default IpadList;
