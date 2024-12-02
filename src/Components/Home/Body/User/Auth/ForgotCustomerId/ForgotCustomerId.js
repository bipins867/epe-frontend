import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import "./ForgotCustomerId.css";
import { Link } from "react-router-dom";
import { AuthLayout } from "../Utils/AuthLayout/AuthLayout";

export const ForgotCustomerIdPage = () => {
  const [phone, setPhone] = useState("");
  const [customerId, setCustomerId] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

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
    setIsLoading(true); // Show spinner

    // Simulate API call with 2 seconds delay
    setTimeout(() => {
      setCustomerId("CUST123456"); // Simulated customer ID
      setIsLoading(false); // Hide spinner
    }, 2000);
  };

  return (
    <AuthLayout title={title} description={description} imageUrl={imageUrl}>
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
        {error && <div className="error-message text-danger">{error}</div>}

        {/* Get Customer ID Button */}
        <Button
          variant="primary"
          onClick={handleGetCustomerId}
          className="w-100 mb-3"
          disabled={isLoading} // Disable button during loading
        >
          {isLoading ? (
            <>
              <Spinner animation="border" size="sm" /> Retrieving...
            </>
          ) : (
            "Get Customer ID"
          )}
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
    </AuthLayout>
  );
};

const title = "Forgot Customer ID";
const description = `Please enter your phone number to retrieve your Customer ID.`;
const imageUrl =
  "https://cdni.iconscout.com/illustration/premium/thumb/forgot-password-illustration-download-in-svg-png-gif-file-formats--man-forget-business-activity-pack-illustrations-3551744.png";
