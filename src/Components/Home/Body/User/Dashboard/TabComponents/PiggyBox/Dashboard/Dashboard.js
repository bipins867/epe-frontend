import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
  Card,
  Spinner,
} from "react-bootstrap";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import {
  getPiggyBoxInfoHandler,
  getTransactionHistoryHandler,
} from "./apiHandler";
import { useAlert } from "../../../../../../../UI/Alert/AlertContext";

export const DashboardPage = () => {
  const [user, setUser] = useState(null); // Holds user and PiggyBox info
  const [transactions, setTransactions] = useState([]); // Holds transaction data
  const [dateFilter, setDateFilter] = useState({ from: "", to: "" }); // Date filters
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state
  const { showAlert } = useAlert();
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(false); // For transaction spinner

  // Fetch PiggyBox Info on Page Load
  useEffect(() => {
    const fetchPiggyBoxInfo = async () => {
      const response = await getPiggyBoxInfoHandler(setIsLoading, showAlert); // Replace with actual API endpoint
      if (response) {
        setUser(response); // Assuming API returns a `user` object
        setTransactions(response.transactionHistory); // Assuming API returns transaction history
        console.log(response);
      }
    };
  
    fetchPiggyBoxInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Leave the dependency array empty, disable the rule for this line
  

  // Handle input changes for date filter
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setDateFilter((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Get Transactions
  const handleGetTransactions = async () => {
    setError('');
    setIsLoadingTransactions(true); // Start the spinner
    const response = await getTransactionHistoryHandler(
      dateFilter.from,
      dateFilter.to,
      setIsLoadingTransactions,
      showAlert
    );
    setIsLoadingTransactions(false); // Stop the spinner
    if (response) {
      setTransactions(response); // Assuming API returns transaction history
      console.log(response);
    }
  };

  return (
    <Container className="piggybox-page py-4">
      {isLoading && (
        <div className="text-center my-4">
          <Spinner animation="border" variant="primary" />
          <p>Loading...</p>
        </div>
      )}

      {!isLoading && user && (
        <>
          {/* User and PiggyBox Info */}
          <Row className="mb-4">
            <Col>
              <Table
                bordered
                responsive
                className="text-center user-piggybox-table"
              >
                <thead>
                  <tr>
                    <th colSpan={2}>User Information</th>
                    <th colSpan={2}>PiggyBox Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Customer Name</strong>
                    </td>
                    <td>{user.name}</td>
                    <td>
                      <strong>PiggyBox Balance</strong>
                    </td>
                    <td>₹{user.piggyboxBalance.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Customer ID</strong>
                    </td>
                    <td>{user.customerId}</td>
                    <td>
                      <strong>Uncleared Balance</strong>
                    </td>
                    <td>₹{user.unclearedBalance.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>KYC Status</strong>
                    </td>
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
                  {isLoadingTransactions ? (
                    <div className="text-center">
                      <Spinner animation="border" variant="primary" />
                      <p>Loading Transactions...</p>
                    </div>
                  ) : (
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
                              <td>
                                {new Date(txn.createdAt).toLocaleDateString()}
                              </td>
                              <td>
                                {new Date(txn.createdAt).toLocaleTimeString()}
                              </td>
                              <td>{txn.merchantTransactionId || "N/A"}</td>
                              <td>{txn.transactionType}</td>
                              <td>{txn.remark}</td>
                              <td>₹{txn.credit.toFixed(2)}</td>
                              <td>₹{txn.debit.toFixed(2)}</td>
                              <td>₹{txn.balance.toFixed(2)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}

      {/* Error Message */}
      {error && <div className="text-danger text-center my-4">{error}</div>}
    </Container>
  );
};
