import { useContext, useState } from "react";
import { ExpenseContext } from "./context/ExpenseContext";
import Add from "./components/Add";
import ExpenseData from "./components/ExpenceData";
import List from "./components/List";

const App = () => {
  // const {amount} = useContext(ExpenseContext);

  // console.log("amount",amount);


  

  return (
    <>
      <h1>app</h1>
      <Add />
      <ExpenseData />
      <List />
    </>
  );
};

export default App;
