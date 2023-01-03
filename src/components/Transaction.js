import { GlobalContext } from "../context/GlobalState";
import React, { useContext } from "react";

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className="exp-transactionlist__item">
        {transaction.text}
        <span>
          {sign} &#x20B9;{Math.abs(transaction.amount)}
        </span>
        <button onClick={() => deleteTransaction(transaction.id)}>x</button>
      </li>
    </div>
  );
}
