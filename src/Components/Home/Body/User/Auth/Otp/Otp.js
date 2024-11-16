import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Otp.css";
import { Link } from "react-router-dom";

export const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  // Handle OTP input change
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  // Countdown timer logic
  useEffect(() => {
    if (timer === 0) {
      setIsResendEnabled(true); // Enable resend button after countdown
      return;
    }

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // Resend OTP handler
  const handleResendOtp = () => {
    setIsResendEnabled(false);
    setTimer(30); // Reset timer to 30 seconds
    setOtp(""); // Clear OTP input
  };

  return (
    <div className="otp-page">
      <div className="otp-background"></div>
      <Container fluid className="otp-container">
        <Row className="justify-content-center align-items-center h-100">
          {/* Left Content Section */}
          <Col md={6} className="otp-left">
            <div className="content-box">
              <h1>Enter OTP</h1>
              <p>
                Please enter the 6-digit OTP sent to your phone number to verify
                your account.
              </p>
              <img
                src="https://img.freepik.com/premium-vector/enter-otp-concept-illustration_86047-735.jpg?semt=ais_hybrid"
                alt="OTP Illustration"
                className="otp-illustration"
              />
            </div>
          </Col>

          {/* Right OTP Form Section */}
          <Col md={5} className="otp-right d-flex align-items-center">
            <Card className="otp-card w-100">
              <Card.Body>
                <h2 className="text-center mb-4">OTP Verification</h2>
                <Form>
                  {/* OTP Input (6 Digits) */}
                  <Form.Group controlId="formOtp" className="mb-3">
                    <Form.Label>Enter OTP</Form.Label>
                    <Form.Control
                      type="text"
                      maxLength="6"
                      value={otp}
                      onChange={handleOtpChange}
                      placeholder="Enter OTP"
                      className="otp-input"
                    />
                  </Form.Group>

                  {/* Submit OTP Button */}
                  <Button variant="primary" type="submit" className="w-100">
                    Submit OTP
                  </Button>

                  {/* Resend OTP Button */}
                  <div className="text-center mt-3">
                    <Button
                      variant="link"
                      onClick={handleResendOtp}
                      disabled={!isResendEnabled}
                    >
                      Resend OTP {isResendEnabled ? "" : `(${timer}s)`}
                    </Button>
                  </div>
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
