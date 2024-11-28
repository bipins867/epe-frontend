import React from "react";
import { Card, Table } from "react-bootstrap";
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

  return (
    <div className="customer-view-page">
      {/* Customer Profile Section */}
      <Card className="customer-card">
        <Card.Header className="customer-card-header">
          Customer Profile
        </Card.Header>
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
    </div>
  );
};
