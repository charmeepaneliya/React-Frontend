
import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="border-0 shadow-lg rounded-4 text-center p-4 p-md-5">
              
              {/* Icon */}
              <div className="mb-3">
                <i
                  className="bi bi-exclamation-circle-fill text-danger"
                  style={{ fontSize: "70px" }}
                ></i>
              </div>

              {/* 404 */}
              <h1 className="display-1 fw-bold text-primary mb-0">
                404
              </h1>

              <h2 className="fw-bold mt-2">
                Oops! Page Not Found
              </h2>

              <p className="text-secondary fs-5 mt-3">
                Sorry, the page you are looking for doesn't exist
                or may have been moved.
              </p>

              {/* Buttons */}
              <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
                <NavLink to="/" className="text-decoration-none">
                  <Button
                    variant="primary"
                    size="lg"
                    className="px-4 rounded-pill"
                  >
                    <i className="bi bi-house-fill me-2"></i>
                    Go Home
                  </Button>
                </NavLink>

                <Button
                  variant="outline-secondary"
                  size="lg"
                  className="px-4 rounded-pill"
                  onClick={() => window.history.back()}
                >
                  <i className="bi bi-arrow-left me-2"></i>
                  Go Back
                </Button>
              </div>

            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error;

