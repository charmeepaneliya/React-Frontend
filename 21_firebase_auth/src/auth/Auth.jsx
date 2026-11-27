import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const Auth = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (field, e) => {
    setData((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      console.log("sign up data", data);
    } else {
      console.log("Login data", data);
    }
  };
  return (
    <>
      <Container className="mt-5">
        <Card className="mx-auto p-4 shadow" style={{ maxWidth: "450px" }}>
          <Card.Body>
            <h1 className="text-center mb-4">
              {isSignUp ? "Sign Up" : "Login Page"}
            </h1>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={data.email}
                  onChange={(e) => handleChange("email", e)}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={data.password}
                  onChange={(e) => handleChange("password", e)}
                  placeholder="Enter password"
                  required
                />
              </Form.Group>

              <Button type="submit" className="w-100 mb-3">
                {isSignUp ? "Sign Up" : "Login"}
              </Button>

              <Button
                type="button"
                variant="outline-success"
                className="w-100 mb-3"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp
                  ? "Already have an account? Login"
                  : "New user? Sign Up"}
              </Button>

              <Button type="button" variant="outline-dark" className="w-100">
                Login with Google
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Auth;
