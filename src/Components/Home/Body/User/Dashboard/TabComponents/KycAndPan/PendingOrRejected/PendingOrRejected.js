import { Row, Col, Form, Button, Card } from "react-bootstrap";

export const PendingOrRejected = ({ userDetails }) => {
  const handleSubmitKyc = (e) => {
    e.preventDefault();
    alert("KYC Submitted!");
  };
  return (
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
  );
};
