import React, { useState } from "react";
import { Container, Row, Col, Card, Table, Tabs, Tab, Button } from "react-bootstrap";
import "./UserCard.css";

export const UserCardPage = () => {
  const [key, setKey] = useState("cardInfo");

  // Sample Card Info
  const cardInfo = {
    title: "Gold",
    price: 15000,
    color: "#FFD700", // Gold color
    status: "Active",
    piggyBoxBalance: 20000,
    affiliateBonus: 500,
    goldBonus: "N/A",
    purchaseTimes: 3,
  };

  // Referral History Data
  const referralHistory = [
    { id: 1, customerId: "CUS123", name: "Alice", poolPurchaseCount: 5, pendingPurchaseCount: 2 },
    { id: 2, customerId: "CUS124", name: "Bob", poolPurchaseCount: 3, pendingPurchaseCount: 1 },
  ];

  // Sample Recent Purchase History
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
    <Container className="user-card-page">
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-4 user-card-tabs">
        {/* Tab 1: Card Info */}
        <Tab eventKey="cardInfo" title="Card Info">
          <Row className="gy-4">
            <Col xs={12} md={6} className="mx-auto">
              <Card
                className="material-card text-center shadow-lg"
                style={{ backgroundColor: cardInfo.color }}
              >
                <Card.Body>
                  <Card.Title className="material-title">{cardInfo.title}</Card.Title>
                  <Card.Text className="material-price">
                    ₹{cardInfo.price.toLocaleString()} <small>(Inc. of GST)</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="gy-4 mt-3">
            <Col xs={12}>
              <Card className="card-info-card">
                <Card.Body>
                  <Table bordered className="info-table">
                    <tbody>
                      <tr>
                        <th>Status</th>
                        <td>{cardInfo.status}</td>
                        <td>
                          <Button variant="success" size="sm">
                            Activate Card
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <th>Piggy Box Balance</th>
                        <td>₹{cardInfo.piggyBoxBalance.toLocaleString()}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th>Affiliate Bonus</th>
                        <td>₹{cardInfo.affiliateBonus.toLocaleString()}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th>Gold Bonus</th>
                        <td>{cardInfo.goldBonus}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th>Purchase Times</th>
                        <td>{cardInfo.purchaseTimes}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="gy-4 mt-4">
            <Col xs={12}>
              <Card className="referral-history-card">
                <Card.Header>Referral History</Card.Header>
                <Card.Body>
                  <Table bordered hover className="referral-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Pool Purchase Count</th>
                        <th>Pending Purchase Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      {referralHistory.map((referral, index) => (
                        <tr key={referral.id}>
                          <td>{index + 1}</td>
                          <td>{referral.customerId}</td>
                          <td>{referral.name}</td>
                          <td>{referral.poolPurchaseCount}</td>
                          <td>{referral.pendingPurchaseCount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab>

        {/* Tab 2: Recent Purchase History */}
        <Tab eventKey="recentPurchase" title="Recent Purchase">
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
