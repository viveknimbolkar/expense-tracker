import React from "react";
import "./css/AddTransaction.css";

export default function AddTransaction() {
  return (
    <div className="exp-newtransaction">
      <hr/>
      <label className="exp-newtransaction__heading">Add New Transaction</label>
      <br /><br />
      <label>Text</label>
      <br />
      <input type="text" />
      <br />
      <label>Amount</label>
      <br />
      <input min='0' type="number" />
      <br />
      <input type="button" value="Add Transaction" />
    </div>
  );
}
