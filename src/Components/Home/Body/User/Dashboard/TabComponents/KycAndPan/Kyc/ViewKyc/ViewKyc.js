import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";
import "./ViewKyc.css";

export const ViewKycPage = () => {
  const [kycData, setKycData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accepting, setAccepting] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Simulate fetching KYC data
  useEffect(() => {
    setTimeout(() => {
      setKycData({
        name: "John Doe",
        email: "johndoe@example.com",
        dob: "1990-01-01",
        address: "123 Main St, City, State",
        aadharNumber: "1234-5678-9101",
        aadharFront: "https://via.placeholder.com/150",
        aadharBack: "https://via.placeholder.com/150",
        userImage: "https://via.placeholder.com/150",
        status: "Pending", // Can be "Pending", "Accepted", "Rejected"
        userKycAccepted: false, // False means the checkbox will show
      });
      setLoading(false);
    }, 2000); // Simulating API call
  }, []);

  const handleAcceptTerms = () => {
    setAccepting(true);
    setTimeout(() => {
      setAccepting(false);
      setKycData((prev) => ({ ...prev, userKycAccepted: true }));
      alert("Terms and conditions accepted!");
    }, 2000);
  };

  if (loading) {
    return (
      <div className="loading-screen text-center">
        <Spinner animation="border" role="status" className="loading-spinner">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h4 className="loading-text">Fetching KYC Details...</h4>
      </div>
    );
  }

  return (
   
    <>
    <Card className="kyc-card shadow-sm p-4">
      <h3 className="text-center mb-4">View KYC Details</h3>
      <Alert variant={kycData.status === "Rejected" ? "danger" : "info"} className="text-center">
        <strong>Status:</strong> {kycData.status}
      </Alert>
      <Row className="mb-4">
        <Col md={6} className="mb-3">
          <p>
            <strong>Name:</strong> {kycData.name}
          </p>
          <p>
            <strong>Email:</strong> {kycData.email}
          </p>
          <p>
            <strong>Date of Birth:</strong> {kycData.dob}
          </p>
          <p>
            <strong>Address:</strong> {kycData.address}
          </p>
        </Col>
        <Col md={6}>
          <p>
            <strong>Aadhar Number:</strong> {kycData.aadharNumber}
          </p>
        </Col>
      </Row>
      <Row className="image-row text-center">
        <Col xs={12} sm={4} className="mb-3">
          <div className="image-container">
            <img
              src={kycData.aadharFront}
              alt="Aadhar Front"
              className="img-fluid rounded"
            />
            <p className="image-label">Aadhar Front</p>
          </div>
        </Col>
        <Col xs={12} sm={4} className="mb-3">
          <div className="image-container">
            <img
              src={kycData.aadharBack}
              alt="Aadhar Back"
              className="img-fluid rounded"
            />
            <p className="image-label">Aadhar Back</p>
          </div>
        </Col>
        <Col xs={12} sm={4} className="mb-3">
          <div className="image-container">
            <img
              src={kycData.userImage}
              alt="User"
              className="img-fluid rounded"
            />
            <p className="image-label">User Image</p>
          </div>
        </Col>
      </Row>
      {!kycData.userKycAccepted && (
        <div className="terms-section mt-4 p-3 rounded">
          <div className="d-flex align-items-center mb-3">
            <input
              type="checkbox"
              id="termsCheckbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="me-2"
            />
            <label htmlFor="termsCheckbox">
              I accept the{" "}
              <a
                href="/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms and Conditions
              </a>
            </label>
          </div>
          <Button
            className="accept-btn"
            variant="primary"
            disabled={!termsAccepted || accepting}
            onClick={handleAcceptTerms}
          >
            {accepting ? (
              <>
                <Spinner animation="border" size="sm" /> Accepting...
              </>
            ) : (
              "Accept"
            )}
          </Button>
        </div>
      )}
    </Card>
  </>
  );
};
