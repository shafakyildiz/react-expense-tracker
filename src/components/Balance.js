import React from "react";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import Header from "./Header";

function Balance() {
  return (
    <div>
      <Header />
      <h4>Your Balance</h4>
      <h1>$0.00</h1>
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default Balance;
