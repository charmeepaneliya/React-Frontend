import { useContext,useState} from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const List = () => {
  const { expenseList, handleEdit, handleDelete } = useContext(ExpenseContext);

  const [expenseQuery, setExpenseQuery] = useState({
    Title: "",
    ExpenseType: "all",
    Category: "all",
    sortBy: "asc",
  });

  const handleChange = (field, e) => {
    setExpenseQuery((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("expense query", expenseQuery);
  };

  const handleReset = () => {
    setExpenseQuery({
      Title: "",
      ExpenseType: "all",
      Category: "all",
      sortBy: "asc",
    });
  };

  const filterList = expenseList
    .filter((l) =>
      l.Title.toLowerCase().includes(expenseQuery.Title.toLowerCase()),
    )
    .filter((l) =>
      expenseQuery.ExpenseType === "all"
        ? true
        : l.ExpenseType === expenseQuery.ExpenseType,
    )
    .filter((l) =>
      expenseQuery.Category === "all"
        ? true
        : l.Category === expenseQuery.Category,
    );

    const sortedList = [...filterList].sort((a,b)=>{
      if(expenseQuery.sortBy === "asc"){
        return a.id - b.id;
      }

      if(expenseQuery.sortBy === "desc"){
        return b.id - a.id
      }

      if(expenseQuery.sortBy === "moneyAsc"){
        return Number(a.Amount) - Number(b.Amount);
      }
      if(expenseQuery.sortBy === "moneyDesc"){
        return Number(b.Amount) - Number(a.Amount);
      }

    })

  console.log("filter", filterList);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={expenseQuery.Title}
          onChange={(e) => handleChange("Title", e)}
          placeholder="Enter title"
        />

        <label htmlFor="">Expense Type</label>
        <select
          name=""
          id=""
          value={expenseQuery.ExpenseType}
          onChange={(e) => handleChange("ExpenseType", e)}
        >
          <option value="all">select</option>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>

        <label htmlFor="Category">Category</label>
        <select
          name=""
          id=""
          value={expenseQuery.Category}
          onChange={(e) => handleChange("Category", e)}
        >
          <option value="all">Select</option>
          <option value="Money Transfer">Money Transfer</option>
          <option value="Cash Withdrawal">Cash Withdrawal</option>
          <option value="General Expense">General Expense</option>
          <option value="Food&Dining">Food&Dining</option>
          <option value="HealthCare">HealthCare</option>
          <option value="Shopping">Shopping</option>
          <option value="Travel">Travel</option>
        </select>

        <label htmlFor="sortBy">sortby</label>
        <select
          value={expenseQuery.sortBy}
          onChange={(e) => handleChange("sortBy", e)}
        >
          <option value="all">Select</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
          <option value="moneyAsc">Money Ascending</option>
          <option value="moneyDesc">Money Descending</option>
        </select>

        <button type="submit">search</button>
        <button onClick={handleReset}>Clear all filter</button>
      </form>
      <br/>
      <br/>

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
          {sortedList.map((data, index) => (
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
