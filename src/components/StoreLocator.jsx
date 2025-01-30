import React, { useState } from "react";
import "./StoreLocator.css";

function StoreLocator() {
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search logic using pincode, state, or city
    console.log("Search with:", pincode, state, city);
  };

  return (
    <div className="store-locator">
      <header className="header">
        <h1>Locate a store near you</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter Pincode"
            value={pincode}
            onChange={handlePincodeChange}
          />
          <span>OR</span>
          <select value={state} onChange={handleStateChange}>
            <option value="">Select State</option>
            {/* Add state options here */}
            <option value="Maharashtra">Maharashtra</option>
            <option value="Delhi">Delhi</option>
            <option value="Karnataka">Karnataka</option>
            {/* Add more states as needed */}
          </select>
          <select value={city} onChange={handleCityChange}>
            <option value="">Select City</option>
            {/* Add city options here */}
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Bangalore">Bangalore</option>
            {/* Add more cities as needed */}
          </select>
        </div>
        <button type="submit">SEARCH</button>
      </form>
      <footer className="footer">
        <div className="section">
          <h2>EXPLORE</h2>
          <ul>
            <li>iPhone</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>Watch</li>
          </ul>
        </div>
        <div className="section">
          <h2>Store Locator</h2>
          <p>Locate a store near you</p>
        </div>
        <div className="section">
          <h2>About Us</h2>
          <p>Your one-stop shop for all Apple products.</p>
        </div>
        <div className="section">
          <h2>CONNECT WITH US</h2>
          <ul className="social-links">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default StoreLocator;
