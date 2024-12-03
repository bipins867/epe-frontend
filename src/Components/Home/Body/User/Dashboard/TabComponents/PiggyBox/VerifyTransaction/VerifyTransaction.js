import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import "./VerifyTransaction.css";
import { useParams } from "react-router-dom";
import { useAlert } from "../../../../../../../UI/Alert/AlertContext";
import { verifyTransactionHandler } from "./apiHandler";

export const VerifyTransactionPage = () => {
  const { transactionId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { showAlert } = useAlert();
  const [error, setError] = useState(""); // State to handle errors
  const [transactionDetails, setTransactionDetails] = useState({
    merchantTransactionId: transactionId,
    status: "NA",
    amount: "NA",
    time: "NA",
  });

  // Simulate an API call or validation for the transaction ID
  useEffect(() => {
    const fetchTransactionDetails = async () => {
      setError(null);
      const response = await verifyTransactionHandler(
        transactionId,
        setIsLoading,
        showAlert
      );

      if (response) {
        setTransactionDetails({
          merchantTransactionId: response.merchantTransactionId,
          status: response.status,
          amount: response.amount,
          time: response.time,
        });
      } else {
        setError("Transaction not found or invalid.");
      }
    };
    
    fetchTransactionDetails();
  }, [transactionId, showAlert]); // Added dependencies here

  return (
    <Container className="verify-transaction-container py-5">
      {isLoading ? (
        <div className="loading-screen">
          <Spinner animation="border" role="status" className="loading-spinner">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h4 className="loading-text">Fetching Transaction Details...</h4>
        </div>
      ) : (
        <Row className="justify-content-center">
          <Col md={6} className="details-container">
            <h2 className="text-center mb-4 verify-title">
              Transaction Details
            </h2>

            {error && (
              <Alert variant="danger" className="mb-4">
                {error}
              </Alert>
            )}

            <div className="details-row">
              <div className="details-header">Merchant Transaction ID:</div>
              <div className="details-value">
                {transactionDetails.merchantTransactionId}
              </div>
            </div>
            <div className="details-row">
              <div className="details-header">Status:</div>
              <div className="details-value">{transactionDetails.status}</div>
            </div>
            <div className="details-row">
              <div className="details-header">Amount:</div>
              <div className="details-value">
                ₹{transactionDetails.amount.toFixed(2)}
              </div>
            </div>
            <div className="details-row">
              <div className="details-header">Time of Payment:</div>
              <div className="details-value">
                {new Date(transactionDetails.time).toLocaleString("en-IN", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </div>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};
