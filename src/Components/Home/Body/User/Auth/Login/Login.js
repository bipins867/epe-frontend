import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthLayout } from "../Utils/AuthLayout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title={title} description={description} imageUrl={imageUrl}>
      <h2 className="text-center mb-4">Login</h2>
      <Form>
        {/* Phone Input */}
        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter your phone number" />
        </Form.Group>
        {/* Password Input */}
        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>
        {/* Login Button */}
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
        {/* SignUp Link */}
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
const description = `Log in to access instant loans, referral rewards, and investment
                opportunities with PiggyBox. Empower your financial future
                today!`;
const imageUrl =
  "https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg";
