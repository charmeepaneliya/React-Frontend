import { createContext, useState } from "react";

export const ExpenseContext = createContext({
  expenseList: [],
  handleAdd: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  editVal: null,
  credit: 0,
  debit: 0,
  balance: 0,
});

const ExpenseProvider = ({ children }) => {
  const initialState = [
    {
      id: 1,
      Title: "food",
      Description: "pizza",
      Category: "food",
      Amount: 1000,
      Date: "2026-07-30",
      ExpenseType: "debit",
    },
    {
      id: 2,
      Title: "food",
      Description: "pizza",
      Category: "food",
      Amount: 200,
      Date: "2026-09-30",
      ExpenseType: "debit",
    },
  ];

  const [expenseList, setExpenceList] = useState(initialState);
  const [editVal, setEditVal] = useState(null);

  const handleAdd = (input) => {
    if (!input) {
      alert("enter data");
    } else if (editVal) {
      setExpenceList((prev) =>
        prev.map((expense) =>
          expense.id === editVal.id
            ? {
                ...expense,
                ...input,
              }
            : expense,
        ),
      );
      setEditVal(null);
    } else {
      const newExpense = {
        id: new Date().getTime(),
        ...input,
      };
      setExpenceList((prev) => [...prev, newExpense]);
    }
  };

  console.log("expenseList", expenseList);

  const handleEdit = (id) => {
    const editExpense = expenseList.find((expense) => expense.id === id);
    setEditVal(editExpense);
  };
  const handleDelete = (id) => {
    const deleteExpense = expenseList.filter((expense) => expense.id === id);
    setExpenceList(deleteExpense);
  };

  const credit = expenseList
    .filter((data) => data.ExpenseType === "credit")
    .reduce((acc, curr) => {
      return (acc += Number(curr.Amount));
    }, 0);

  const debit = expenseList
    .filter((data) => data.ExpenseType === "debit")
    .reduce((acc, curr) => {
      return (acc += Number(curr.Amount));
    }, 0);

  const balance = credit - debit;

  const value = {
    expenseList,
    handleAdd,
    handleEdit,
    handleDelete,

    editVal,
    credit,
    debit,
    balance,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};
export default ExpenseProvider;
