import React from "react";
import './css/TransactionList.css'
export default function TransactionList() {
  return (
    <div className="exp-transactionlist">
      <hr />
      <label> History </label>
      <ul className="exp-transactionlist__list">
        <li className="exp-transactionlist__item">
          Cash <span>Rs. -600</span>
          <button>x</button>
        </li>
      </ul>
    </div>
  );
}
