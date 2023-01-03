import React from "react";
import Header from "./components/Header";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";
import "./App.css";
import IncomeExpenses from "./components/IncomeExpenses";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <div className="main-container">
        <Header />
        <Balance />
        <IncomeExpenses />
        <AddTransaction />
        <TransactionList />
      </div>
    </GlobalProvider>
  );
}

export default App;
