import { ExpenseContext } from "../context/ExpenseContext";
import { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./ExpenseData.css";


const ExpenseData =() =>{
    const {balance, credit, debit} = useContext(ExpenseContext);

    return (
        <Row className="g-3 summary-row">
            <Col xs={12} sm={4}>
                <Card className="summary-card summary-credit h-100">
                    <Card.Body>
                        <div className="summary-label"><span className="summary-icon">↙</span> Total credit</div>
                        <div className="summary-value">₹{credit}</div>
                        <div className="summary-note">Money received</div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={4}>
                <Card className="summary-card summary-debit h-100">
                    <Card.Body>
                        <div className="summary-label"><span className="summary-icon">↗</span> Total debit</div>
                        <div className="summary-value">₹{debit}</div>
                        <div className="summary-note">Money spent</div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={4}>
                <Card className="summary-card summary-balance h-100">
                    <Card.Body>
                        <div className="summary-label"><span className="summary-icon">◈</span> Balance</div>
                        <div className="summary-value">₹{balance}</div>
                        <div className="summary-note">Your net balance</div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default ExpenseData;