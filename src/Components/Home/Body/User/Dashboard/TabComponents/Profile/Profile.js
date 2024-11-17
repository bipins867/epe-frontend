import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import "./Profile.css";
import { PageComponent } from "../../../../../../Utils/Utils";

export const ProfilePage = () => {
  // Dummy user data
  const dummyUser = {
    name: "John Doe",
    customerId: "CUST12345",
    kycStatus: "Approved", // Can also be "Pending" or other statuses
    email: "john.doe@example.com",
    phone: "9876543210",
    piggyBoxBalance: 12543.67,
    profileImage:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg", // Replace with a valid image path or URL
  };

  // Dummy referral information
  const dummyReferralInfo = {
    name: "Jane Smith",
    customerId: "CUST67890",
  };

  // Dummy settlement status
  const dummySettlementStatus = "Updated"; // Can also be "Pending"

  const {
    name,
    customerId,
    kycStatus,
    email,
    phone,
    piggyBoxBalance,
    profileImage,
  } = dummyUser;

  const handleCloseAccount = () => {
    console.log("Close Account clicked!");
  };

  return (
    <Container className="user-profile-page py-4">
      <PageComponent title={"User Profile"}/>
      {/* Profile Header */}
      <Row className="justify-content-center text-center">
        <Col md={4} sm={6} xs={8}>
          <div className="profile-image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center text-center mt-3">
        <Col>
          <h3>{name}</h3>
          <p className="text-muted">Customer ID: {customerId}</p>
          <Badge
            bg={kycStatus === "Approved" ? "success" : "warning"}
            className="kyc-status-badge"
          >
            KYC: {kycStatus}
          </Badge>
        </Col>
      </Row>

      {/* User Details */}
      <Row className="mt-4">
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Email Address</Card.Title>
              <Card.Text>{email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Phone Number</Card.Title>
              <Card.Text>{phone}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>PiggyBox Balance</Card.Title>
              <Card.Text>₹{piggyBoxBalance.toFixed(2)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Settlement Status</Card.Title>
              <Card.Text>
                <Badge
                  bg={
                    dummySettlementStatus === "Updated" ? "success" : "danger"
                  }
                >
                  {dummySettlementStatus}
                </Badge>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Referral Info */}
      <Row className="mt-4">
        <Col>
          <Card className="referral-card">
            <Card.Body>
              <Card.Title>Referral Information</Card.Title>
              {dummyReferralInfo ? (
                <>
                  <p>Name: {dummyReferralInfo.name}</p>
                  <p>Customer ID: {dummyReferralInfo.customerId}</p>
                </>
              ) : (
                <p>No referral information available</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Logout Button */}
      <Row className="mt-4 text-center">
        <Col className="button-container">
          <Button variant="danger" size="lg" className="logout-button">
            Logout
          </Button>
          <Button
            variant="danger"
            onClick={handleCloseAccount}
            className="close-account-button"
          >
            <i className="fas fa-times-circle"></i> Close Account
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
