import React, { useEffect, useState } from "react";
import { Container, Alert } from "react-bootstrap";
import "./Kyc.css";
import { PendingOrRejected } from "./PendingOrRejected/PendingOrRejected";
import {
  CompletedWithAcceptedAggreement,
  CompletedWithoutAcceptedAggreement,
} from "./Completed/Completed";
import { BasicDetails } from "./BasicDetails/BasicDetails";

export const KycPage = () => {
  // Mock data for demonstration
  const [status, setStatus] = useState("completed"); // "pending", "rejected", "completed", "review"
  const userAggreementAccepted = false;
  const adminRemark = "Your Aadhar number does not match your PAN.";
  const userDetails = {
    name: "John Doe",
    phone: "9876543210",
    customerId: "CUST12345",
    email: "john.doe@example.com",
    dob: "1990-01-01",
    address: "123 Street Name, City, State, PIN-123456",
    aadharNumber: "1234-5678-9101",
    panNumber: "ABCDE1234F",
    userImage: "https://via.placeholder.com/150",
    panImage: "https://via.placeholder.com/150",
    aadharFront: "https://via.placeholder.com/150",
    aadharBack: "https://via.placeholder.com/150",
  };

  useEffect(() => {
    setStatus("completed");
  }, []);

  return (
    <Container className="kyc-page py-4">
      <h1 className="text-center mb-4">KYC Verification</h1>

      {/* Admin Remark if Rejected */}
      {status === "rejected" && (
        <Alert variant="danger" className="text-center">
          <strong>KYC Rejected:</strong> {adminRemark}
        </Alert>
      )}

      {/* Review Message */}
      {status === "review" && (
        <Alert variant="info" className="text-center">
          <strong>KYC Under Review:</strong> Your KYC is currently being
          reviewed.
        </Alert>
      )}

      {/* Basic Details */}
      <BasicDetails userDetails={userDetails} />

      {/* KYC Form */}
      {(status === "pending" || status === "rejected") && (
        <PendingOrRejected userDetails={userDetails} />
      )}

      {/* Completed with Agreement Not Accepted */}
      {status === "completed" && !userAggreementAccepted && (
        <CompletedWithoutAcceptedAggreement userDetails={userDetails} />
      )}

      {/* Completed with Agreement Accepted */}
      {status === "completed" && userAggreementAccepted && (
        <CompletedWithAcceptedAggreement />
      )}
    </Container>
  );
};
