import { useEffect, useState } from "react";
import { AuthLayout } from "../Utils/AuthLayout/AuthLayout";
import { Form, Button, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAlert } from "../../../../../UI/Alert/AlertContext";

import "./SignUp.css";
import { signUpHandler, verifyReferralHandler } from "./apiHandler";

export const SignUpPage = () => {
  const location = useLocation();

  // State for referral info
  const [referralId, setReferralId] = useState(null);
  const [candidateId, setCandidateId] = useState(null);
  const [referralName, setReferralName] = useState(null);
  const [isReferralLoading, setIsReferralLoading] = useState(false);
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // For Sign-Up button spinner

  useEffect(() => {
    const verifyReferral = async (referralId) => {
      const response = await verifyReferralHandler(referralId, setIsReferralLoading, showAlert);
      if (response && response.data) {
        setCandidateId(response.data.candidateId);
        setReferralName(response.data.name);
      } else {
        setCandidateId("NA");
        setReferralName("NA");
      }
    };
  
    // Parse query parameters
    const queryParams = new URLSearchParams(location.search);
    const referralParam = queryParams.get("referralId");
  
    if (referralParam) {
      setReferralId(referralParam);
      verifyReferral(referralParam);
    }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    if (formData.confirmPassword !== formData.password) {
      return showAlert("error", "Error!", "Password Mismatch!");
    }

    const response = await signUpHandler(
      { ...formData, byReferallId: referralId },
      setIsSubmitting,
      showAlert
    );

    if (response) {
      const { otpToken, url, otpType } = response;
      navigate("/user/auth/otp", { state: { otpToken, url, otpType } });
    }

    // Reset the form after submission
    // setFormData({
    //   employeeId: "",
    //   name: "",
    //   phone: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    // });
  };

  return (
    <AuthLayout title={title} description={description} imageUrl={imageUrl}>
      <h2 className="text-center mb-4">Sign Up</h2>

      {referralId && (
        <div className="referral-info mb-4">
          <h5>Referral Information</h5>
          {isReferralLoading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <>
              <Form.Group controlId="candidateId" className="mb-2">
                <Form.Label>Candidate ID</Form.Label>
                <Form.Control type="text" value={candidateId} readOnly />
              </Form.Group>
              {referralName && (
                <Form.Group controlId="referralName" className="mb-2">
                  <Form.Label>Referral Name</Form.Label>
                  <Form.Control type="text" value={referralName} readOnly />
                </Form.Group>
              )}
            </>
          )}
          <hr />
        </div>
      )}

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
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        {/* Phone Number */}
        <Form.Group controlId="phone" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleInputChange}
            required
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
            required
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
            required
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
            required
          />
        </Form.Group>
        {/* Sign Up Button */}
        <Button
          variant="primary"
          type="submit"
          className="w-100"
          disabled={isSubmitting} // Disable while submitting
        >
          {isSubmitting ? (
            <>
              <Spinner animation="border" size="sm" className="me-2"></Spinner>
              Submitting...
            </>
          ) : (
            "Sign Up"
          )}
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
  );
};

const title = "Join EPE India";
const description = `Create your account to unlock instant loans, referral rewards, and smart investment opportunities with PiggyBox. Let’s shape your financial future together!`;
const imageUrl =
  "https://static.vecteezy.com/system/resources/previews/003/689/230/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg";
