import React, { useState } from "react";
import { Container, Row, Col, Card, Table, Tabs, Tab, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export const DashboardPage = () => {
  const [key, setKey] = useState("profile");

  // Sample User Info
  const userInfo = {
    name: "John Doe",
    customerId: "CUS123456",
    phone: "9876543210",
    email: "john.doe@example.com",
    piggyBoxBalance: 12000,
  };

  // Sample Materials
  const materials = [
    { title: "Stone", price: 100, color: "#BDBDBD" }, // Gray
    { title: "Iron", price: 500, color: "#9E9E9E" }, // Dark Gray
    { title: "Bronze", price: 2000, color: "#CD7F32" }, // Bronze
    { title: "Silver", price: 5000, color: "#C0C0C0" }, // Silver
    { title: "Gold", price: 15000, color: "#FFD700" }, // Gold
    { title: "Platinum", price: 25000, color: "#E5E4E2" }, // Platinum
    { title: "Diamond", price: 50000, color: "#B9F2FF" }, // Diamond
  ];

  // Sample Purchase History
  const purchaseHistory = [
    {
      id: 1,
      date: "2024-11-20",
      time: "10:00 AM",
      type: "Purchase",
      amount: 5000,
      description: "Purchased Silver Card",
    },
    {
      id: 2,
      date: "2024-11-21",
      time: "03:00 PM",
      type: "Purchase",
      amount: 15000,
      description: "Purchased Gold Card",
    },
  ];

  return (
    <Container className="dashboard-page">
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-4 dashboard-tabs">
        {/* Tab 1: Profile */}
        <Tab eventKey="profile" title="Profile">
          <Row className="user-info">
            <Col xs={12} md={6}>
              <Card className="user-card">
                <Card.Body>
                  <Table bordered className="info-table">
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <td>{userInfo.name}</td>
                      </tr>
                      <tr>
                        <th>Customer ID</th>
                        <td>{userInfo.customerId}</td>
                      </tr>
                      <tr>
                        <th>Phone</th>
                        <td>{userInfo.phone}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{userInfo.email}</td>
                      </tr>
                      <tr>
                        <th>PiggyBox Balance</th>
                        <td>₹{userInfo.piggyBoxBalance.toLocaleString()}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="gy-3 mt-4">
            {materials.map((material, index) => (
              <Col key={index} xs={12} md={4}>
                <Link to={`./card/${material.title}`} className="material-link">
                  <Card
                    className="material-card text-center shadow-lg"
                    style={{ backgroundColor: material.color }}
                  >
                    <Card.Body>
                      <Card.Title className="material-title">{material.title}</Card.Title>
                      <Card.Text className="material-price">
                        ₹{material.price.toLocaleString()} <small>(Inc. of GST)</small>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Tab>

        {/* Tab 2: Recent Purchase History */}
        <Tab eventKey="history" title="Recent Purchase History">
          <Table bordered hover className="purchase-history-table mt-4">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Time</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {purchaseHistory.map((history, index) => (
                <tr key={history.id}>
                  <td>{index + 1}</td>
                  <td>{history.date}</td>
                  <td>{history.time}</td>
                  <td>{history.type}</td>
                  <td>₹{history.amount.toLocaleString()}</td>
                  <td>{history.description}</td>
                  <td>
                    <Button variant="primary" size="sm">
                      <i className="bi bi-download"></i> Download
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Container>
  );
};
