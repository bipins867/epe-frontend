import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./ForgotCustomerId.css";
import { Link } from "react-router-dom";

export const ForgotCustomerIdPage = () => {
  const [phone, setPhone] = useState("");
  const [customerId, setCustomerId] = useState(null);
  const [error, setError] = useState("");

  // Handle phone input change
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  // Handle Get Customer ID click
  const handleGetCustomerId = () => {
    // Basic validation
    if (!phone || phone.length !== 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setError("");
    // Simulate fetching customer ID (You would replace this with an actual API call)
    // For now, we just simulate success with a static customer ID
    setCustomerId("CUST123456");
  };

  return (
    <div className="forgot-customer-id-page">
      <div className="forgot-customer-id-background"></div>
      <Container fluid className="forgot-customer-id-container">
        <Row className="justify-content-center align-items-center h-100">
          {/* Left Content Section */}
          <Col md={6} className="forgot-customer-id-left">
            <div className="content-box">
              <h1>Forgot Customer ID</h1>
              <p>
                Please enter your phone number to retrieve your Customer ID.
              </p>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/forgot-password-illustration-download-in-svg-png-gif-file-formats--man-forget-business-activity-pack-illustrations-3551744.png"
                alt="Forgot Customer ID Illustration"
                className="forgot-customer-id-illustration"
              />
            </div>
          </Col>

          {/* Right Forgot Customer ID Form Section */}
          <Col
            md={5}
            className="forgot-customer-id-right d-flex align-items-center"
          >
            <Card className="forgot-customer-id-card w-100">
              <Card.Body>
                <h2 className="text-center mb-4">Retrieve Customer ID</h2>
                <Form>
                  {/* Phone Number Input */}
                  <Form.Group controlId="formPhone" className="mb-3">
                    <Form.Label>Enter Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      maxLength="10"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="Enter your phone number"
                      className="phone-input"
                    />
                  </Form.Group>

                  {/* Error Message */}
                  {error && (
                    <div className="error-message text-danger">{error}</div>
                  )}

                  {/* Get Customer ID Button */}
                  <Button
                    variant="primary"
                    onClick={handleGetCustomerId}
                    className="w-100 mb-3"
                  >
                    Get Customer ID
                  </Button>

                  {/* Display Customer ID if available */}
                  {customerId && (
                    <div className="text-center mb-3">
                      <h5>Your Customer ID: {customerId}</h5>
                    </div>
                  )}
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
