import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MacBookBanner from "./components/MacBookBanner ";
import ProductShowcase from "./components/ProductShowcase";
import SliderComponent from "./components/SliderComponent";
import ProductCategories from "./components/ProductCategories ";
import Navcat from "./components/Navcat";
import WhatWeDo from "./components/WhatWeDo";


//import MacBookBanner from "./components/MacBookBanner";
//import Junaid from "./src/components/Junaid";


const App=() =>{
  return (
  <div>
    <Navbar></Navbar>
    <Navcat></Navcat>
    <MacBookBanner></MacBookBanner>
    <ProductShowcase></ProductShowcase>
    <SliderComponent></SliderComponent>
    <ProductCategories></ProductCategories>
    <WhatWeDo></WhatWeDo>
   
  </div>
  )
};
export default App;