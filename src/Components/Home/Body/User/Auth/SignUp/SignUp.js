import { useState } from "react";
import { AuthLayout } from "../Utils/AuthLayout/AuthLayout";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignUp.css';

export const SignUpPage = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    employeeId: "",
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form Data:", formData);
  };

  return (
    <>
      <AuthLayout title={title} description={description} imageUrl={imageUrl}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <Form onSubmit={handleFormSubmit}>
          {/* Employee ID (Optional) */}
          <Form.Group controlId="employeeId" className="mb-3">
            <Form.Label>Employee ID (Optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Employee ID"
              value={formData.employeeId}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* Full Name */}
          <Form.Group controlId="fullName" className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* Phone Number */}
          <Form.Group controlId="phone" className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* Email (Optional) */}
          <Form.Group controlId="email" className="mb-3">
            <Form.Label>Email (Optional)</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* Password */}
          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* Confirm Password */}
          <Form.Group controlId="confirmPassword" className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* Sign Up Button */}
          <Button variant="primary" type="submit" className="w-100">
            Sign Up
          </Button>
          {/* Login Link */}
          <div className="text-center mt-3">
            <p>
              Already have an account?{" "}
              <Link to="/user/auth/login" className="login-link">
                Login
              </Link>
            </p>
          </div>
        </Form>
      </AuthLayout>
    </>
  );
};

const title = "Join EPE India";
const description = `Create your account to unlock instant loans, referral rewards, and smart investment
              opportunities with PiggyBox. Let’s shape your financial future together!
         `;
const imageUrl =
  "https://static.vecteezy.com/system/resources/previews/003/689/230/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg";
