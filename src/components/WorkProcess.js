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

      <div className="contact-float">
        <div className="phone-icon">
          <FaPhone />
        </div>
        <div className="phone-number">
          <a href="tel:+1234567890">+ (251)  0978783334 </a>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;