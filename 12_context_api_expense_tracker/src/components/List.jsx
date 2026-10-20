import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const List = () => {
  const { expenseList,handleEdit, handleDelete } = useContext(ExpenseContext);
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
            <th>ExpenseType</th>
             <th colSpan={2}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {expenseList.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.Title}</td>
              <td>{data.Description}</td>
              <td>{data.Category}</td>
              <td>{data.Amount}</td>
              <td>{data.Date}</td>
              <td>{data.ExpenseType}</td>
              <td>
                <button onClick={() => handleEdit(data.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(data.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
