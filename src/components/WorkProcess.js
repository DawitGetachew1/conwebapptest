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

export default WorkProcess;