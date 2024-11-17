import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Form,
  Button,
} from "react-bootstrap";
import "./Withdrawal.css";
import { PageComponent } from "../../../../../../Utils/Utils";

export const WithdrawalPage = () => {
  const withdrawalHistory = [
    {
      id: 1,
      requestId: "REQ001",
      date: "2024-11-01",
      time: "10:00 AM",
      customerId: "C12345",
      amount: 2000,
      remark: "Personal",
      status: "Completed",
    },
    {
      id: 2,
      requestId: "REQ002",
      date: "2024-11-05",
      time: "11:30 AM",
      customerId: "C12345",
      amount: 1500,
      remark: "Urgent",
      status: "Pending",
    },
  ];

  const piggyBoxDetails = {
    balance: 10000,
    unclearedBalance: 2000,
  };

  const settlementDetails = {
    accountHolderName: "John Doe",
    bankName: "State Bank of India",
    accountNumber: "123456789012",
    ifscCode: "SBIN0001234",
  };

  return (
    <Container className="withdrawal-page">
      <PageComponent title={"Withdrawal"} />
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
                <Col xs={6} sm={4}>
                  <strong>Uncleared Balance:</strong>
                </Col>
                <Col xs={6} sm={8}>
                  ₹{piggyBoxDetails.unclearedBalance}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Settlement Details */}
      <Row className="mt-4">
        <Col xs={12}>
          <Card className="shadow settlement-card">
            <Card.Body>
              <Card.Title className="text-primary">
                Settlement Details
              </Card.Title>
              <Row>
                <Col xs={6} sm={4}>
                  <strong>Account Holder Name:</strong>
                </Col>
                <Col xs={6} sm={8}>
                  {settlementDetails.accountHolderName}
                </Col>
                <Col xs={6} sm={4}>
                  <strong>Bank Name:</strong>
                </Col>
                <Col xs={6} sm={8}>
                  {settlementDetails.bankName}
                </Col>
                <Col xs={6} sm={4}>
                  <strong>Account Number:</strong>
                </Col>
                <Col xs={6} sm={8}>
                  {settlementDetails.accountNumber}
                </Col>
                <Col xs={6} sm={4}>
                  <strong>IFSC Code:</strong>
                </Col>
                <Col xs={6} sm={8}>
                  {settlementDetails.ifscCode}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Withdrawal Request Form */}
      <Row className="mt-4">
        <Col xs={12}>
          <Card className="shadow withdrawal-card">
            <Card.Body>
              <Card.Title className="text-primary">
                Request Withdrawal
              </Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="withdrawalAmount">
                  <Form.Label>Withdrawal Amount</Form.Label>
                  <Form.Control type="number" placeholder="Enter Amount" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="withdrawalRemark">
                  <Form.Label>Remark</Form.Label>
                  <Form.Control type="text" placeholder="Enter Remark" />
                </Form.Group>
                <Button variant="primary" className="me-2">
                  Request Withdrawal
                </Button>
                <Button variant="danger">Cancel Withdrawal</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Withdrawal History */}
      <Row className="mt-4">
        <Col xs={12}>
          <Card className="shadow history-card">
            <Card.Body>
              <Card.Title className="text-primary">
                Withdrawal History
              </Card.Title>
              <div className="history-table-container">
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Request ID</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Customer ID</th>
                      <th>Amount</th>
                      <th>Remark</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {withdrawalHistory.map((entry) => (
                      <tr key={entry.id}>
                        <td>{entry.id}</td>
                        <td>{entry.requestId}</td>
                        <td>{entry.date}</td>
                        <td>{entry.time}</td>
                        <td>{entry.customerId}</td>
                        <td>₹{entry.amount}</td>
                        <td>{entry.remark}</td>
                        <td>{entry.status}</td>
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
