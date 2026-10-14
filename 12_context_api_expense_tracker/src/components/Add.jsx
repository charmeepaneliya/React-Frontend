import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Add = () => {
  const [input, setInput] = useState({
    Title: "",
    Description: "",
    Category: "",
    Amount: "",
    Date: "",
    Type: "",
  });

  const {handleAdd} = useContext(ExpenseContext);

  const handleChange = (e) => {
    const field = e.target.name;

    setInput((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAdd(input);

    console.log(input);
    setInput({
      Title: "",
      Description: "",
      Category: "",
      Amount: "",
      Date: "",
      Type: "",
    });
  };

  return (
    <>
      <label>Title</label>
      <input
        type="text"
        name="Title"
        value={input.Title}
        onChange={(e) => handleChange(e, "Title")}
      />
      <br />
      <br />
      <label>Description</label>
      <input
        type="text"
        name = "Description"
        value={input.Description}
        onChange={(e) => handleChange(e, "Description")}
      />
      <br />
      <br />
      <label>Category</label>
      <select
        type="text"
        name = "Category"
        value={input.Category}
        onChange={(e) => handleChange(e, "Category")}
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Education">Education</option>
        <option value="Health">Health</option>
        <option value="Bills">Bills</option>
      </select>
      <br />
      <br />
      <label>Amount</label>
      <input
        type="number"
        name="Amount"
        value={input.Amount}
        onChange={(e) => handleChange(e, "Amount")}
      />
      <br />
      <br />
      <label>Date</label>
      <input
        type="date"
        name="Date"
        value={input.Date}
        onChange={(e) => handleChange(e, "Date")}
      />
      <br />
      <br />
      <label>Type</label>
      <select
        type="text"
        name = "Type"
        value={input.Type}
        onChange={(e) => handleChange(e, "Type")}
      >
        <option value="">Select Type</option>
        <option value="credit">credit</option>
        <option value="debit">debit</option>
      </select>
      <br />
      <br />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
};

export default Add;
