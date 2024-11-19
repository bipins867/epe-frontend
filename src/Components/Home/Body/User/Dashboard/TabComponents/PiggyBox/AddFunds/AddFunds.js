import React, { useState } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import "./AddFunds.css";

export const AddFundsPage = () => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    // Add funds logic here
    console.log("Funds added:", amount);
  };

  return (
    <Container className="add-funds-page">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card className="shadow">
            <Card.Body>
              <h3 className="text-center mb-4">Add Funds</h3>
              <Form onSubmit={handleSubmit} id="addfundForm">
                <Form.Group className="mb-3" controlId="formAmount">
                  <Form.Label>Enter Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100">
                  Add
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

