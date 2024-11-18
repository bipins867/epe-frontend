import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import "./Kyc.css";

export const KycPage = () => {
  // Mock data for demonstration
  const [status, setStatus] = useState("completed"); // "pending", "rejected", "completed", "review"
  const [userAggreementAccepted, setUserAggreementAccepted] = useState(false);
  const adminRemark = "Your Aadhar number does not match your PAN.";
  const userDetails = {
    name: "John Doe",
    phone: "9876543210",
    customerId: "CUST12345",
    email: "john.doe@example.com",
    dob: "1990-01-01",
    address: "123 Street Name, City, State, PIN-123456",
    aadharNumber: "1234-5678-9101",
    panNumber: "ABCDE1234F",
    userImage: "https://via.placeholder.com/150",
    panImage: "https://via.placeholder.com/150",
    aadharFront: "https://via.placeholder.com/150",
    aadharBack: "https://via.placeholder.com/150",
  };

  const handleSubmitKyc = (e) => {
    e.preventDefault();
    alert("KYC Submitted!");
  };

  const handleAcceptTerms = () => {
    setUserAggreementAccepted(true);
    alert("Terms Accepted!");
  };

  useEffect(()=>{
    setStatus('pending')
  },[])

  return (
    <Container className="kyc-page py-4">
      <h1 className="text-center mb-4">KYC Verification</h1>

      {/* Admin Remark if Rejected */}
      {status === "rejected" && (
        <Alert variant="danger" className="text-center">
          <strong>KYC Rejected:</strong> {adminRemark}
        </Alert>
      )}

      {/* Review Message */}
      {status === "review" && (
        <Alert variant="info" className="text-center">
          <strong>KYC Under Review:</strong> Your KYC is currently being
          reviewed.
        </Alert>
      )}

      {/* Basic Details */}
      <Card className="mb-4 shadow">
        <Card.Body>
          <h5 className="mb-4">Basic Details</h5>
          <Row>
            <Col md={4}>
              <p>
                <strong>Name:</strong> {userDetails.name}
              </p>
            </Col>
            <Col md={4}>
              <p>
                <strong>Phone:</strong> {userDetails.phone}
              </p>
            </Col>
            <Col md={4}>
              <p>
                <strong>Customer ID:</strong> {userDetails.customerId}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* KYC Form */}
      {(status === "pending" || status === "rejected") && (
        <Card className="shadow">
          <Card.Body>
            <h5 className="mb-4">KYC Form</h5>
            <Form onSubmit={handleSubmitKyc}>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      defaultValue={userDetails.email}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      defaultValue={userDetails.dob}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  defaultValue={userDetails.address}
                  required
                />
              </Form.Group>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Aadhar Number</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={userDetails.aadharNumber}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>PAN Number</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={userDetails.panNumber}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>User Image</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>PAN Image</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Aadhar Front</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Aadhar Back</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
              </Row>
              <Button type="submit" className="w-100">
                Submit KYC
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}

      {/* Completed with Agreement Not Accepted */}
      {status === "completed" && !userAggreementAccepted && (
        <>
          <Card className="mb-4 shadow">
  <Card.Body>
    <h5 className="mb-4">KYC Details</h5>
    <Row>
      <Col xs={12} md={6}>
        <p>
          <strong>Email:</strong> {userDetails.email}
        </p>
      </Col>
      <Col xs={12} md={6}>
        <p>
          <strong>Date of Birth:</strong> {userDetails.dob}
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <p>
          <strong>Address:</strong> {userDetails.address}
        </p>
      </Col>
      <Col xs={12} md={6}>
        <p>
          <strong>Aadhar Number:</strong> {userDetails.aadharNumber}
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <p>
          <strong>PAN Number:</strong> {userDetails.panNumber}
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <p>
          <strong>User Image:</strong>
        </p>
        <img
          src={userDetails.userImage}
          alt="User"
          className="img-fluid"
        />
      </Col>
      <Col xs={12} md={6}>
        <p>
          <strong>PAN Image:</strong>
        </p>
        <img
          src={userDetails.panImage}
          alt="PAN"
          className="img-fluid"
        />
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <p>
          <strong>Aadhar Front:</strong>
        </p>
        <img
          src={userDetails.aadharFront}
          alt="Aadhar Front"
          className="img-fluid"
        />
      </Col>
      <Col xs={12} md={6}>
        <p>
          <strong>Aadhar Back:</strong>
        </p>
        <img
          src={userDetails.aadharBack}
          alt="Aadhar Back"
          className="img-fluid"
        />
      </Col>
    </Row>
  </Card.Body>
</Card>

          <Form>
            <Form.Group controlId="termsCheckbox" className="mb-3">
              <Form.Check
                type="checkbox"
                label={
                  <>
                    I accept the{" "}
                    <a
                      href="/terms-and-conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      terms and conditions
                    </a>
                  </>
                }
                required
              />
            </Form.Group>
            <Button onClick={handleAcceptTerms} className="w-100">
              Accept
            </Button>
          </Form>
        </>
      )}

      {/* Completed with Agreement Accepted */}
      {status === "completed" && userAggreementAccepted && (
        <>
          <Alert variant="success" className="text-center">
            Your KYC is completed and terms & conditions are accepted.
          </Alert>
        </>
      )}
    </Container>
  );
};
