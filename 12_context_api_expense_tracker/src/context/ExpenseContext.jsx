// import { createContext, useState } from "react";

import { Children, createContext, useEffect, useReducer } from "react";

// export const ExpenseContext = createContext({
//   expenseList: [],
//   handleAdd: () => {},
//   handleDelete: () => {},
//   handleEdit: () => {},
//   editVal: null,
//   credit: 0,
//   debit: 0,
//   balance: 0,
// });

// const ExpenseProvider = ({ children }) => {
//   const initialState = [
//     {
//       id: 1,
//       Title: "food",
//       Description: "pizza",
//       Category: "food",
//       Amount: 1000,
//       Date: "2026-07-30",
//       ExpenseType: "debit",
//     },
//     {
//       id: 2,
//       Title: "food",
//       Description: "pizza",
//       Category: "food",
//       Amount: 200,
//       Date: "2026-09-30",
//       ExpenseType: "debit",
//     },
//   ];

//   const [expenseList, setExpenceList] = useState(initialState);
//   const [editVal, setEditVal] = useState(null);

//   const handleAdd = (input) => {
//     if (!input) {
//       alert("enter data");
//     } else if (editVal) {
//       setExpenceList((prev) =>
//         prev.map((expense) =>
//           expense.id === editVal.id
//             ? {
//                 ...expense,
//                 ...input,
//               }
//             : expense,
//         ),
//       );
//       setEditVal(null);
//     } else {
//       const newExpense = {
//         id: new Date().getTime(),
//         ...input,
//       };
//       setExpenceList((prev) => [...prev, newExpense]);
//     }
//   };

//   console.log("expenseList", expenseList);

//   const handleEdit = (id) => {
//     const editExpense = expenseList.find((expense) => expense.id === id);
//     setEditVal(editExpense);
//   };
//   const handleDelete = (id) => {
//     const deleteExpense = expenseList.filter((expense) => expense.id === id);
//     setExpenceList(deleteExpense);
//   };

//   const credit = expenseList
//     .filter((data) => data.ExpenseType === "credit")
//     .reduce((acc, curr) => {
//       return (acc += Number(curr.Amount));
//     }, 0);

//   const debit = expenseList
//     .filter((data) => data.ExpenseType === "debit")
//     .reduce((acc, curr) => {
//       return (acc += Number(curr.Amount));
//     }, 0);

//   const balance = credit - debit;

//   const value = {
//     expenseList,
//     handleAdd,
//     handleEdit,
//     handleDelete,

//     editVal,
//     credit,
//     debit,
//     balance,
//   };

//   return (
//     <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
//   );
// };
// export default ExpenseProvider;

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

const initialValues = {
  expenseList: [
    {
      id: 1,
      Title: "food",
      Description: "pizza",
      Category: "Food&Dining",
      Amount: 1000,
      Date: "2026-07-30",
      ExpenseType: "debit",
    },
    {
      id: 2,
      Title: "travel",
      Description: "travel deas",
      Category: "General Expense",
      Amount: 1000,
      Date: "2026-07-30",
      ExpenseType: "credit",
    },
  ],

  editVal: null,
};

const init = () => {
  try {
    const saved = localStorage.getItem("expense");

    console.log("saved", saved);

    return saved
      ? { ...initialValues, expenseList: JSON.parse(saved) }
      : initialValues;
  } catch (error) {
    console.log(error);
    return initialValues;
  }
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const input = action.payload;

      if (state.editVal !== null) {
        const updateList = state.expenseList.map((list) =>
          list.id === state.editVal.id ? { ...list, ...input } : list,
        );

        console.log("updated", updateList);

        return {
          ...state,
          expenseList: updateList,
          editVal: null,
        };
      } else {
        const newExpense = {
          id: new Date().getTime(),
          Title: input.Title,
          Description: input.Description,
          Category: input.Category,
          Amount: input.Amount,
          Date: input.Date,
          Type: input.Type,
        };
        return {
          ...state,
          expenseList: [...state.expenseList, newExpense],
        };
      }
    }

    case "edit": {
      const value = action.payload;

      return {
        ...state,
        editVal: value,
      };
    }

    case "delete": {
      const id = action.payload;

      const remainList = state.expenseList.filter((l) => l.id !== id);

      return {
        ...state,
        expenseList: remainList,
      };
    }
  }
};

const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialValues, init);

  useEffect(() => {
    const data = localStorage.setItem(
      "expense",
      JSON.stringify(state.expenseList),
    );
    console.log(localStorage.getItem("expense"));
  }, [state.expenseList]);

  const addExpense = (input) => {
    if (!input) {
      alert("all field is required");
    }
    dispatch({
      type: "add",
      payload: input,
    });
  };

  const deleteExpense = (id) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };

  const handleExpenseEdit = (id) => {
    const editExpense = state.expenseList.find((l) => l.id === id);

    dispatch({
      type: "edit",
      payload: editExpense,
    });
  };

  const credit = state.expenseList
    .filter((l) => l.ExpenseType === "credit")
    .reduce((acc, curr) => {
      return (acc += Number(curr.Amount));
    }, 0);

  const debit = state.expenseList
    .filter((l) => l.ExpenseType === "debit")
    .reduce((acc, curr) => {
      return (acc += Number(curr.Amount));
    }, 0);

  const balance = credit - debit;

  const value = {
    expenseList: state.expenseList,
    addExpense,
    handleExpenseEdit,
    editValue: state.editValue,
    deleteExpense,
    credit,
    debit,
    balance,
  };

  return(
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};
export default ExpenseProvider;