import { useContext,useState} from "react";
import { Badge, Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import { ExpenseContext } from "../context/ExpenseContext";
import "./List.css";

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
    <Card className="panel-card list-panel">
      <Card.Header className="panel-heading list-heading">
        <div>
          <p className="panel-kicker">Your activity</p>
          <h2 className="panel-title">Expense list</h2>
        </div>
        <span className="list-count">{sortedList.length} entries</span>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit} className="filter-form">
          <Row className="g-3 align-items-end">
            <Col xs={12} sm={6}>
              <Form.Group controlId="filterTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={expenseQuery.Title}
                  onChange={(e) => handleChange("Title", e)}
                  placeholder="Enter title"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group controlId="filterType">
                <Form.Label>Expense Type</Form.Label>
                <Form.Select
                  value={expenseQuery.ExpenseType}
                  onChange={(e) => handleChange("ExpenseType", e)}
                >
                  <option value="all">select</option>
                  <option value="credit">Credit</option>
                  <option value="debit">Debit</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group controlId="filterCategory">
                <Form.Label>Category</Form.Label>
                <Form.Select
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
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group controlId="filterSort">
                <Form.Label>Sort by</Form.Label>
                <Form.Select
                  value={expenseQuery.sortBy}
                  onChange={(e) => handleChange("sortBy", e)}
                >
                  <option value="all">Select</option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                  <option value="moneyAsc">Money Ascending</option>
                  <option value="moneyDesc">Money Descending</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12}>
              <div className="filter-actions">
                <Button type="submit" className="primary-action">Search</Button>
                <Button variant="outline-light" className="clear-action" onClick={handleReset}>
                  Clear all filter
                </Button>
              </div>
            </Col>
          </Row>
        </Form>

        <div className="expense-table-wrap">
          <Table responsive hover className="expense-table align-middle">
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
                  <td className="expense-title-cell">{data.Title}</td>
                  <td>{data.Description}</td>
                  <td>{data.Category}</td>
                  <td className="expense-amount-cell">₹{data.Amount}</td>
                  <td>{data.Date}</td>
                  <td>
                    <Badge className={`expense-type-badge ${data.ExpenseType === "credit" ? "is-credit" : "is-debit"}`}>
                      {data.ExpenseType}
                    </Badge>
                  </td>
                  <td>
                    <Button variant="outline-light" size="sm" className="table-action" onClick={() => handleEdit(data.id)}>
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button variant="outline-danger" size="sm" className="table-action delete-action" onClick={() => handleDelete(data.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default List;
