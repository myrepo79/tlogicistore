// import React from "react";
import "./AppleResellers.css";
import aptronix from "../assets/aptronix.png";
import futureworld from "../assets/futureworld.png";
import idelta from "../assets/idelta.png";
import idestiny from "../assets/idestiny.png";
import imagineAmple from "../assets/imagine_ample.png";
import imagineKBRL from "../assets/imagine_kbrl.png";
import imagineSyame from "../assets/imagine_syame.png";
import imagineTresor from "../assets/imagine_tresor.png";
import Inspire from "../assets/inspire.png";
import Invent from "../assets/invent.png";
import Iplanet from "../assets/iplanet.png";
import Ivenus from "../assets/ivenus.png";
import Uni from "../assets/uni.png";

const resellers = [
  { name: "Aptronix", img: aptronix },
  { name: "FutureWorld", img: futureworld },
  { name: "iDelta", img: idelta },
  { name: "iDestiny", img: idestiny },
  { name: "Imagine Ample", img: imagineAmple },
  { name: "Imagine KBRL", img: imagineKBRL },
  { name: "Imagine Syame", img: imagineSyame },
  { name: "Imagine Tresor", img: imagineTresor },
  { name: "Inspire", img: Inspire },
  { name: "Invent", img: Invent },
  { name: "iPlanet", img: Iplanet },
  { name: "iVenus", img: Ivenus },
  { name: "Uni", img: Uni },
];

const AppleResellers = () => {
  return (
    <div className="container1">
      <h2 className="title1">Apple Premium Resellers</h2>
      <div className="grid-container1">
        {resellers.map((reseller, index) => (
          <div key={index} className="reseller-card1">
            <div className="image-container1">
              <img
                src={reseller.img}
                alt={reseller.name}
                className="reseller-image1"
              />
            </div>
            <p className="reseller-name1">{reseller.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppleResellers;