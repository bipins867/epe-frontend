import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Table,
  Spinner,
} from "react-bootstrap";
import "./TransferMoney.css";
import { PageComponent } from "../../../../../../Utils/Utils";
import { useAlert } from "../../../../../../UI/Alert/AlertContext";
import {
  fetchTransactionHistoryHandler,
  getPiggyBoxDetailsHandler,
  transferMoneyHanlder,
  verifyCustomerHandler,
} from "./apiHandler";

export const TransferMoneyPage = () => {
  const [isInfoUpdated, setIsInfoUpdated] = useState(0);
  const [recipientId, setRecipientId] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [transferRemark, setTransferRemark] = useState("NA");
  const [isPiggyBoxLoading, setPiggyBoxLoading] = useState(false);
  const [isVerifying, setVerifying] = useState(false);
  const [isTransferring, setTransferring] = useState(false);
  const [isHistoryLoading, setHistoryLoading] = useState(false);

  const { showAlert } = useAlert();

  const [transferHistory, setTransferHistory] = useState([]);
  const [piggyBoxDetails, setPiggyBoxDetails] = useState({
    balance: 0,
    unclearedBalance: 0,
  });

  const handleVerifyRecipient = async () => {
    if (!recipientId) {
      return showAlert("error", "Error!", "Please fill all fields correctly!");
    }

    const response = await verifyCustomerHandler(
      recipientId,
      setVerifying,
      showAlert
    );

    if (response) {
      setRecipientName(response.name);
    }
  };

  const handleTransfer = async () => {
    if (
      !transferAmount ||
      !transferRemark ||
      recipientName === "" ||
      !recipientId
    ) {
      showAlert("error", "Error!", "Please fill all fields correctly!");
      return;
    }

    const response = await transferMoneyHanlder(
      recipientId,
      transferAmount,
      recipientName,
      transferRemark,
      setTransferring,
      showAlert
    );

    if (response) {
      setIsInfoUpdated(isInfoUpdated + 1);
    }
  };

  useEffect(() => {
    const fetchInfo = async () => {
      const loadPiggyBoxDetails = async () => {
        const response = await getPiggyBoxDetailsHandler(
          setPiggyBoxLoading,
          showAlert
        );
        if (response) {
          setPiggyBoxDetails({
            balance: response.piggyBalance,
            unclearedBalance: response.unclearedBalance,
          });
        }
      };

      const loadTransactionHistory = async () => {
        const response = await fetchTransactionHistoryHandler(
          setHistoryLoading,
          showAlert
        );

        if (response) {
          setTransferHistory(response);
        }
      };

      loadPiggyBoxDetails();
      loadTransactionHistory();
    };

    fetchInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInfoUpdated]);
  return (
    <Container className="transfer-money-page">
      <PageComponent title={"Transfer Money"} />
      {/* PiggyBox Details */}
      <Row className="mt-4">
        <Col xs={12}>
          <Card className="shadow piggybox-card">
            <Card.Body>
              <Card.Title className="text-primary">PiggyBox Details</Card.Title>
              {isPiggyBoxLoading ? (
                <div className="text-center">
                  <Spinner animation="border" />
                </div>
              ) : (
                <Table bordered hover responsive className="mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Piggy Balance</strong>
                      </td>
                      <td>₹{piggyBoxDetails.balance}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Uncleared Balance</strong>
                      </td>
                      <td>₹{piggyBoxDetails.unclearedBalance}</td>
                    </tr>
                  </tbody>
                </Table>
              )}
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
                      <Button
                        variant="primary"
                        onClick={handleVerifyRecipient}
                        disabled={isVerifying}
                      >
                        {isVerifying ? (
                          <Spinner as="span" animation="border" size="sm" />
                        ) : (
                          "Verify"
                        )}
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
                  <Form.Control
                    type="number"
                    placeholder="Enter Amount"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="transferRemark">
                  <Form.Label>Remark</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Remark"
                    value={transferRemark}
                    onChange={(e) => setTransferRemark(e.target.value)}
                  />
                </Form.Group>

                <Button
                  variant="success"
                  onClick={handleTransfer}
                  disabled={isTransferring}
                >
                  {isTransferring ? (
                    <Spinner as="span" animation="border" size="sm" />
                  ) : (
                    "Transfer"
                  )}
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
                {isHistoryLoading ? (
                  <div className="text-center">
                    <Spinner animation="border" />
                  </div>
                ) : (
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Remark</th>
                        <th>Credit</th>
                        <th>Debit</th>
                        <th>Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transferHistory.map((entry) => (
                        <tr key={entry.id}>
                          <td>{entry.id}</td>
                          <td>
                            {new Date(entry.createdAt).toLocaleDateString()}
                          </td>
                          <td>
                            {new Date(entry.createdAt).toLocaleTimeString()}
                          </td>
                          <td>{entry.remark}</td>
                          <td>₹{entry.credit}</td>
                          <td>₹{entry.debit}</td>
                          <td>₹{entry.balance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
