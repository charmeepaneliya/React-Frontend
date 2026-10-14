import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const List = () => {
    const {expenseList} = useContext(ExpenseContext);
  return (
    <>
      <h1>Expense List</h1>
      <table border={1} cellPadding={10}>
        <thead>
            <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
        </tr>
        </thead>

        <tbody>
            {expenseList.map((data,index)=>(
                <tr key = {index}>
                    <td>{index + 1}</td>
                    <td>{data.Title}</td>
                    <td>{data.Description}</td>
                    <td>{data.Category}</td>
                    <td>{data.Amount}</td>
                    <td>{data.Date}</td>
                    <td>{data.Type}</td>

                
                </tr>
            ))}
        </tbody>
        
      </table>
    </>
  )
}

export default List

