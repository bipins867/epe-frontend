import React from "react";
import { Card, Table, Button, Row, Col } from "react-bootstrap";
import "./View.css";

export const ViewPage = () => {
  // Sample Data
  const customerProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "9876543210",
    employeeId: "EMP123",
    candidateId: "CAN456",
    joiningDate: "2023-01-15",
  };

  const kycDetails = {
    kycStatus: "Verified",
    panStatus: "Verified",
  };

  const piggyBox = {
    piggyBalance: 12000,
    unclearedBalance: 500,
    interestBalance: 300,
    isFundedFirst: true,
  };

  const bankDetails = {
    bankName: "State Bank of India",
    accountNumber: "1234567890",
    name: "John Doe",
    ifscCode: "SBIN0012345",
  };

  const withdrawalRequests = [
    { id: "REQ001", date: "2024-11-20", amount: 5000, status: "PENDING" },
  ];

  return (
    <div className="customer-view-page">
      {/* Customer Profile Section */}
      <Card className="customer-card">
        <Card.Header className="customer-card-header">Customer Profile</Card.Header>
        <Card.Body>
          <Table bordered className="customer-view-table">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{customerProfile.name}</td>
                <td>Email</td>
                <td>{customerProfile.email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{customerProfile.phone}</td>
                <td>Employee ID</td>
                <td>{customerProfile.employeeId}</td>
              </tr>
              <tr>
                <td>Candidate ID</td>
                <td>{customerProfile.candidateId}</td>
                <td>Joining Date</td>
                <td>{customerProfile.joiningDate}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* KYC Section */}
      <Card className="customer-card mt-4">
        <Card.Header className="customer-card-header">KYC Details</Card.Header>
        <Card.Body>
          <Table bordered className="customer-view-table">
            <tbody>
              <tr>
                <td>KYC Status</td>
                <td>{kycDetails.kycStatus}</td>
                <td>PAN Status</td>
                <td>{kycDetails.panStatus}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Piggy Box Section */}
      <Card className="customer-card mt-4">
        <Card.Header className="customer-card-header">Piggy Box</Card.Header>
        <Card.Body>
          <Table bordered className="customer-view-table">
            <tbody>
              <tr>
                <td>Piggy Balance</td>
                <td>{piggyBox.piggyBalance}</td>
                <td>Uncleared Balance</td>
                <td>{piggyBox.unclearedBalance}</td>
              </tr>
              <tr>
                <td>Interest Balance</td>
                <td>{piggyBox.interestBalance}</td>
                <td>Is Funded First</td>
                <td>{piggyBox.isFundedFirst ? "Yes" : "No"}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Bank Details Section */}
      <Card className="customer-card mt-4">
        <Card.Header className="customer-card-header">Bank Details</Card.Header>
        <Card.Body>
          <Table bordered className="customer-view-table">
            <tbody>
              <tr>
                <td>Bank Name</td>
                <td>{bankDetails.bankName}</td>
                <td>Account Number</td>
                <td>{bankDetails.accountNumber}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{bankDetails.name}</td>
                <td>IFSC Code</td>
                <td>{bankDetails.ifscCode}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Withdrawal Requests Section */}
      <Card className="customer-card mt-4">
        <Card.Header className="customer-card-header">Withdrawal Requests</Card.Header>
        <Card.Body>
          <Table bordered className="customer-view-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Request ID</th>
                <th>Request Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {withdrawalRequests.map((request, index) => (
                <tr key={request.id}>
                  <td>{index + 1}</td>
                  <td>{request.id}</td>
                  <td>{request.date}</td>
                  <td>{request.amount}</td>
                  <td>{request.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Decision Section */}
      <Card className="customer-card mt-4">
        <Card.Header className="customer-card-header">Decision Section</Card.Header>
        <Card.Body>
          <Row>
            <Col className="text-center">
              <Button variant="success" className="decision-button">
                Approve
              </Button>
            </Col>
            <Col className="text-center">
              <Button variant="danger" className="decision-button">
                Reject
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};


