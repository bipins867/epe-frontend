import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-background"></div>
      <Container fluid className="login-container">
        <Row className="justify-content-center align-items-center h-100">
          {/* Left Content Section */}
          <Col md={6} className="login-left">
            <div className="content-box">
              <h1>Welcome Back to EPE India</h1>
              <p>
                Log in to access instant loans, referral rewards, and investment
                opportunities with PiggyBox. Empower your financial future
                today!
              </p>
              <img
                src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
                alt="Welcome Illustration"
                className="login-illustration"
              />
            </div>
          </Col>

          {/* Right Login Form Section */}
          <Col md={5} className="login-right d-flex align-items-center">
            <Card className="login-card w-100">
              <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                <Form>
                  {/* Phone Input */}
                  <Form.Group controlId="formPhone" className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your phone number"
                    />
                  </Form.Group>
                  {/* Password Input */}
                  <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                    />
                  </Form.Group>
                  {/* Login Button */}
                  <Button variant="primary" type="submit" className="w-100">
                    Login
                  </Button>
                  {/* SignUp Link */}
                  <div className="text-center mt-3">
                    <p>
                      Don’t have an account?{" "}
                      <Link to="/user/auth/signUp" className="signup-link">
                        SignUp
                      </Link>
                    </p>
                    <hr />
                    <p>
                      Forgot Customer Id?{" "}
                      <Link to="/user/auth/forgotCustomerId" className="signup-link">
                        Get Now
                      </Link>
                    </p>
                    <p>
                      Forgot Password?{" "}
                      <Link to="/user/auth/resetPassword" className="signup-link">
                        Reset Now
                      </Link>
                    </p>
                    <p>
                      Is Account Deactivated?{" "}
                      <Link to="/user/auth/activateAccount" className="signup-link">
                        Activate Now
                      </Link>
                    </p>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
