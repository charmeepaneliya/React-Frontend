import { useState } from "react";
import AddToDo from "./components/AddToDo";
import ListToDo from "./components/ListToDo";
import Status from "./components/Status";
import {Container,Row,Col} from "react-bootstrap";
import "./App.css";

const App = () => {
  const initialTodos = [
    {
      id: 1,
      task: "learn unit 1",
      description: "learn about unit 1 with react",
    },
    {
      id: 2,
      task: "learn react",
      description: "learn about react daily",
    },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [editVal, setEditVal] = useState(null);

  console.log("todos", todos);

  const handleAdd = (input) => {
    if (!input.task || !input.description) {
      alert("enter task and description data");
    } else if (editVal) {
      setTodos((t) =>
        t.map((t) =>
          t.id === editVal.id
            ? { ...t, task: input.task, description: input.description }
            : t,
        ),
      );
      setEditVal(null);
    } else {
      const newTodo = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
        completed: false,
      };
      setTodos((prev) => [...prev, newTodo]);
    }
  };
  const handleDelete = (id) => {
    const remainItem = todos.filter((t) => t.id !== id);
    setTodos(remainItem);
  };

  const handleEdit = (id) => {
    const editValue = todos.find((t) => t.id === id);
    setEditVal(editValue);
  };

  console.log("edit val", editVal);

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const totalTask = todos.length;

  const completedTask = todos.filter((t) => t.completed === true).length;

  const pendingTask = totalTask - completedTask;

  return (
    <>
      <div className="app-wrapper">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col lg={10} xl={9}>
              <div className="todo-header text-center mb-4">
                <h1>My Todo List</h1>
                <p>Organize your tasks and stay productive </p>
              </div>

              <AddToDo handleAdd={handleAdd} editVal={editVal} />
              <br />
              <br />

              <Status
                totalTask={totalTask}
                completedTask={completedTask}
                pendingTask={pendingTask}
              />
              <br />
              <br />

              <ListToDo
                todos={todos}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleToggle={handleToggle}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
