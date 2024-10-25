// src/components/Packages.js
import React from "react";
import "../css/Packages.css"; // Import the CSS file for styling

const Packages = () => {
  return (
    <div className="packages-container">
      <h2>Our Short-Term Service Packages</h2>
      
      <div className="packages">
        <div className="package-card">
          <h3>2-Hour Package</h3>
          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Price:</strong> 300 Birr</p>
          <p><strong>Services Included:</strong></p>
          <ul>
            <li>File conversion (up to 2 files)</li>
            <li>Small comment amendments (up to 2 requests)</li>
          </ul>
        </div>

        <div className="package-card">
          <h3>4-Hour Package</h3>
          <p><strong>Duration:</strong> 4 hours</p>
          <p><strong>Price:</strong> 600 Birr</p>
          <p><strong>Services Included:</strong></p>
          <ul>
            <li>File conversion (up to 5 files)</li>
            <li>Small comment amendments (up to 5 requests)</li>
            <li>Additional support for minor tasks</li>
          </ul>
        </div>

        <div className="package-card">
          <h3>6-Hour Package</h3>
          <p><strong>Duration:</strong> 6 hours</p>
          <p><strong>Price:</strong> 900 Birr</p>
          <p><strong>Services Included:</strong></p>
          <ul>
            <li>File conversion (up to 10 files)</li>
            <li>Small comment amendments (up to 10 requests)</li>
            <li>Comprehensive support for various minor tasks</li>
          </ul>
        </div>
      </div>

      <div className="pricing-details">
        <h3>Pricing Details</h3>
        <p><strong>Hourly Rate:</strong> 150 Birr per hour</p>
        <p><strong>Availability:</strong> Monday to Saturday, during standard working hours</p>
      </div>

      <div className="order-info">
        <h3>How to Order</h3>
        <p>To order a package, simply contact us with your preferred option, and we will get started on your requests promptly!</p>
      </div>
    </div>
  );
};

export default Packages;
