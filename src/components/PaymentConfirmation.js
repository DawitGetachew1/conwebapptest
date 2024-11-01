// PaymentConfirmation.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faLock } from '@fortawesome/free-solid-svg-icons';

const PaymentConfirmation = ({ orderDetails, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the payment confirmation
    // For now, we'll just log the details and show an alert
    console.log('Payment confirmed:', { paymentMethod, transactionId, amount });
    alert('Payment confirmed! We will verify and process your order.');
    onClose();
  };

  return (
    <div className="payment-confirmation-overlay">
      <div className="payment-confirmation-container">
        <h2>Confirm Your Payment</h2>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <p><strong>Project Name:</strong> {orderDetails.projectName}</p>
          <p><strong>Total Services:</strong> {orderDetails.services.length}</p>
          <p><strong>Total Amount:</strong> {orderDetails.totalAmount} ETB</p>
        </div>

        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method</label>
            <select 
              id="paymentMethod" 
              value={paymentMethod} 
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Select a payment method</option>
              <option value="bank">Bank Transfer</option>
              <option value="telebirr">TeleBirr</option>
              <option value="chapa">Chapa</option>
              <option value="santimpay">SantimPay</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="transactionId">Transaction ID</label>
            <input 
              type="text" 
              id="transactionId" 
              value={transactionId} 
              onChange={(e) => setTransactionId(e.target.value)}
              required
              placeholder="Enter your transaction ID"
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount Paid (ETB)</label>
            <input 
              type="number" 
              id="amount" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)}
              required
              placeholder="Enter the amount you paid"
            />
          </div>

          <div className="payment-actions">
            <button type="submit" className="confirm-btn">
              <FontAwesomeIcon icon={faCreditCard} /> Confirm Payment
            </button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>

        <div className="security-note">
          <FontAwesomeIcon icon={faLock} />
          <p>Your payment information is secure and encrypted.</p>
        </div>

        <div className="payment-support">
          <h3>Need Help?</h3>
          <p>Contact our support team:</p>
          <p>Phone: +251 978783334</p>
          <p>Email: ethiooutsourcing@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;