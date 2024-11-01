// PaymentProcess.js
import React, { useState } from 'react';
import PaymentConfirmation from './PaymentConfirmation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCreditCard, faMoneyBill, faMobile } from '@fortawesome/free-solid-svg-icons';



const PaymentProcess = ({ orderDetails, onClose }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);
  
    const handleProceedToPayment = () => {
      setShowConfirmation(true);
    };
  
    if (showConfirmation) {
      return <PaymentConfirmation orderDetails={orderDetails} onClose={onClose} />;
    }

    




  return (
    <div className="payment-process-overlay">
      <div className="payment-process-container">
        <h2>Payment Process</h2>
        
        {/* Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-details">
            <p><strong>Project Name:</strong> {orderDetails.projectName}</p>
            <p><strong>Total Services:</strong> {orderDetails.services.length}</p>
            {/* Add more order details as needed */}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="payment-methods">
          <h3>Select Payment Method</h3>
          <div className="payment-options">
            <div className="payment-option">
              <FontAwesomeIcon icon={faCreditCard} />
              <h4>Bank Transfer</h4>
              <p>Commercial Bank of Ethiopia</p>
              <p>Account: 1000123456789</p>
            </div>

            <div className="payment-option">
              <FontAwesomeIcon icon={faMobile} />
              <h4>Mobile Banking</h4>
              <p>TeleBirr</p>
              <p>Number: +251978783334</p>
            </div>

            <div className="payment-option">
              <FontAwesomeIcon icon={faMoneyBill} />
              <h4>Other Payment Options</h4>
              <p>Chapa</p>
              <p>SantimPay</p>
            </div>
          </div>
        </div>

        {/* Payment Steps */}
        <div className="payment-steps">
          <h3>Payment Process Steps</h3>
          <div className="step">
            <FontAwesomeIcon icon={faCheckCircle} />
            <div>
              <h4>Step 1: Initial Payment (1%)</h4>
              <p>Make the initial payment to secure your project in our queue</p>
            </div>
          </div>
          <div className="step">
            <FontAwesomeIcon icon={faCheckCircle} />
            <div>
              <h4>Step 2: Mid-Project Payment (50%)</h4>
              <p>Due when 30% of work is completed</p>
            </div>
          </div>
          <div className="step">
            <FontAwesomeIcon icon={faCheckCircle} />
            <div>
              <h4>Step 3: Final Payment</h4>
              <p>Remaining balance due upon project completion</p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="payment-support">
          <h3>Need Help?</h3>
          <p>Contact our support team:</p>
          <p>Phone: +251 978783334</p>
          <p>Email: ethiooutsourcing@gmail.com</p>
        </div>

        <div className="payment-actions">
        <button className="proceed-btn" onClick={handleProceedToPayment}>Proceed to Payment</button>
        <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcess;