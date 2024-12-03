import React, { useState } from "react";
import {
  Card,
  Form,
  Button,
  Container,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import "./AddFunds.css";
import { useAlert } from "../../../../../../../UI/Alert/AlertContext";
import { addFundsHandler } from "./apiHandler";

export const AddFundsPage = () => {
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to control loading spinner
  const { showAlert } = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const response = await addFundsHandler(amount, setIsLoading, showAlert);

    if (response) {
      const redirectUrl = response.redirectInfo.url;
      window.location.replace(redirectUrl);
    }
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
                <Button
                  type="submit"
                  variant="primary"
                  className="w-100"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Spinner animation="border" size="sm" /> // Spinner for loading state
                  ) : (
                    "Add"
                  )}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
