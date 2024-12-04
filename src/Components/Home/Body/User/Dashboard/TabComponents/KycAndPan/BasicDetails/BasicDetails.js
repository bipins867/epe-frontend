import { Row, Col, Card } from "react-bootstrap";

export const BasicDetails = ({ userDetails }) => {
  return (
    <Card className="mb-4 shadow">
      <Card.Body>
        <h5 className="mb-4">Basic Details</h5>
        <Row className="mb-3">
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

        {/* Additional row for more details if needed */}
        <Row>
          <Col md={4}>
            <p>
              <strong>Email:</strong> {userDetails.email}
            </p>
          </Col>
          <Col md={4}>
            <p>
              <strong>DOB:</strong> {userDetails.dob}
            </p>
          </Col>
          <Col md={4}>
            <p>
              <strong>Address:</strong> {userDetails.address}
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
