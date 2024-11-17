import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
  Card,
} from "react-bootstrap";
import "./PiggyBox.css";
import { PageComponent } from "../../../../../../Utils/Utils";

export const PiggyBoxPage = () => {
  const user = {
    name: "Bipin Singh",
    customerId: "SDUPM59598",
    kycStatus: "Completed",
    piggyBalance: 12500.75,
    unclearedBalance: 250.0,
  };

  const transactions = [
    {
      date: "2024-11-01",
      time: "10:30 AM",
      transactionId: "TXN001",
      transactionType: "Credit",
      description: "Monthly Interest",
      credit: 500,
      debit: 0,
      balance: 13000.75,
    },
    {
      date: "2024-10-25",
      time: "03:15 PM",
      transactionId: "TXN002",
      transactionType: "Debit",
      description: "Withdrawal Request",
      credit: 0,
      debit: 500,
      balance: 12500.75,
    },
  ];

  const [dateFilter, setDateFilter] = useState({
    from: "",
    to: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setDateFilter((prev) => ({ ...prev, [name]: value }));
  };

  const handleGetTransactions = () => {
    console.log("Fetching transactions for:", dateFilter);
  };

  const handleAddReserve = () => {
    console.log("Add Reserve clicked!");
  };

  return (
    <Container className="piggybox-page py-4">
      <PageComponent title={"Piggy Box"}/>
      <Row className="mb-4">
        <Col md={6} xs={12}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="text-primary">User Information</Card.Title>
              <div className="user-info">
                <p>
                  <strong>Customer Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Customer ID:</strong> {user.customerId}
                </p>
                <p>
                  <strong>KYC Status:</strong> {user.kycStatus}
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xs={12}>
          <Card>
            <Card.Body>
              <Card.Title className="text-primary">PiggyBox Details</Card.Title>
              <p>
                <strong>PiggyBox Balance:</strong> ₹
                {user.piggyBalance.toFixed(2)}
              </p>
              <p>
                <strong>Uncleared Balance:</strong> ₹
                {user.unclearedBalance.toFixed(2)}
              </p>
              <div className="action-buttons mt-3">
                <Button
                  variant="primary"
                  onClick={handleAddReserve}
                  className="me-2"
                >
                  <i className="fas fa-plus-circle"></i> Add Reserve
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Form className="d-flex gap-3 filter-form">
            <Form.Group controlId="fromDate">
              <Form.Label>From Date</Form.Label>
              <Form.Control
                type="date"
                name="from"
                value={dateFilter.from}
                onChange={handleFilterChange}
              />
            </Form.Group>
            <Form.Group controlId="toDate">
              <Form.Label>To Date</Form.Label>
              <Form.Control
                type="date"
                name="to"
                value={dateFilter.to}
                onChange={handleFilterChange}
              />
            </Form.Group>
            <Button
              variant="success"
              className="align-self-end"
              onClick={handleGetTransactions}
            >
              Get Transactions
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="text-primary">
                Transaction History
              </Card.Title>
              <div className="transaction-table-container">
                <Table striped bordered hover responsive="sm">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Transaction ID</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Credit</th>
                      <th>Debit</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((txn, index) => (
                      <tr key={index}>
                        <td>{txn.date}</td>
                        <td>{txn.time}</td>
                        <td>{txn.transactionId}</td>
                        <td>{txn.transactionType}</td>
                        <td>{txn.description}</td>
                        <td>₹{txn.credit.toFixed(2)}</td>
                        <td>₹{txn.debit.toFixed(2)}</td>
                        <td>₹{txn.balance.toFixed(2)}</td>
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
