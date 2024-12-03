import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
import "./Withdrawal.css";
import { PageComponent } from "../../../../../../Utils/Utils";
import {
  addWithdrawalRequestHandler,
  cancelWithdrawalRequestHandler,
  getWithdralInfoHandler,
} from "./apiHandler";
import { useAlert } from "../../../../../../UI/Alert/AlertContext";

export const WithdrawalPage = () => {
  const [isInfoUpdated, setIsInfoUpdated] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isRequestButtonLoading, setIsRequestButtonLoading] = useState(false);
  const [isCancelButtonLoading, setIsCancelButtonLoading] = useState(false);
  const [piggyBoxDetails, setPiggyBoxDetails] = useState({});
  const [settlementDetails, setSettlementDetails] = useState({});
  const [withdrawalHistory, setWithdrawalHistory] = useState([]);
  const { showAlert } = useAlert();

  const amountRef = useRef();
  const remarkRef = useRef();

  useEffect(() => {
    // Simulate fetching data from backend
    const fetchData = async () => {
      const response = await getWithdralInfoHandler(setIsLoading, showAlert);

      if (response) {
        setSettlementDetails(response.bankDetails);
        setPiggyBoxDetails(response.piggyBoxDetails);
        setWithdrawalHistory(response.withdrawalHistory);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInfoUpdated]);

  const handleRequestWithdrawal = async () => {
    const amount = amountRef.current.value;
    const remark = remarkRef.current.value;

    if (!amount || amount <= 0) {
      showAlert("error", "Error!", "Please enter a valid withdrawal amount.");
      return;
    }

    const response = await addWithdrawalRequestHandler(
      amount,
      remark,
      setIsRequestButtonLoading,
      showAlert
    );

    if (response) {
      showAlert(
        "info",
        "Info!",
        "Withdrawal Request Submitted Successfully!",
        null,
        () => {
          setIsInfoUpdated(isInfoUpdated + 1);
        }
      );
    }
  };

  const handleCancelWithdrawal = async () => {
    const response = await cancelWithdrawalRequestHandler(
      setIsCancelButtonLoading,
      showAlert
    );
    if (response) {
      showAlert(
        "info",
        "Info!",
        "Withdrawal Request Successfully cancelled!",
        null,
        () => {
          setIsInfoUpdated(isInfoUpdated + 1);
        }
      );
    }
  };

  return (
    <Container className="withdrawal-page">
      <PageComponent title={"Withdrawal"} />
      {isLoading ? (
        <div className="loading-screen text-center">
          <Spinner animation="border" role="status" className="loading-spinner">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h4 className="loading-text">Fetching Withdrawal Details...</h4>
        </div>
      ) : (
        <>
          {/* PiggyBox Details */}
          <Row className="mt-4">
            <Col xs={12}>
              <Card className="shadow piggybox-card">
                <Card.Body>
                  <Card.Title className="text-primary">
                    PiggyBox Details
                  </Card.Title>
                  <Table bordered hover responsive className="mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Piggy Balance</strong>
                        </td>
                        <td>₹{piggyBoxDetails.piggyBalance}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Uncleared Balance</strong>
                        </td>
                        <td>₹{piggyBoxDetails.unclearedBalance}</td>
                      </tr>
                    </tbody>
                  </Table>
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
                  <Table bordered hover responsive className="mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Account Holder Name</strong>
                        </td>
                        <td>{settlementDetails.accountHolderName}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Bank Name</strong>
                        </td>
                        <td>{settlementDetails.bankName}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Account Number</strong>
                        </td>
                        <td>{settlementDetails.accountNumber}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>IFSC Code</strong>
                        </td>
                        <td>{settlementDetails.ifscCode}</td>
                      </tr>
                    </tbody>
                  </Table>
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
                      <Form.Control
                        type="number"
                        placeholder="Enter Amount"
                        ref={amountRef} // Reference for amount
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="withdrawalRemark">
                      <Form.Label>Remark</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Remark"
                        ref={remarkRef} // Reference for remark
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      className="me-2"
                      disabled={isRequestButtonLoading}
                      onClick={handleRequestWithdrawal}
                    >
                      {isRequestButtonLoading ? (
                        <Spinner animation="border" size="sm" />
                      ) : (
                        "Request Withdrawal"
                      )}
                    </Button>
                    <Button
                      variant="danger"
                      disabled={isCancelButtonLoading}
                      onClick={handleCancelWithdrawal}
                    >
                      {isCancelButtonLoading ? (
                        <Spinner animation="border" size="sm" />
                      ) : (
                        "Cancel Withdrawal"
                      )}
                    </Button>
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
                            <td>
                              {new Date(entry.createdAt).toLocaleDateString()}
                            </td>
                            <td>
                              {new Date(entry.createdAt).toLocaleTimeString()}
                            </td>
                            <td>{entry.candidateId}</td>
                            <td>₹{entry.amount}</td>
                            <td>{entry.userRemark || "NA"}</td>
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
        </>
      )}
    </Container>
  );
};
