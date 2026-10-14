import { createContext, useState} from "react";


export const ExpenseContext = createContext({
  expenseList: [],
  handleAdd: () => {},
});

const ExpenseProvider = ({ children }) => {
  const [expenseList,setExpenceList] = useState([]);
  

 const initialState = [
  {
    Id:1,
    Title:"food",
    Description: "pizza",
    Category: "food",
    Amount: 1000,
    Date: "2026-07-30",
    Type: "debit",
  },
  {
    Id:2,
    Title:"food",
    Description: "pizza",
    Category: "food",
    Amount: 200,
    Date: "2026-09-30",
    Type: "debit",
  },
 ];

 const handleAdd = (input) =>{
   const newExpense = {
    id:new Date().getTime(),
    Title:input.Title,
    Description:input.Description,
    Category:input.Category,
    Amount:input.Amount,
    Date:input.Date,
    Type:input.Type,
   };

   setExpenceList((prev)=>[...prev,newExpense]);
 }

  console.log("expenseList",expenseList);

  return (
    <ExpenseContext.Provider value={{ expenseList,handleAdd }}>
      {children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseProvider;
