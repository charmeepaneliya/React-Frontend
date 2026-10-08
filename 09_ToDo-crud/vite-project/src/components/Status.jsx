import {Card, Row, Col} from "react-bootstrap";



const Status = ({totalTask, completedTask, pendingTask}) => {
  return (
    <>

        <Row className="g-3 mb-4">
            <Col md={4}>
                <Card className="status-card total-card">
                    <Card.Body>
                        <div className="status-icon">📋</div>
                        <h4>TotalTask:{totalTask}</h4>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="status-card completed-card">
                    <Card.Body>
                        <div className="status-icon">✅</div>
                        <h1>CompletedTask:{completedTask}</h1>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="status-card pending-card">
                    <Card.Body>
                        <div className="status-icon">⏳</div>
                        <h1>PendingTask:{pendingTask}</h1>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      
      
      
    </>
  )
}

export default Status
