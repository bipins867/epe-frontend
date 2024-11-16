import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './SignUp.css';
import { Link } from 'react-router-dom';

export const SignUpPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-background"></div>
      <Container fluid className="signup-container">
        <Row className="justify-content-center align-items-center h-100">
          {/* Left Content Section */}
          <Col md={6} className="signup-left">
            <div className="content-box">
              <h1>Join EPE India</h1>
              <p>
                Create your account to unlock instant loans, referral rewards, and smart investment
                opportunities with PiggyBox. Let’s shape your financial future together!
              </p>
              <img
                src="https://static.vecteezy.com/system/resources/previews/003/689/230/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
                alt="SignUp Illustration"
                className="signup-illustration"
              />
            </div>
          </Col>

          {/* Right SignUp Form Section */}
          <Col md={5} className="signup-right d-flex align-items-center">
            <Card className="signup-card w-100">
              <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form>
                  {/* Employee ID (Optional) */}
                  <Form.Group controlId="formEmployeeId" className="mb-3">
                    <Form.Label>Employee ID (Optional)</Form.Label>
                    <Form.Control type="text" placeholder="Enter Employee ID" />
                  </Form.Group>
                  {/* Full Name */}
                  <Form.Group controlId="formFullName" className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your full name" />
                  </Form.Group>
                  {/* Phone Number */}
                  <Form.Group controlId="formPhone" className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter your phone number" />
                  </Form.Group>
                  {/* Email (Optional) */}
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email (Optional)</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  {/* Password */}
                  <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                  </Form.Group>
                  {/* Confirm Password */}
                  <Form.Group controlId="formConfirmPassword" className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm your password" />
                  </Form.Group>
                  {/* Sign Up Button */}
                  <Button variant="primary" type="submit" className="w-100">
                    Sign Up
                  </Button>
                  {/* Login Link */}
                  <div className="text-center mt-3">
                    <p>
                      Already have an account?{' '}
                      <Link to="/user/auth/login" className="login-link">
                        Login
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
