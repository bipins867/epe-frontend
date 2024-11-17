import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Settlement.css";
import { PageComponent } from "../../../../../../Utils/Utils";

export const SettlementPage = () => {
  const [formData, setFormData] = useState({
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = () => {
    // Add API call or update logic here
    alert("Settlement Details Updated!");
  };

  return (
    <Container className="settlement-page">
      <PageComponent title={"Settlement"}/>
      <Row className="mt-5">
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center text-primary">
                Settlement Details
              </Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="bankName">
                  <Form.Label>Bank Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Bank Name"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="accountHolderName">
                  <Form.Label>Account Holder Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Account Holder Name"
                    name="accountHolderName"
                    value={formData.accountHolderName}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="accountNumber">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Account Number"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ifscCode">
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter IFSC Code"
                    name="ifscCode"
                    value={formData.ifscCode}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleUpdate} className="w-100">
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
