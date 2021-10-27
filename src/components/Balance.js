import React, { useContext } from "react";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import Header from "./Header";
import IncomeExpenses from "./IncomeExpenses";
import { GlobalProvider } from "../context/GlobalState";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  console.log("amounts is ", amounts);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  console.log("total is ", total);
  return (
    <GlobalProvider>
      <IncomeExpenses />
      <h4>Your Balance</h4>
      <h1>${total}</h1>
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default Balance;
