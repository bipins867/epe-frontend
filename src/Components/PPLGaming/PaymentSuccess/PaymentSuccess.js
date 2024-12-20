// Import necessary modules
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./PaymentSuccess.css";

export const PaymentSuccessPage = () => {
  const transactionId = "ldfso342djfl";
  const amount = 10000;
  const status = "Success";
  const paymentTime = new Date().toLocaleString(); // Get current date and time

  const [timer, setTimer] = useState(3);
  const [redirectActive, setRedirectActive] = useState(false);

  const onRedirect = () => {
    console.log("Redirected");
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setRedirectActive(true);
      if (onRedirect) onRedirect();
    }
  }, [timer, onRedirect]);

  return (
    <Container fluid className="transaction-page-container">
      <Row className="transaction-page-header">
        <Col className="text-center">
          <Image
            src="/Assets/Logo/PPL.jpg"
            alt="PPL Gaming Logo"
            className="transaction-page-logo"
          />
        </Col>
      </Row>
      <Row className="transaction-page-content">
        <Col className="text-center">
          <h1 className="transaction-page-title">Payment Successful</h1>
          <p className="transaction-page-description">
            <strong>Transaction ID:</strong> {transactionId}
          </p>
          <p className="transaction-page-description">
            <strong>Amount:</strong> ${amount}
          </p>
          <p className="transaction-page-description">
            <strong>Status:</strong> {status}
          </p>
          <p className="transaction-page-description">
            <strong>Payment Time:</strong> {paymentTime}
          </p>
          {timer > 0 ? (
            <p className="transaction-page-timer">
              Redirecting in {timer} seconds...
            </p>
          ) : (
            <Button
              variant="primary"
              className="transaction-page-button"
              onClick={onRedirect}
            >
              Pay Now
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};
