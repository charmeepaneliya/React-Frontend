import React, { useContext, useEffect, useState } from "react";
import { ExpenceContext } from "../context/ExpenceContext";
import { Form, Button } from "react-bootstrap";

const Add = () => {
  const [input, setInput] = useState({
    Title: "",
    Description: "",
    Category: "",
    Amount: "",
    Date: "",
    ExpenceType: "",
  });

  const { handleAdd, editval } = useContext(ExpenceContext);

  useEffect(() => {
    editval ? setInput(editval) : null;
  }, [editval]);

  const handleChange = (field, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("input data", input);
    handleAdd(input);

    setInput({
      Title: "",
      Description: "",
      Category: "Genaral Expense",
      Amount: "",
      Date: "",
      ExpenceType: "Debit",
    });
  };

  return (
    <>
      <div className="mt-5 mb-5 border p-3 rounded-4" style={{ width: "80%", margin: "auto" }}>
        <h1 className="mb-4">Form</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label htmlFor="Title">Title</Form.Label>
            <Form.Control
              type="text"
              name="Title"
              value={input.Title}
              onChange={(e) => handleChange("Title", e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label htmlFor="Description">Description</Form.Label>
            <Form.Control
              type="text"
              name="Description"
              value={input.Description}
              onChange={(e) => handleChange("Description", e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label htmlFor="Category">Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="Category"
              value={input.Category}
              onChange={(e) => handleChange("Category", e)}
            >
              <option value="">Select Category</option>
              <option value="Genaral Expense">Genaral Expense</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="HeathCare">HeathCare</option>
              <option value="Money Transefer">Money Transefer</option>
              <option value="Case Withdrawal">Case Withdrawal</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label htmlFor="Amount">Amount</Form.Label>
            <Form.Control
              type="number"
              name="Amount"
              value={input.Amount}
              onChange={(e) => handleChange("Amount", e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label htmlFor="Date">Date</Form.Label>
            <Form.Control
              type="Date"
              name="Date"
              value={input.Date}
              onChange={(e) => handleChange("Date", e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label htmlFor="ExpenceType">ExpenceType</Form.Label>
            <Form.Select
              aria-label="Default select example"
              type="text"
              name="ExpenceType"
              value={input.ExpenceType}
              onChange={(e) => handleChange("ExpenceType", e)}
            >
              <option value="">Select Expence Type</option>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit">{editval ? "Update" : "Add"}</Button>
        </Form>
      </div>

     
    </>
  );
};

export default Add;
