import React from "react";

export default function AddTransaction() {
  return (
    <div className="exp-newtransaction">
      <h2>Add New Transaction</h2>
      <label>Text</label>
      <input type="text" />
      <label>Amount</label>
      <input type="number" />
      <input type="button" value="Add Transaction" />
    </div>
  );
}
