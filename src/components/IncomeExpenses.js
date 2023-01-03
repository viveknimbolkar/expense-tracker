import React, { useContext } from "react";
import "./css/IncomeExpenses.css";
import { GlobalContext } from "../context/GlobalState";

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div className="exp-income">
      <div className="exp-income__income">
        <h5>Income</h5>
        <p>&#x20B9;{income}</p>
      </div>
      <div className="exp-income__expense">
        <h5>Expense</h5>
        <p>&#x20B9;{expense}</p>
      </div>
    </div>
  );
}
