// import React from "react";
import "./ProductShowcase.css";

import iphone3 from "../assets/iphone3.png";
import Watchultra from "../assets/Watch-ultra.png";
import Airpodes1 from "../assets/Airpodes1.png";
import Airpodes2 from "../assets/Airpodes2.png";

// const products = [
//   {  src1: iphone3, alt1: "iPhone 16" },
//   {  src2: Watchultra, alt2: "Apple Watch Ultra 2" },
//   {  src3: Airpodes1, alt3: "Beats Solo Buds" },
//   { src4: Airpodes2, alt4: "Beats Solo 4" },
// ];

const ProductShowcase = () => {
  return (
    <>
      {/* <div className="product-showcase-container">
      {products.map((product) => (
        <div  className="product-card">
          <img src={product.src1} alt={product.alt1} className="product-image" />
        </div>
        
        
      ))}
    </div>
    </>
  );
}; */}

      <div>
        <div className="Image-card-container">
          <div className="Image-card1">
            <img src={iphone3} alt="iPhone 16" />
          </div>
          <div className="Image-card2">
            <img src={Watchultra} alt="Apple Watch Ultra 2" />
          </div>

          <div className="two-img">
            <img className="ii" src={Airpodes1} alt="Beats Solo Buds" />

            <img className="iii" src={Airpodes2} alt="Beats Solo 4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductShowcase;
