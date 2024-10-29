import React, { useState } from "react";
import "../css/OrderPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const OrderPage = () => {
  const [orderForm, setOrderForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectName: "",
    projectType: "Building",
    mainService: "",
    services: [],
    message: "",
    files: [""],
  });

  const availableServices = {
    "3D Modeling": [
      "Building 3D modeling Services",
      "Interior 3D modeling Services",
      "Landscape 3D modeling Services",
      "As built 3D modeling Services",
      "Furniture 3D modeling Services",
      "Details 3D modeling Services",
    ],
    "CAD Drafting Service": [
      "Architectural Design AutoCAD Drafting Services",
      "Electrical Design AutoCAD Drafting Services",
      "Structural Design AutoCAD Drafting Services",
      "Sanitary Design AutoCAD Drafting Services",
      "Interior Design AutoCAD Drafting Services",
      "Landscape Design AutoCAD Drafting Services",
      "As built Design AutoCAD Drafting Services",
      "Furniture Design AutoCAD Drafting Services",
      "Details AutoCAD Drafting Services",
    ],
  };

  const handleOrderChange = (e) => {
    const { name, value } = e.target;
    setOrderForm({ ...orderForm, [name]: value });
  };

  const handleServiceCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const updatedServices = checked
      ? [...orderForm.services, value]
      : orderForm.services.filter(service => service !== value);
    setOrderForm({ ...orderForm, services: updatedServices });
  };

  const handleFileChange = (index, e) => {
    const newFiles = [...orderForm.files];
    newFiles[index] = e.target.files[0];
    setOrderForm({ ...orderForm, files: newFiles });
  };

  const addNewFileInput = () => {
    setOrderForm({ ...orderForm, files: [...orderForm.files, ""] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", orderForm);
  };

  return (
    
    <div className="order-page-container">
      <div className="order-box">
        <h1>ORDER PAGE</h1>
        <p>Fill the forms and order us. Let us do your drafting works!</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name:</label>
            <input type="text" name="name" value={orderForm.name} onChange={handleOrderChange} required />
          </div>

          <div className="form-group">
            <label>Phone Number:</label>
            <input type="tel" name="phone" value={orderForm.phone} onChange={handleOrderChange} required />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={orderForm.email} onChange={handleOrderChange} required />
          </div>

          <div className="form-group">
            <label>Project Name:</label>
            <input type="text" name="projectName" value={orderForm.projectName} onChange={handleOrderChange} required />
          </div>

          <div className="form-group">
            <label>Project Type:</label>
            <select name="projectType" value={orderForm.projectType} onChange={handleOrderChange}>
              <option value="Building">Building</option>
              <option value="Landscape">Landscape</option>
              <option value="Furniture">Furniture</option>
              <option value="As Built">As Built</option>
            </select>
          </div>

          <div className="form-group">
            <label>Main Service:</label>
            <select name="mainService" value={orderForm.mainService} onChange={handleOrderChange}>
              <option value="">Select a main service</option>
              <option value="3D Modeling">3D Modeling</option>
              <option value="CAD Drafting Service">CAD Drafting Service</option>
            </select>
          </div>

          {orderForm.mainService && (
            <div className="form-group">
              <label>Services You Need:</label>
              {availableServices[orderForm.mainService].map((service) => (
                <div key={service}>
                  <input
                    type="checkbox"
                    id={service}
                    value={service}
                    checked={orderForm.services.includes(service)}
                    onChange={handleServiceCheckboxChange}
                  />
                  <label htmlFor={service}>{service}</label>
                </div>
              ))}
            </div>
          )}

          <div className="form-group">
            <label>Tell us what's on your mind:</label>
            <textarea name="message" value={orderForm.message} onChange={handleOrderChange} rows="5" placeholder="Your message..." />
          </div>

          <div className="file-upload">
            <label>Upload Your Documents:</label>
            {orderForm.files.map((file, index) => (
              <div key={index} className="file-input-group">
                <input type="file" onChange={(e) => handleFileChange(index, e)} />
              </div>
            ))}
            <button type="button" onClick={addNewFileInput} className="add-file-btn">Add File</button>
          </div>

          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>

        <p>OR</p>
        <section className="social-media-links">
          <h4>Send your files through our social media platform:</h4>
          <button className="social-btn"><FontAwesomeIcon icon={faTelegram} /> Telegram</button>
          <button className="social-btn"><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp</button>
        </section>

        <h4>Thank you for choosing us. We will call you for further details.</h4>
        <button className="call-now-btn"><FontAwesomeIcon icon={faPhone} /> CALL US NOW</button>
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

export default OrderPage;
