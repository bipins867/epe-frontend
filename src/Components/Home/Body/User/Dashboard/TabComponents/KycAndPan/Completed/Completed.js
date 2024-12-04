import { Row, Col, Form, Button, Card,Alert } from "react-bootstrap";

export const CompletedWithoutAcceptedAggreement = ({ userDetails }) => {
  const handleAcceptTerms = () => {
    alert("Terms Accepted!");
  };
  return (
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
              <img src={userDetails.panImage} alt="PAN" className="img-fluid" />
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
  );
};

export const CompletedWithAcceptedAggreement = () => {
  return (
    <>
      <Alert variant="success" className="text-center">
        Your KYC is completed and terms & conditions are accepted.
      </Alert>
    </>
  );
};
