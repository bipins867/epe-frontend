import React, { useState, useEffect } from "react";
import {  Form, Button,  } from "react-bootstrap";
import "./Otp.css";
import { Link } from "react-router-dom";
import { AuthLayout } from "../Utils/AuthLayout/AuthLayout";

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
    <AuthLayout title={title} description={description} imageUrl={imageUrl}>
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
    </AuthLayout>
  );
};

const title = "Enter OTP";
const description = `Please enter the 6-digit OTP sent to your phone number to verify
                your account.`;
const imageUrl = "https://img.freepik.com/premium-vector/enter-otp-concept-illustration_86047-735.jpg?semt=ais_hybrid";
