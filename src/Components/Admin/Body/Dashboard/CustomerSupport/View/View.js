import React, { useState } from "react";
import { Card, Table, Form, Button } from "react-bootstrap";
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

  // State for Admin Remark Form
  const [remark, setRemark] = useState("");

  const handleRemarkSubmit = (e) => {
    e.preventDefault();
    console.log("Admin Remark Submitted:", remark);
    setRemark(""); // Clear the input field after submission
  };

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

      {/* Admin Remark Form Section */}
      <Card className="admin-remark-card mt-4">
        <Card.Header className="admin-remark-header">Admin Remark</Card.Header>
        <Card.Body>
          <Form onSubmit={handleRemarkSubmit}>
            <Form.Group controlId="adminRemark" className="mb-3">
              <Form.Label>Remark</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your remark here..."
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
