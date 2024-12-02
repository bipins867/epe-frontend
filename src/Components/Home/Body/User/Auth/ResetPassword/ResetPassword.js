import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import "./ResetPassword.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../Utils/AuthLayout/AuthLayout";
import { useAlert } from "../../../../../UI/Alert/AlertContext";
import { resetPasswordHandler } from "./apiHandler";

export const ResetPasswordPage = () => {
  const [customerId, setCustomerId] = useState("");
  const [phone, setPhone] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  // Handle input changes
  const handleCustomerIdChange = (e) => setCustomerId(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  // Handle Reset Password
  const handleResetPassword = async () => {
    if (!customerId || !phone || !newPassword || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    const response = await resetPasswordHandler(
      customerId,
      phone,
      newPassword,
      setIsLoading,
      showAlert
    );

    if (response) {
      const { otpToken, url, otpType } = response;
      navigate("/user/auth/otp", { state: { otpToken, url, otpType } });
      setSuccessMessage("Please proceed for next section!");
    }
  };

  return (
    <AuthLayout title={title} description={description} imageUrl={imageUrl}>
      <h2 className="text-center mb-4">Reset Your Password</h2>
      <Form>
        {/* Customer ID Input */}
        <Form.Group controlId="formCustomerId" className="mb-3">
          <Form.Label>Customer ID</Form.Label>
          <Form.Control
            type="text"
            value={customerId}
            onChange={handleCustomerIdChange}
            placeholder="Enter your Customer ID"
          />
        </Form.Group>

        {/* Phone Number Input */}
        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Enter your phone number"
          />
        </Form.Group>

        {/* New Password Input */}
        <Form.Group controlId="formNewPassword" className="mb-3">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            placeholder="Enter new password"
          />
        </Form.Group>

        {/* Confirm Password Input */}
        <Form.Group controlId="formConfirmPassword" className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm your password"
          />
        </Form.Group>

        {/* Error and Success Messages */}
        {error && <div className="error-message text-danger">{error}</div>}
        {successMessage && (
          <div className="success-message text-success">{successMessage}</div>
        )}

        {/* Reset Password Button */}
        <Button
          variant="primary"
          onClick={handleResetPassword}
          className="w-100 mb-3"
          disabled={isLoading} // Disable button during loading
        >
          {isLoading ? (
            <>
              <Spinner animation="border" size="sm" /> Resetting...
            </>
          ) : (
            "Reset Password"
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

const title = "Reset Password";
const description = `Please enter your Customer ID and Phone number to reset your password.`;
const imageUrl =
  "https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1010.jpg";
