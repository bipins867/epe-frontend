import React, { useState, useEffect } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import "./Otp.css";
import { AuthLayout } from "../Utils/AuthLayout/AuthLayout";
import { otpAuthHandler, resentOtpHandler } from "./apiHandler";
import { useAlert } from "../../../../../UI/Alert/AlertContext";

export const OtpPage = () => {
  // Use useLocation hook to access the passed state
  const location = useLocation();
  const { otpToken, url, otpType } = location.state || {}; // Destructure otpToken and url from location.state

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to handle loading status
  const { showAlert } = useAlert();

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
  const handleResendOtp = async () => {
    
    const isOtpResent = () => {
      setIsResendEnabled(false);
      setTimer(30); // Reset timer to 30 seconds
    };
    isOtpResent();
    await resentOtpHandler(otpToken, otpType, showAlert);
    setOtp(""); // Clear OTP input
  };

  // Submit OTP function (simulate loading for demo)
  const handleSubmit = async (e) => {
    e.preventDefault();

    await otpAuthHandler(otp, otpToken, otpType, url, setIsLoading, showAlert);
  };

  return (
    <AuthLayout title={title} description={description} imageUrl={imageUrl}>
      <h2 className="text-center mb-4">OTP Verification</h2>
      <Form onSubmit={handleSubmit}>
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
        <Button
          variant="primary"
          type="submit"
          className="w-100"
          disabled={isLoading}
        >
          {isLoading ? (
            <Spinner animation="border" size="sm" /> // Show spinner when loading
          ) : (
            "Submit OTP"
          )}
        </Button>

        {/* Resend OTP Button */}
        <div className="text-center mt-3">
          <Button
            variant="link"
            onClick={handleResendOtp}
            disabled={!isResendEnabled || isLoading}
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
const imageUrl =
  "https://img.freepik.com/premium-vector/enter-otp-concept-illustration_86047-735.jpg?semt=ais_hybrid";
