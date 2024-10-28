import React, { useState } from "react";
import "../css/ThreeDModelingPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const ThreeDModelingPage = () => {
  const [orderForm, setOrderForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectDetails: "",
    files: [""],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderForm({ ...orderForm, [name]: value });
  };

  const handleFileChange = (index, e) => {
    const newFiles = [...orderForm.files];
    newFiles[index] = e.target.files[0];
    setOrderForm({ ...orderForm, files: newFiles });
  };

  const addFileInput = () => {
    setOrderForm({ ...orderForm, files: [...orderForm.files, ""] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("3D Modeling Order Submitted:", orderForm);
  };

  return (
    <div className="three-d-modeling-page">
      <h1>3D Modeling Services at TiruSera</h1>

      <form onSubmit={handleSubmit} className="modeling-order-form">
        <div className="form-group">
          <label>Your Name:</label>
          <input
            type="text"
            name="name"
            value={orderForm.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={orderForm.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={orderForm.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Project Details:</label>
          <textarea
            name="projectDetails"
            value={orderForm.projectDetails}
            onChange={handleInputChange}
            rows="5"
            placeholder="Describe your 3D modeling project..."
          />
        </div>
        <div className="file-upload">
          <label>Upload Reference Files:</label>
          {orderForm.files.map((file, index) => (
            <div key={index} className="file-input-group">
              <input
                type="file"
                onChange={(e) => handleFileChange(index, e)}
              />
            </div>
          ))}
          <button type="button" onClick={addFileInput} className="add-file-btn">
            Add File
          </button>
        </div>
        <button type="submit" className="submit-btn">Submit Order</button>

        <p>OR</p>

<section className="social-media-links">
  <h4>Send your files through our social media platform:</h4>
  <button className="social-btn">
    <FontAwesomeIcon icon={faTelegram} /> Telegram
  </button>
  <button className="social-btn">
    <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
  </button>
</section>

<h4>Thank you for choosing us. We will call you for further details.</h4>
<button className="call-now-btn">
  <FontAwesomeIcon icon={faPhone} /> CALL US NOW
</button>



      </form>
     
    </div>
  );
};

export default ThreeDModelingPage;
