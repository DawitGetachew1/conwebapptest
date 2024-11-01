// src/pages/About.js
import React, { useState } from 'react';
import emailjs from "emailjs-com";

const About = () => {
  // Chat state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChatButtonClick = () => {
    setIsChatOpen(!isChatOpen);
    setIsButtonClicked(true);
    setTimeout(() => setIsButtonClicked(false), 300);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    
    // Replace with your EmailJS credentials
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setContactForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div className="about-page">
    <div className="about-hero">
      <h1>About Us</h1>
    </div>
    
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <img src="/img/about.jpg" className="img-responsive" alt="About TiruSera" />
        </div>
        
        <div className="col-xs-12 col-md-6">
          <div className="about-text">
            <p className="mission">
            <h2>Mission</h2>
              At TiruSera, our mission is to deliver exceptional AutoCAD drafting and 3D modeling 
              services that empower our clients to realize their creative visions. We are committed 
              to excellence, innovation, and customer satisfaction in every project we undertake.
            </p>

            <div className="section">
              <h2>Vision</h2>
              <p>
                Our vision is to be a leading provider of CAD drafting and 3D modeling services 
                globally, recognized for our quality, creativity, and reliability. We aim to set 
                industry standards and inspire design excellence across various sectors.
              </p>
            </div>

            <div className="section">
              <h2>What We Do</h2>
              <p>
                TiruSera specializes in providing comprehensive AutoCAD drafting and 3D modeling 
                services tailored to the needs of architects, engineers, and designers. Our 
                expertise spans multiple disciplines, ensuring that we can cater to a wide range 
                of projects, from residential designs to complex engineering solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row services-section">
        <div className="col-xs-12">
          <h3>▎What Services We Offered</h3>
          <p>TiruSera specializes in a wide range of AutoCAD drafting and 3D modeling services:</p>
          
          <div className="services-container">
            <div className="service-category">
              <h4>▎AutoCAD Drafting Services</h4>
              <ul>
                <li>Architectural Design AutoCAD Drafting Services</li>
                <li>Electrical Design AutoCAD Drafting Services</li>
                <li>Structural Design AutoCAD Drafting Services</li>
                <li>Sanitary Design AutoCAD Drafting Services</li>
                <li>Interior Design AutoCAD Drafting Services</li>
                <li>Landscape Design AutoCAD Drafting Services</li>
                <li>As built Design AutoCAD Drafting Services</li>
                <li>Furniture Design AutoCAD Drafting Services</li>
                <li>Details AutoCAD Drafting Services</li>
              </ul>
            </div>

            <div className="service-category">
              <h4>▎3D Modeling Services</h4>
              <ul>
                <li>Building 3D modeling Services</li>
                <li>Interior 3D modeling Services</li>
                <li>Landscape 3D modeling Services</li>
                <li>As built 3D modeling Services</li>
                <li>Furniture 3D modeling Services</li>
                <li>Details 3D modeling Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>









      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email, and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleContactSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        value={contactForm.name}
                        onChange={handleContactChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={contactForm.email}
                        onChange={handleContactChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    value={contactForm.message}
                    onChange={handleContactChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {/* Add your address here */}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                +251 978783334
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                ethiooutsourcing@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button
        className={`chat-button ${isButtonClicked ? 'clicked' : ''}`}
        onClick={handleChatButtonClick}
        style={{
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
        }}
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

      {/* Chat Modal */}
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

export default About;