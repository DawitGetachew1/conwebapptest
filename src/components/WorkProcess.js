import React from "react";
import "../css/WorkProcess.css";
// Fix the import statement for FaPhone
import { FaPhone } from "react-icons/fa";

const WorkProcess = () => {
  const steps = [
    {
      title: "Client Acquisition",
      description:
        "Utilize various channels such as in-person marketing, phone calls, emails, and advertisements to find clients.",
    },
    {
      title: "Initial Client Interaction",
      description:
        "Clients visit our website or Telegram mini app bot to fill out online forms and submit necessary documents for review.",
    },
    {
      title: "Cost Proposal",
      description:
        "Provide clients with a detailed cost estimate and expected delivery date. A 1% deposit is required to initiate the project upon agreement.",
    },
    {
      title: "Project Coordination",
      description:
        "The coordinator selects suitable professionals for the project and communicates timelines and deadlines.",
    },
    {
      title: "Progress Updates",
      description:
        "Professionals submit work at two stages:\n• 30% Completion: Initial submission for review.\n• 100% Completion: Final submission.",
    },
    {
      title: "Client Review and Payment Confirmation",
      description:
        "The coordinator reviews the 30% submission and sends it to the client for feedback. Upon confirmation, the client pays 50% of the total cost.",
    },
    {
      title: "Final Submission",
      description:
        "The professional sends final files to the coordinator, who prepares the final package. The client pays the remaining balance before receiving the full package.",
    },
    {
      title: "Client Feedback",
      description:
        "We thank clients for their business and encourage them to provide comments within 24 hours; otherwise, payment will be released to the professional.",
    },
  ];

  return (
    <div className="min-h-screen">
    <div className="roadmap-container">
      <div className="title">
        <h1>HOW WE WORK</h1>
        <p>Project Development Process</p>
      </div>
      
      <div className="timeline">
        {steps.map((step, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="timeline-title">{index + 1}. {step.title}</div>
              <div className="timeline-description">{step.description}</div>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>

      <div className="expectations-section">
        <h2>What We Expect from You</h2>
        <ul>
          <li><strong>Timely Communication:</strong> Your feedback is crucial at each stage. Please respond promptly to ensure we stay on schedule.</li>
          <li><strong>Clear Instructions:</strong> Provide detailed information and requirements upfront to help us meet your expectations.</li>
        </ul>
      </div>



      <div className="contact-float">
        <div className="phone-icon">
          <FaPhone />
        </div>
        <div className="phone-number">
          <a href="tel:+1234567890">+ (251)  0978783334 </a>
        </div>
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

export default WorkProcess;