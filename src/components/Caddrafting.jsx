import React, { useState } from "react";
import "../css/OrderPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PaymentProcess from './PaymentProcess';
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

  const [showPayment, setShowPayment] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPayment(true);
    console.log("Order Submitted:", orderForm);
  };


  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleChatButtonClick = () => {
    setIsChatOpen(!isChatOpen);
    setIsButtonClicked(true);
    setTimeout(() => setIsButtonClicked(false), 300);
  };
  

  // Add these styles to your CSS file
  const chatButtonStyles = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#0066ff',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '24px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    zIndex: 40,
    transition: 'transform 0.2s',
    border: 'none',
    fontSize: '16px',
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
        <button className="social-btn"><FontAwesomeIcon icon={faFilePen} /> Order Now</button>
      </div>


      <button
        className={`chat-button ${isButtonClicked ? 'clicked' : ''}`}
        onClick={handleChatButtonClick}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        Let's Talk
      </button>

      <div className={`chat-modal ${isChatOpen ? 'open' : 'closed'}`}>
        <div className="chat-header">Chat with us</div>
        <div className="chat-messages">
          {/* Chat messages will appear here */}
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type your message..." />
          <button>Send</button>
        </div>
      </div>




      {showPayment && (
        <PaymentProcess 
          orderDetails={orderForm}
          onClose={() => setShowPayment(false)}
        />
      )}


      
    {/* Footer Section */}
<footer id="footer">
  <div className="container">
    <div className="row">
      {/* Column 1: Company Info */}
      <div className="col-md-4">
        <div className="footer-brand">
          <img src="/image/logo.png" alt="Company Logo" className="footer-logo" />
          <h4>TiruSera</h4>
          <p>
            Professional 3D modeling services for all your design needs.
          </p>
          <a href="/about" className="read-more">…Read more</a>
        </div>
      </div>

      {/* Column 2: Services */}
      <div className="col-md-4">
        <div className="footer-section">
          <h4>Services</h4>
          <ul className="footer-links">
            <li>Architectural</li>
            <li>Electrical</li>
            <li>Mechanical</li>
            <li>Plumbing</li>
          </ul>
          <a href="/services" className="read-more">…Read Services</a>
        </div>
      </div>

      {/* Column 3: Contact Info */}
      <div className="col-md-4">
        <div className="footer-section">
          
          <div className="contact-info">
          <h4>Contact Us</h4>
      <ul className="contact-links">
        <li><i className="fa fa-envelope"></i> ethiooutsourcing@gmail.com</li>
        <li><a href="#"><i className="fa fa-phone"></i> +251 978783334</a></li>
        <li><a href="#"><i className="fa fa-phone"></i>+251 0901571414</a></li>
      </ul>
            <div className="social-links">
              <a href="#" className="social-icon"><i className="fa fa-facebook"></i></a>
              <a href="#" className="social-icon"><i className="fa fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fa fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Copyright Bar */}
    <div className="footer-bottom">
      <div className="row">
        <div className="col-md-6">
          <p>© 2024 TiruSera - All Rights Reserved</p>
        </div>
        <div className="col-md-6 text-right">
          <p>Designed and Developed by Surepoint Tech</p>
        </div>
      </div>
    </div>
  </div>
</footer>
      
    </div>
  );
};

export default OrderPage;
