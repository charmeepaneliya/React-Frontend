import { useEffect, useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Add = () => {
  const [input, setInput] = useState({
    Title: "",
    Description: "",
    Category: "",
    Amount: "",
    Date: "",
    ExpenseType: "debit",
  });

  console.log("input", input);

  const { handleAdd, editVal } = useContext(ExpenseContext);

  useEffect(() => {
    editVal ? setInput(editVal) : null;
  }, [editVal]);

  const handleChange = (field, e) => {
    // const field = e.target.name;

    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAdd(input);

    console.log(input);
    setInput({
      Title: "",
      Description: "",
      Category: "General Expense",
      Amount: "",
      Date: "",
      ExpenseType: "debit",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          name="Title"
          value={input.Title}
          onChange={(e) => handleChange("Title",e)}
        />
        <br />
        <br />
        <label htmlFor="Description">Description</label>
        <input
          type="text"
          name="Description"
          value={input.Description}
          onChange={(e) => handleChange("Description",e)}
        />
        <br />
        <br />
        <label htmlFor="Category">Category</label>
        <select
          type="text"
          name="Category"
          value={input.Category}
          onChange={(e) => handleChange("Category",e)}
        >
          <option value="">Select Category</option>
          <option value="Money Transfer">Money Transfer</option>
          <option value="Cash Withdrawal">Cash Withdrawal</option>
          <option value="General Expense">General Expense</option>
          <option value="Food&Dining">Food&Dining</option>
          <option value="HealthCare">HealthCare</option>
          <option value="Shopping">Shopping</option>
          <option value="Travel">Travel</option>
        </select>
        <br />
        <br />
        <label htmlFor="Amount">Amount</label>
        <input
          type="number"
          name="Amount"
          value={input.Amount}
          onChange={(e) => handleChange("Amount",e)}
        />
        <br />
        <br />
        <label htmlFor="Date">Date</label>
        <input
          type="date"
          name="Date"
          value={input.Date}
          onChange={(e) => handleChange("Date",e)}
        />
        <br />
        <br />
        <label htmlFor="ExpenseType">ExpenseType</label>
        <select
          type="text"
          name="ExpenseType"
          value={input.Type}
          onChange={(e) => handleChange("ExpenseType",e)}
        >
          <option value="">Select Type</option>
          <option value="credit">credit</option>
          <option value="debit">debit</option>
        </select>
        <br />
        <br />
        <button onClick={handleSubmit}>{editVal ? "Update" : "Add"}</button>
      </form>
    </>
  );
};

export default Add;
