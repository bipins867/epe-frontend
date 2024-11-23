import React, { useState } from "react";
import { Card, Table, Form, Button, Row, Col } from "react-bootstrap";
import "./TransactionHistory.css";

export const TransactionHistoryPage = () => {
  // State to handle filters and transaction data
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    limit: 20,
  });

  const [transactionHistory, setTransactionHistory] = useState([
    // Sample data
    {
      id: 1,
      date: "2024-11-21",
      time: "12:34:56",
      transactionType: "Credit",
      candidateId: "CAN123",
      remark: "Monthly Interest",
      debit: 0,
      credit: 500,
      balance: 15000,
    },
    {
      id: 2,
      date: "2024-11-20",
      time: "10:20:30",
      transactionType: "Debit",
      candidateId: "CAN123",
      remark: "Withdrawal Request",
      debit: 1000,
      credit: 0,
      balance: 14000,
    },
  ]);

  // Event handlers for form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGetResults = () => {
    // API call to fetch transaction history based on filters
    console.log("Fetching data with filters: ", filters);
    // Simulate fetched data
    setTransactionHistory([
      {
        id: 3,
        date: "2024-11-19",
        time: "09:15:45",
        transactionType: "Credit",
        candidateId: "CAN123",
        remark: "Fund Added",
        debit: 0,
        credit: 2000,
        balance: 16000,
      },
    ]);
  };

  return (
    <div className="transaction-history-page">
      {/* Filter Section */}
      <Card className="transaction-filter-card">
        <Card.Header className="transaction-card-header">Filter Transactions</Card.Header>
        <Card.Body>
          <Form>
            <Row className="align-items-center">
              <Col md={4}>
                <Form.Group controlId="fromDate">
                  <Form.Label>From Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="fromDate"
                    value={filters.fromDate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="toDate">
                  <Form.Label>To Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="toDate"
                    value={filters.toDate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group controlId="limit">
                  <Form.Label>Limit</Form.Label>
                  <Form.Control
                    as="select"
                    name="limit"
                    value={filters.limit}
                    onChange={handleInputChange}
                  >
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={2} className="text-end">
                <Button variant="primary" onClick={handleGetResults} className="mt-3">
                  Get Result
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      {/* Transaction History Table */}
      <Card className="transaction-history-card mt-4">
        <Card.Header className="transaction-card-header">Transaction History</Card.Header>
        <Card.Body>
          <Table bordered className="transaction-history-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Time</th>
                <th>Transaction Type</th>
                <th>Candidate ID</th>
                <th>Remark</th>
                <th>Debit</th>
                <th>Credit</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {transactionHistory.map((transaction, index) => (
                <tr key={transaction.id}>
                  <td>{index + 1}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.time}</td>
                  <td>{transaction.transactionType}</td>
                  <td>{transaction.candidateId}</td>
                  <td>{transaction.remark}</td>
                  <td>{transaction.debit}</td>
                  <td>{transaction.credit}</td>
                  <td>{transaction.balance}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

