import { GlobalContext } from "../context/GlobalState";
import "./css/AddTransaction.css";
import React, { useContext, useState } from "react";

const genereateId = () => {
  return Math.floor(Math.random() * 100000);
};
export default function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext);
  const [amount, setAmount] = useState(0);
  const [text, setText] = useState("");
  const newTransaction = {
    id: genereateId(),
    text,
    amount:+amount, // +amount means int(num)
  };
  return (
    <div className="exp-newtransaction">
      <hr />
      <label className="exp-newtransaction__heading">Add New Transaction</label>
      <br />
      <br />
      <label>Text</label>
      <br />
      <input onChange={(e) => setText(e.target.value)} type="text" />
      <br />
      <label>Amount</label>
      <br />
      <input
        onChange={(e) => setAmount(e.target.value)}
        type="number"
      />
      <br />
      <input
        onClick={() => addTransaction(newTransaction)}
        type="button"
        value="Add Transaction"
      />
    </div>
  );
}
