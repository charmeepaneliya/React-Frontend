import { useEffect, useContext, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { ExpenseContext } from "../context/ExpenseContext";
import "./Add.css";

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
    <Card className="panel-card add-panel">
      <Card.Header className="panel-heading">
        <div>
          <p className="panel-kicker">New transaction</p>
          <h2 className="panel-title">Add an expense</h2>
        </div>
        <span className="panel-heading-icon" aria-hidden="true">＋</span>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit} className="expense-form">
          <Row className="g-3">
            <Col xs={12}>
              <Form.Group controlId="Title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="Title"
                  value={input.Title}
                  onChange={(e) => handleChange("Title",e)}
                />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group controlId="Description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="Description"
                  value={input.Description}
                  onChange={(e) => handleChange("Description",e)}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group controlId="Category">
                <Form.Label>Category</Form.Label>
                <Form.Select
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
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group controlId="Amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  name="Amount"
                  value={input.Amount}
                  onChange={(e) => handleChange("Amount",e)}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group controlId="Date">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="Date"
                  value={input.Date}
                  onChange={(e) => handleChange("Date",e)}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group controlId="ExpenseType">
                <Form.Label>ExpenseType</Form.Label>
                <Form.Select
                  name="ExpenseType"
                  value={input.Type}
                  onChange={(e) => handleChange("ExpenseType",e)}
                >
                  <option value="">Select Type</option>
                  <option value="credit">credit</option>
                  <option value="debit">debit</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Button className="primary-action w-100" onClick={handleSubmit}>
                {editVal ? "Update" : "Add"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Add;
