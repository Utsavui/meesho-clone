import React from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();

  return (
    <div className="payment-container">
      <h2>💳 Select Payment Method</h2>
      <ul className="payment-list">
        <li>Credit / Debit Card</li>
        <li>UPI / Google Pay / PhonePe</li>
        <li>Net Banking</li>
        <li>PayPal</li>
        <li>Cash on Arrival</li>
      </ul>

      <button className="btn-primary">Proceed to Pay</button>
      <br />
      <button className="btn-secondary" onClick={() => navigate("/")}>
        ❌ Close / Back to Home
      </button>
    </div>
  );
}
