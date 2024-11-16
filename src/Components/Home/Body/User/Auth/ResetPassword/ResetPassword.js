import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './ResetPassword.css';
import { Link } from 'react-router-dom';

export const ResetPasswordPage = () => {
  const [customerId, setCustomerId] = useState('');
  const [phone, setPhone] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes
  const handleCustomerIdChange = (e) => setCustomerId(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  // Handle Reset Password
  const handleResetPassword = () => {
    if (!customerId || !phone || !newPassword || !confirmPassword) {
      setError('Please fill all fields');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    // Simulate password reset logic
    // Replace this with actual API call to reset the password
    setSuccessMessage('Password reset successfully! You can now login.');
  };

  return (
    <div className="reset-password-page">
      <div className="reset-password-background"></div>
      <Container fluid className="reset-password-container">
        <Row className="justify-content-center align-items-center h-100">
          {/* Left Content Section */}
          <Col md={6} className="reset-password-left">
            <div className="content-box">
              <h1>Reset Password</h1>
              <p>Please enter your Customer ID and Phone number to reset your password.</p>
              <img
                src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1010.jpg"
                alt="Reset Password Illustration"
                className="reset-password-illustration"
              />
            </div>
          </Col>

          {/* Right Reset Password Form Section */}
          <Col md={5} className="reset-password-right d-flex align-items-center">
            <Card className="reset-password-card w-100">
              <Card.Body>
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
                  {successMessage && <div className="success-message text-success">{successMessage}</div>}

                  {/* Reset Password Button */}
                  <Button
                    variant="primary"
                    onClick={handleResetPassword}
                    className="w-100 mb-3"
                  >
                    Reset Password
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