import React from "react";
import { FaMoneyBillAlt, FaArrowRight, FaHistory, FaPhoneAlt } from "react-icons/fa";
import "./Earnings.css"

const previousPayments = [
  { id: 1, amount: 400, date: "01/01/2025", method: "Mpesa" },
  { id: 2, amount: 800, date: "02/01/2025", method: "Mpesa" }
];

function Earnings() {
  return (
    <section className="earnings">
      <h2>Cash Earned</h2>
      <div className="total-cash">
        <h3>Total Cash: Ksh 1200</h3>
        <div className="buttons">
          <button className="btn-transact">
            <FaPhoneAlt />
            <span>Transact to Mpesa</span>
          </button>
          <button className="btn-history">
            <FaHistory />
            <span>Payment History</span>
          </button>
        </div>
      </div>

      <div className="payment-history">
        <h3>Previous Payments</h3>
        <ul>
          {previousPayments.map((payment) => (
            <li key={payment.id} className="payment-item">
              <p>
                <strong>Ksh {payment.amount}</strong> on {payment.date} via{" "}
                {payment.method}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Earnings;
