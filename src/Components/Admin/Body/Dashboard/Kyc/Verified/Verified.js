import React from "react";
import { Container, Table, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Verified.css";

export const VerifiedPage = () => {
  const customers = [
    {
      id: 1,
      customerId: "CUST001",
      name: "John Doe",
      date: "2024-11-20",
      time: "10:00 AM",
      employeeId: "EMP123",
    },
    {
      id: 2,
      customerId: "CUST002",
      name: "Jane Smith",
      date: "2024-11-19",
      time: "02:30 PM",
      employeeId: "EMP124",
    },
    {
      id: 3,
      customerId: "CUST003",
      name: "David Brown",
      date: "2024-11-18",
      time: "11:45 AM",
      employeeId: "EMP125",
    },
  ];

  return (
    <Container fluid className="customer-list-page mt-4">
      <h4 className="mb-4 text-primary">Customer List</h4>

      {/* Customer Table */}
      <Card className="shadow-sm">
        <Card.Body>
          <Table bordered responsive hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Employee ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={customer.id}>
                  <td>{index + 1}</td>
                  <td>{customer.customerId}</td>
                  <td>{customer.name}</td>
                  <td>{customer.date}</td>
                  <td>{customer.time}</td>
                  <td>{customer.employeeId}</td>
                  <td>
                    <Link to={`./view/${customer.customerId}`}>
                      <span className="btn btn-info btn-sm">View</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};
