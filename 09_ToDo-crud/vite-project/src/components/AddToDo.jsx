import { useEffect, useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

const AddToDo = ({ handleAdd, editVal }) => {
  const [input, setInput] = useState({
    task: "",
    description: "",
  });

  useEffect(() => {
    editVal ? setInput(editVal) : null;
  }, [editVal]);

  const handleChange = (feild, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [feild]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(input);
    setInput({ task: "", description: "" });
  };

  console.log("task", input.task);
  console.log("description", input.description);
  return (
    <>
      <Card className="todo-card mb-4">
        <Card.Body className="p-4">
          <h4 className="form-title mb-4">
            {editVal ? "Update Task" : "Add New Task"}
          </h4>
          <Form onSubmit={handleSubmit}>
            <Row className="g-3">
              <Col md={5}>
                <Form.Group>
                  <Form.Label>Task</Form.Label>
                  <Form.Control
                    type="text"
                    value={input.task}
                    placeholder="Enter your task"
                    onChange={(e) => handleChange("task", e)}
                  />
                </Form.Group>
              </Col>

              <Col md={5}>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    value={input.description}
                    placeholder="Enter your task"
                    onChange={(e) => handleChange("description", e)}
                  />
                </Form.Group>
              </Col>

              <Col md={2} className="d-flex align-items-end">
                <Button type="submit" className="w-100 add-btn">{editVal ? "update" : "add"}</Button>
              </Col>
            </Row>

            
            
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default AddToDo;
