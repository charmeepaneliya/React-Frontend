

import { Card, Table, Button } from "react-bootstrap";

const ListTodo = ({ todos, handleDelete, handleEdit, handleToggle }) => {
  return (
    <>
      <Card className="todo-card">
        <Card.Body className="p-0">

          <div className="table-titel p-4">
            <h4>📋 Your Tasks</h4>
            <p className="mb-0">Manage your daily tasks</p>
          </div>

          <div className="table-responsive">
            <Table hover className="todo-table mb-0">
              <thead>
                <tr>
                  <th>Sr</th>
                  <th>Status</th>
                  <th>Task</th>
                  <th>Description</th>
                  <th colSpan={2}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {todos.map((t, index) => {
                  return (
                    <tr
                      key={t.id}
                      className={t.completed ? "completed-row" : ""}
                    >
                      <td>{index + 1}</td>

                      <td>
                        <input
                          type="checkbox"
                          className="todo-checkbox"
                          checked={t.completed}
                          onChange={() => handleToggle(t.id)}
                        />
                      </td>

                      <td
                        className={
                          t.completed
                            ? "task-completed"
                            : "task-name"
                        }
                      >
                        {t.task}
                      </td>

                      <td>{t.description}</td>

                      <td>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          className="edit-btn"
                          onClick={() => handleEdit(t.id)}
                        >
                          ✏️ Edit
                        </Button>
                      </td>

                      <td>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          className="delete-btn"
                          onClick={() => handleDelete(t.id)}
                        >
                          🗑️ Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>

        </Card.Body>
      </Card>
    </>
  );
};

export default ListTodo;
