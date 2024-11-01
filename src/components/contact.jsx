import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    // Replace below with your own Service ID, Template ID, and Public Key from your EmailJS account
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email, and we will get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                    onChange={handleChange}
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
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}

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
