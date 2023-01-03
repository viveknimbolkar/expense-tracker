import React, { useContext } from "react";
import "./css/Balance.css";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const totalAmount = amount.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="exp-balance">
      <hr />
      <h5>Your Balance</h5>
      <p>&#x20B9; {totalAmount}</p>
    </div>
  );
}
