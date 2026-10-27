import React, { useContext, useState } from "react";
import { ExpenceContext } from "../context/ExpenceContext";
import { Button, Table, Form } from "react-bootstrap";

const List = () => {
  const { expenceList, handleDelete, handleEdit } = useContext(ExpenceContext);

  const [expenceQuery, setExpenseQuery] = useState({
    Title: "",
    Category: "all",
    ExpenceType: "all",
    SortBy: "",
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
    console.log("expenseQuery", expenceQuery);
  };

  const handleReset = () => {
    setExpenseQuery({
      Title: "",
      Category: "all",
      ExpenceType: "all",
      SortBy: "asc",
    });
  };

  const filterList = expenceList
    .filter((l) =>
      l.Title.toLowerCase().includes(expenceQuery.Title.toLowerCase()),
    )
    .filter((l) =>
      expenceQuery.Category === "all"
        ? true
        : l.Category === expenceQuery.Category,
    )
    .filter((l) =>
      expenceQuery.ExpenceType === "all"
        ? true
        : l.ExpenceType === expenceQuery.ExpenceType,
    );
  console.log("filter", filterList);

  

  return (
    <>
      <div
        className="mt-5 mb-5 border p-3 rounded-4"
        style={{ width: "90%", margin: "auto" }}
      >
        <h1 className="mb-4">Expense Query</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label htmlFor="Title">Title</Form.Label>
            <Form.Control
              type="text"
              name="Title"
              value={expenceQuery.Title}
              onChange={(e) => handleChange("Title", e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label htmlFor="Category">Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="Category"
              value={expenceQuery.Category}
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
            <Form.Label htmlFor="ExpenceType">ExpenceType</Form.Label>
            <Form.Select
              aria-label="Default select example"
              type="text"
              name="ExpenceType"
              value={expenceQuery.ExpenceType}
              onChange={(e) => handleChange("ExpenceType", e)}
            >
              <option value="">Select Expence Type</option>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </Form.Select>
          </Form.Group>

          

          <Button className="me-3" onClick={handleSubmit}>
            Search
          </Button>
          <Button onClick={handleReset}>Clear all Filter</Button>
        </Form>
      </div>

      <div
        className="mt-5 mb-5 border p-3 rounded-4"
        style={{ width: "90%", margin: "auto" }}
      >
        <Table border={1} cellSpacing={10}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
              <th>ExpenceType</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filterList.map((data, index) => {
              return (
                <tr key={data.Id}>
                  <td>{index + 1}</td>
                  <td>{data.Title}</td>
                  <td>{data.Description}</td>
                  <td>{data.Category}</td>
                  <th>{data.Amount}</th>
                  <td>{data.Date}</td>
                  <td>{data.ExpenceType}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => handleEdit(data.Id)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(data.Id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default List;
