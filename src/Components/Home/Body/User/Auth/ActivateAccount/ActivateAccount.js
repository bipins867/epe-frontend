import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import "./ActivateAccount.css";
import { Link } from "react-router-dom";
import { AuthLayout } from "../Utils/AuthLayout/AuthLayout";

export const ActivateAccountPage = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

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
    setIsLoading(true); // Show spinner

    // Simulate account activation logic (Replace this with actual API call)
    setTimeout(() => {
      setSuccessMessage("Account activated successfully! You can now log in.");
      setIsLoading(false); // Hide spinner
    }, 2000);
  };

  return (
    <AuthLayout title={title} description={description} imageUrl={imageUrl}>
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
        {error && <div className="error-message text-danger">{error}</div>}
        {successMessage && (
          <div className="success-message text-success">{successMessage}</div>
        )}

        {/* Activate Account Button */}
        <Button
          variant="primary"
          onClick={handleActivateAccount}
          className="w-100 mb-3"
          disabled={isLoading} // Disable button during loading
        >
          {isLoading ? (
            <>
              <Spinner animation="border" size="sm" /> Activating...
            </>
          ) : (
            "Activate Account"
          )}
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
    </AuthLayout>
  );
};

const title = "Activate Your Account";
const description = `Please enter your phone number to activate your account.`;
const imageUrl =
  "https://img.freepik.com/free-vector/phone-user-activating-account-with-fingerprint-smartphone-screen-biometric-identity_74855-15499.jpg";
