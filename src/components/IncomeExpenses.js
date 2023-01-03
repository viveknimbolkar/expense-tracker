import React from "react";
import './css/IncomeExpenses.css';

export default function IncomeExpenses() {
  return (
    <div className="exp-income">
      <div className="exp-income__income">
        <h5>Income</h5>
        <p>Rs. 3445.00</p>
      </div>
      <div className="exp-income__expense">
        <h5>Expense</h5>
        <p>Rs. 563.00</p>
      </div>
    </div>
  );
}
