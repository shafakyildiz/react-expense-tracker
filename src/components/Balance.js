import React from "react";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import IncomeExpenses from "./IncomeExpenses";
import { GlobalProvider } from "../context/GlobalState";
import Header from "./Header";

function Balance() {
  return (
    <GlobalProvider>
      <Header />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default Balance;
