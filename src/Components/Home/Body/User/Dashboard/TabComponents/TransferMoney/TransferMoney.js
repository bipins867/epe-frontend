import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Table,
} from "react-bootstrap";
import "./TransferMoney.css";
import { PageComponent } from "../../../../../../Utils/Utils";

export const TransferMoneyPage = () => {
  const [recipientId, setRecipientId] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const transferHistory = [
    {
      id: 1,
      date: "2024-11-15",
      time: "09:00 AM",
      remark: "Gift",
      amount: 500,
    },
    {
      id: 2,
      date: "2024-11-16",
      time: "03:30 PM",
      remark: "Help",
      amount: 1000,
    },
  ];

  const piggyBoxDetails = {
    balance: 10000,
  };

  const handleVerifyRecipient = () => {
    // Mock API call to verify recipient
    if (recipientId === "C12345") {
      setRecipientName("John Doe");
    } else {
      setRecipientName("Invalid Customer ID");
    }
  };

  const handleTransfer = () => {
    // Add logic for transfer here
    alert("Transfer Successful!");
  };

  return (
    <Container className="transfer-money-page">
      <PageComponent title={"Transfer Money"} />
      {/* PiggyBox Details */}
      <Row className="mt-4">
        <Col xs={12}>
          <Card className="shadow piggybox-card">
            <Card.Body>
              <Card.Title className="text-primary">PiggyBox Details</Card.Title>
              <Row>
                <Col xs={6} sm={4}>
                  <strong>Piggy Balance:</strong>
                </Col>
                <Col xs={6} sm={8}>
                  ₹{piggyBoxDetails.balance}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Transfer Section */}
      <Row className="mt-4">
        <Col xs={12}>
          <Card className="shadow transfer-card">
            <Card.Body>
              <Card.Title className="text-primary">Transfer Money</Card.Title>
              <Form>
                {/* Recipient Verification */}
                <Form.Group className="mb-3" controlId="recipientId">
                  <Form.Label>Customer ID</Form.Label>
                  <Row>
                    <Col xs={8}>
                      <Form.Control
                        type="text"
                        placeholder="Enter Customer ID"
                        value={recipientId}
                        onChange={(e) => setRecipientId(e.target.value)}
                      />
                    </Col>
                    <Col xs={4}>
                      <Button variant="primary" onClick={handleVerifyRecipient}>
                        Verify
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
                {recipientName && (
                  <div className="recipient-name mb-3">
                    <strong>Recipient Name:</strong> {recipientName}
                  </div>
                )}

                {/* Transfer Amount and Remark */}
                <Form.Group className="mb-3" controlId="transferAmount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control type="number" placeholder="Enter Amount" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="transferRemark">
                  <Form.Label>Remark</Form.Label>
                  <Form.Control type="text" placeholder="Enter Remark" />
                </Form.Group>

                <Button variant="success" onClick={handleTransfer}>
                  Transfer
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Transfer History */}
      <Row className="mt-4">
        <Col xs={12}>
          <Card className="shadow history-card">
            <Card.Body>
              <Card.Title className="text-primary">Transfer History</Card.Title>
              <div className="history-table-container">
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Remark</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transferHistory.map((entry) => (
                      <tr key={entry.id}>
                        <td>{entry.id}</td>
                        <td>{entry.date}</td>
                        <td>{entry.time}</td>
                        <td>{entry.remark}</td>
                        <td>₹{entry.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
