import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./SavedAddress.css";
import { PageComponent } from "../../../../../../Utils/Utils";

export const SavedAddressPage = () => {
  const [formData, setFormData] = useState({
    addressLine1: "",
    addressLine2: "",
    state: "",
    pinCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = () => {
    // Add API call or update logic here
    alert("Address Updated!");
  };

  return (
    <Container className="address-page">
      <PageComponent title={"Saved Address"} />
      <Row className="mt-5">
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center text-primary">
                Update Address
              </Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="addressLine1">
                  <Form.Label>Address Line 1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Address Line 1"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="addressLine2">
                  <Form.Label>Address Line 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Address Line 2"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="state">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="pinCode">
                  <Form.Label>Pin Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Pin Code"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={handleUpdate}
                  className="w-100"
                >
                  Update
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
