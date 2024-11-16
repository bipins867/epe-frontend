import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./ActivateAccount.css";
import { Link } from "react-router-dom";

export const ActivateAccountPage = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handlePhoneChange = (e) => setPhone(e.target.value);

  // Handle Account Activation
  const handleActivateAccount = () => {
    if (!phone) {
      setError("Please enter a phone number");
      return;
    }

    if (phone.length !== 10) {
      setError("Phone number must be 10 digits");
      return;
    }

    setError("");
    // Simulate account activation logic
    // Replace this with actual API call to activate the account
    setSuccessMessage("Account activated successfully! You can now log in.");
  };

  return (
    <div className="activate-account-page">
      <div className="activate-account-background"></div>
      <Container fluid className="activate-account-container">
        <Row className="justify-content-center align-items-center h-100">
          {/* Left Content Section */}
          <Col md={6} className="activate-account-left">
            <div className="content-box">
              <h1>Activate Your Account</h1>
              <p>Please enter your phone number to activate your account.</p>
              <img
                src="https://img.freepik.com/free-vector/phone-user-activating-account-with-fingerprint-smartphone-screen-biometric-identity_74855-15499.jpg"
                alt="Activate Account Illustration"
                className="activate-account-illustration"
              />
            </div>
          </Col>

          {/* Right Account Activation Form Section */}
          <Col
            md={5}
            className="activate-account-right d-flex align-items-center"
          >
            <Card className="activate-account-card w-100">
              <Card.Body>
                <h2 className="text-center mb-4">Activate Your Account</h2>
                <Form>
                  {/* Phone Number Input */}
                  <Form.Group controlId="formPhone" className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="Enter your phone number"
                      maxLength="10"
                    />
                  </Form.Group>

                  {/* Error and Success Messages */}
                  {error && (
                    <div className="error-message text-danger">{error}</div>
                  )}
                  {successMessage && (
                    <div className="success-message text-success">
                      {successMessage}
                    </div>
                  )}

                  {/* Activate Account Button */}
                  <Button
                    variant="primary"
                    onClick={handleActivateAccount}
                    className="w-100 mb-3"
                  >
                    Activate Account
                  </Button>
                </Form>

                {/* Login Button */}
                <div className="text-center mt-3">
                  <p>
                    <Link to="/user/auth/login" className="login-link">
                      Login
                    </Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
