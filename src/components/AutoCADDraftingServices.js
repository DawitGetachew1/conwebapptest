import React, { useState } from 'react';
import "../css/AutoCADDraftingServices.css";
import ChatModal from './ChatModal';


const AutoCADDraftingServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] hero-section">
        <div className="absolute inset-0 bg-[url('https://yourbackground.jpg')] opacity-50"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional AutoCAD Drafting Services
            </h1>
            <h3 className="text-xl text-gray-200">
              Transform your concepts into precise technical drawings with TiruSera
            </h3>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 services-container">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                Expert AutoCAD Drafting Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At TiruSera, we handle all your AutoCAD drafting needs with precision and efficiency. 
                Simply send us your initial conceptual sketches, exported CAD files from 3D modeling 
                software, previous AutoCAD files, or your 3D renderings.
              </p>
              <ul className="space-y-3">
  {['Conceptual Sketches', '3D Model Exports', 'Technical Drawings', 'Detailed Documentation']
    .map((item, index) => (
        <h2>
      <li 
        key={index}
        className="list-item flex items-center space-x-2" // increased spacing slightly
      >
        <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-lg">{item}</span> {/* Changed from text-sm to text-lg */}
      </li>
      </h2>
    ))}
</ul>

            </div>

            {/* Contact Form */}
            <div className="form-container">
              <h3 className="text-2xl font-semibold mb-6">Request a Call Back</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="input-field"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="btn-newcustom"
                  >
                    Submit
                  </button>
                  <a
                    href="tel:+YOUR_PHONE_NUMBER"
                    className="btn-newcustom"
                  >
                    Call Us Now
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Work Section */}
      <section className="bg-gray-50 py-20">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Our Work Samples</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map((item) => (
        <div key={item} className="work-card flex flex-col items-center"> {/* Center items in card */}
          <div className="w-full flex justify-center"> {/* Center image horizontally */}
            <img 
              src={`/img/project${item}.jpg`} 
              alt={`Project ${item}`}
              className="h-48 object-cover work-image" /* Remove w-full for central alignment */
            />
          </div>
          <div className="p-6 text-center"> {/* Center-align text under image */}
            <h3 className="font-semibold text-lg mb-2">Project {item}</h3>
            <h2 className="text-gray-600">
              Detailed AutoCAD drawing with precise measurements and specifications.
            </h2>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



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

export default AutoCADDraftingServices;