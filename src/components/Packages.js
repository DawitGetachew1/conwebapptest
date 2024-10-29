// src/components/Packages.js
import React from "react";
import "../css/Packages.css"; // Import the CSS file for styling

const Packages = () => {
  return (
    <div className="min-h-screen">
    <div className="packages-container">
      <h2>Our Short-Term Service Packages</h2>
      
      <div className="packages">
        <div className="package-card">
          <h3>2-Hour Package</h3>
          <h4><strong>Duration:</strong> 2 hours</h4>
          <h4><strong>Price:</strong> 300 Birr</h4>
          <h4><strong>Services Included:</strong></h4>
          <ul>
            <li>File conversion (up to 2 files)</li>
            <li>Small comment amendments (up to 2 requests)</li>
          </ul>
        </div>

        <div className="package-card">
          <h3>4-Hour Package</h3>
          <h4><strong>Duration:</strong> 4 hours</h4>
          <h4><strong>Price:</strong> 600 Birr</h4>
          <h4><strong>Services Included:</strong></h4>
          <ul>
            <li>File conversion (up to 5 files)</li>
            <li>Small comment amendments (up to 5 requests)</li>
            <li>Additional support for minor tasks</li>
          </ul>
        </div>

        <div className="package-card">
          <h3>6-Hour Package</h3>
          <h4><strong>Duration:</strong> 6 hours</h4>
          <h4><strong>Price:</strong> 900 Birr</h4>
          <p><strong>Services Included:</strong></p>
          <ul>
            <li>File conversion (up to 10 files)</li>
            <li>Small comment amendments (up to 10 requests)</li>
            <li>Comprehensive support for various minor tasks</li>
          </ul>
        </div>
      </div>

      <div className="pricing-details">
        <h2>Pricing Details</h2>
        <p><strong>Hourly Rate:</strong> 150 Birr per hour</p>
        <p><strong>Availability:</strong> Monday to Saturday, during standard working hours</p>
      </div>

      <div className="order-info">
        <h2>How to Order</h2>
        <p>To order a package, simply contact us with your preferred option, and we will get started on your requests promptly!</p>
      </div>


    </div>
 {/* Footer Section */}
 <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">TiruSera</h4>
              <p className="text-gray-400">
                Professional 3D modeling services for all your design needs.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                Email: ethiooutsourcing@gmail.com<br />
                Phone: +251 978783334,<br />
                Phone: +251 0901571414<br />
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TiruSera. All rights reserved.</p>
          </div>
        </div>
      </footer>




    </div>


  );
};

export default Packages;
