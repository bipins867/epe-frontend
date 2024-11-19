import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import "./CloseAccount.css"; // Import the custom CSS for styling

export const CloseAccountPage = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);

  const handleCheckboxChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  const handleSubmit = () => {
    if (acceptedTerms) {
      setIsRequesting(true);
      // Here you can call an API or perform the necessary action to close the account
      console.log("Account closing request initiated...");
    } else {
      alert("You must accept the terms and conditions.");
    }
  };

  return (
    <Container className="mt-5 close-account-container">
      <Card className="shadow close-account-card">
        <Card.Body>
          <Card.Title className="text-danger">Close Account</Card.Title>
          <p className="note-text">
            <strong>Note:</strong> Please note, once closed you may no longer be able to access E PE services.
          </p>

          <Form>
            <Form.Check
              type="checkbox"
              label={
                <span>
                  I accept the{" "}
                  <a href="/terms-and-conditions" target="_blank" className="terms-link">
                    terms and conditions
                  </a>
                  .
                </span>
              }
              checked={acceptedTerms}
              onChange={handleCheckboxChange}
            />
            <div className="mt-3">
              <Button
                variant="danger"
                onClick={handleSubmit}
                disabled={isRequesting || !acceptedTerms}
                className="request-button"
              >
                {isRequesting ? "Requesting..." : "Initiate Closing Account Request"}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
