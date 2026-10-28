import { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ExpenseContext } from "./context/ExpenseContext";
import Add from "./components/Add";
import ExpenseData from "./components/ExpenceData";
import List from "./components/List";
import "./App.css";

const App = () => {
  // const {amount} = useContext(ExpenseContext);

  // console.log("amount",amount);


  

  return (
    <main className="app-shell">
      <Container fluid="xxl" className="dashboard-container">
        <header className="dashboard-header">
          <div>
            <p className="dashboard-eyebrow">Personal finance</p>
            <h1 className="dashboard-title">Expense Tracker</h1>
            <p className="dashboard-subtitle">
              A clear view of your spending, all in one place.
            </p>
          </div>
          <div className="dashboard-mark" aria-hidden="true">↗</div>
        </header>
        <Row className="g-4">
          <Col xs={12}>
            <ExpenseData />
          </Col>
          <Col xs={12} lg={5}>
            <Add />
          </Col>
          <Col xs={12} lg={7}>
            <List />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default App;
