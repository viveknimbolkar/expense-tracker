import React, { useContext } from "react";
import "./css/TransactionList.css";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="exp-transactionlist">
      <hr />
      <label> History </label>
      <ul className="exp-transactionlist__list">
        {transactions.map((transcation) => (
          <Transaction key={transcation.id} transaction={transcation} />
        ))}
      </ul>
    </div>
  );
}
