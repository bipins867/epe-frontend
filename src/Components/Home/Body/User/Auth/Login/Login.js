import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthLayout } from "../Utils/AuthLayout/AuthLayout";
import { loginHandler } from "./apiHandler";


export const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    await loginHandler(phone, password, setIsLoading);
  };

  return (
    <AuthLayout title={title} description={description} imageUrl={imageUrl}>
      <h2 className="text-center mb-4">Login</h2>
      <Form onSubmit={handleLogin}>
        {/* Phone Input */}
        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Form.Group>
        {/* Password Input */}
        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        {/* Login Button */}
        <Button variant="primary" type="submit" className="w-100" disabled={isLoading}>
          {isLoading ? <Spinner as="span" animation="border" size="sm" role="status" /> : "Login"}
        </Button>
        {/* SignUp and Other Links */}
        <div className="text-center mt-3">
          <p>
            Don’t have an account?{" "}
            <Link to="/user/auth/signUp" className="signup-link">
              SignUp
            </Link>
          </p>
          <hr />
          <p>
            Forgot Customer Id?{" "}
            <Link to="/user/auth/forgotCustomerId" className="signup-link">
              Get Now
            </Link>
          </p>
          <p>
            Forgot Password?{" "}
            <Link to="/user/auth/resetPassword" className="signup-link">
              Reset Now
            </Link>
          </p>
          <p>
            Is Account Deactivated?{" "}
            <Link to="/user/auth/activateAccount" className="signup-link">
              Activate Now
            </Link>
          </p>
        </div>
      </Form>
    </AuthLayout>
  );
};

const title = "Welcome Back to EPE India";
const description = `Log in to access instant loans, referral rewards, and investment opportunities with PiggyBox. Empower your financial future today!`;
const imageUrl = "https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg";
