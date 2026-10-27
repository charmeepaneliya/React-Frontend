import React, { children, createContext, useState } from "react";

export const ExpenceContext = createContext({
  expenceList: [],
  handleAdd: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  editval: null,
  Credit:0,
  Debit:0,
  Balance:0,
});

const ExpenceProvider = ({ children }) => {
  const initialState = [
    {
      Id: 1,
      Title: "Food",
      Description: "Food decs",
      Category: "Food",
      Amount: "1000",
      Date: "2026-03-04",
      ExpenceType: "Credit",
    },
    {
      Id: 2,
      Title: "Travel",
      Description: "Travel decs",
      Category: "Travel",
      Amount: "11000",
      Date: "2026-03-04",
      ExpenceType: "Debit",
    },
  ];

  const [expenceList, setExpenceList] = useState(initialState);
  const [editval, setEditVal] = useState(null);

  const handleAdd = (input) => {
    if (!input) {
      alert("add all data");
    } else if (editval) {
      setExpenceList((prev) =>
        prev.map((expense) =>
          expense.Id === editval.Id ? { ...expense, ...input } : expense,
        ),
      );
      setEditVal(null);
    } else {
      const newExpense = {
        Id: new Date().getTime(),
        ...input,
      };
      setExpenceList((prev) => [...prev, newExpense]);
    }
  };

  const handleDelete = (id) => {
    const ExpenceDelete = expenceList.filter((expense) => expense.Id !== id);
    setExpenceList(ExpenceDelete);
  };

  const handleEdit = (id) => {
    const ExpenceEdit = expenceList.find((expense) => expense.Id === id);
    setEditVal(ExpenceEdit);
  };

  const Credit = expenceList
    .filter((data) => data.ExpenceType === "Credit")
    .reduce((acc, curr) => {
      return (acc += Number(curr.Amount));
    },0);
  const Debit = expenceList
    .filter((data) => data.ExpenceType === "Debit")
    .reduce((acc, curr) => {
      return (acc += Number(curr.Amount));
    },0);

  const Balance = Credit - Debit;

  console.log("expenceList", expenceList);

  const value = {
    expenceList,
    handleAdd,
    handleDelete,
    handleEdit,
    editval,
    Credit,
    Debit,
    Balance,
  };

  return (
    <ExpenceContext.Provider value={value}>{children}</ExpenceContext.Provider>
  );
};

export default ExpenceProvider;
