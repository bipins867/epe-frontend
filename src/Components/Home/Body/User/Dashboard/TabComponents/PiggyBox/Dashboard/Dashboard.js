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
import "./Dashboard.css";
import { Link } from "react-router-dom";

export const DashboardPage = () => {
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

  return (
    <Container className="piggybox-page py-4">
      {/* User and PiggyBox Info */}
      <Row className="mb-4">
        <Col>
          <Table bordered responsive className="text-center user-piggybox-table">
            <thead>
              <tr>
                <th colSpan={2}>User Information</th>
                <th colSpan={2}>PiggyBox Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Customer Name</strong></td>
                <td>{user.name}</td>
                <td><strong>PiggyBox Balance</strong></td>
                <td>₹{user.piggyBalance.toFixed(2)}</td>
              </tr>
              <tr>
                <td><strong>Customer ID</strong></td>
                <td>{user.customerId}</td>
                <td><strong>Uncleared Balance</strong></td>
                <td>₹{user.unclearedBalance.toFixed(2)}</td>
              </tr>
              <tr>
                <td><strong>KYC Status</strong></td>
                <td>{user.kycStatus}</td>
                <td colSpan={2}>
                  <Link to="addFunds" className="btn btn-primary">
                    <i className="fas fa-plus-circle"></i> Add Reserve
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Transaction Filters */}
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

      {/* Transaction History */}
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
