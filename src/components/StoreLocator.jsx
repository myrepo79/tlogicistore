import React, { useState } from "react";
import "./StoreLocator.css";

const statesAndCities = {
  "Maharashtra": ["Mumbai", "Pune", "Nagpur","Nanded","Aurangabad","Parbhani","Hingoli"],
  "Karnataka": ["Bangalore", "Mysore", "Mangalore"],
  "Delhi": ["New Delhi"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  "West Bengal": ["Kolkata", "Darjeeling"]
};

const StoreLocator = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setCities(statesAndCities[state] || []);
  };

  return (
    <div className="store-locator-container">
      <h1 className="title">Locate a store near you</h1>
      <div className="input-container">
        <input type="text" placeholder="Enter Pincode" className="input-field" />
        <span className="separator">OR</span>
        <select className="dropdown" onChange={handleStateChange}>
          <option value="">Select State</option>
          {Object.keys(statesAndCities).map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
        <select className="dropdown">
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
      <button className="search-button">SEARCH</button>
      <p className="search-nearby">SEARCH NEARBY</p>
      
      <div className="footer">
        <div className="footer-sections">
          <div>
            <h2>EXPLORE</h2>
            <ul>
              <li>iPhone</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>Watch</li>
            </ul>
          </div>
          <div>
            <h2>Store Locator</h2>
            <p>Locate a store near you</p>
          </div>
          <div>
            <h2>OFFERS</h2>
            <p>Latest Offers</p>
          </div>
          <div>
            <h2>About Us</h2>
            <p>Know More</p>
          </div>
        </div>
      </div>
      
      <div className="social-icons">
        <a href="#" className="icon">F</a>
        <a href="#" className="icon">X</a>
        <a href="#" className="icon">I</a>
        <a href="#" className="icon">Y</a>
      </div>
    </div>
  );
};

export default StoreLocator;
