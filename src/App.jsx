// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import MacBookBanner from "./components/MacBookBanner ";
// import ProductShowcase from "./components/ProductShowcase";
// import SliderComponent from "./components/SliderComponent";
// import ProductCategories from "./components/ProductCategories ";
// import Navcat from "./components/Navcat";
// import WhatWeDo from "./components/WhatWeDo";
// import AppleResellers from "./components/AppleResellers";
// import StoreLocator from "./components/StoreLocator";


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import IphonePage from "./components/IphonePage";





// const App=() =>{
//   return (
//     <>
//   <div>
//     <Navbar></Navbar>
//     <Navcat></Navcat>
//     <MacBookBanner></MacBookBanner>
//     <ProductShowcase></ProductShowcase>
//     <SliderComponent></SliderComponent>
//     <ProductCategories></ProductCategories>
//     <WhatWeDo></WhatWeDo>
//     <AppleResellers></AppleResellers>
//     <StoreLocator></StoreLocator>
   
//   </div>

// <Router>
// <Routes>
//   <Route path="/" element={<Navcat />} />
//   <Route path="/iphone" element={<IphonePage />} />
// </Routes>
// </Router>
// </>
//   )
// };
// export default App;




import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import MacBookBanner from "./components/MacBookBanner ";
import ProductShowcase from "./components/ProductShowcase";
import SliderComponent from "./components/SliderComponent";
import ProductCategories from "./components/ProductCategories ";
import Navcat from "./components/Navcat";
import WhatWeDo from "./components/WhatWeDo";
import AppleResellers from "./components/AppleResellers";
import StoreLocator from "./components/StoreLocator";


import IphoneList from "./components/IphoneList"; // ✅ FIXED - Added import
import MacList from "./components/MacList";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <Navbar />
      <Navcat 
        onIphoneClick={() => setSelectedCategory("iphone")}
        onMacClick={() => setSelectedCategory("mac")}
      />

      {selectedCategory === "iphone" && <IphoneList />}
      {selectedCategory === "mac" && <MacList />}

      {!selectedCategory && (
        <>
          <MacBookBanner />
          <ProductShowcase />
          <SliderComponent />
          <ProductCategories />
          <WhatWeDo />
          <AppleResellers />
          <StoreLocator />
        </>
      )}
    </div>
  );
};

export default App;
