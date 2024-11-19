import React from "react";
import { Card, Table, Row, Col, Container, Button } from "react-bootstrap";
import "./TicketInfo.css";

const ticketData = [
  { title: "Stone", price: 100, baseColor: "#a8a8a8", gradientColor: "#d3d3d3" },
  { title: "Iron", price: 500, baseColor: "#b87333", gradientColor: "#d4a17a" },
  { title: "Bronze", price: 2000, baseColor: "#cd7f32", gradientColor: "#e2a679" },
  { title: "Silver", price: 5000, baseColor: "#c0c0c0", gradientColor: "#e0e0e0" },
  { title: "Gold", price: 15000, baseColor: "#ffd700", gradientColor: "#ffec94" },
  { title: "Diamond", price: 25000, baseColor: "#b9f2ff", gradientColor: "#e0ffff" },
  { title: "Platinum", price: 500000, baseColor: "#e5e4e2", gradientColor: "#f2f2f2" },
];

export const TicketInfoPage = () => {
  const ticketInfo = {
    title: "Gold",
    price: "₹15,000 (Inc. of GST)",
    status: "Inactive",
    piggyBoxBalance: "₹10,000",
    affiliateBonus: "₹1,200",
    purchaseCount:"6",
    goldBonus: "N/A",
    referralHistory: [
      { id: 1, customerId: "CUST123", name: "John Doe", poolPurchaseCount: 2, pendingPurchaseCount: 1 },
      { id: 2, customerId: "CUST124", name: "Jane Smith", poolPurchaseCount: 3, pendingPurchaseCount: 0 },
      { id: 3, customerId: "CUST125", name: "Robert Brown", poolPurchaseCount: 1, pendingPurchaseCount: 2 },
    ],
  };

  // Fetch the ticket design details
  const ticketDesign = ticketData.find((ticket) => ticket.title === ticketInfo.title) || {};

  return (
    <Container className="ticket-info-page">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          {/* Card Info */}
          <Card
            className="card-info shadow mb-4"
            style={{
              background: `linear-gradient(45deg, ${ticketDesign.baseColor}, ${ticketDesign.gradientColor})`,
              color: "#fff",
            }}
          >
            <Card.Body className="text-center">
              <h4>{ticketInfo.title} Card</h4>
              <p className="card-price">{ticketInfo.price}</p>
            </Card.Body>
          </Card>

          {/* Ticket Info */}
          <Card className="shadow ticket-card">
            <Card.Body>
              <Row>
                <Col md={6} className="mb-3">
                  <p>
                    <strong>Status:</strong> {ticketInfo.status}
                  </p>
                </Col>
                <Col md={6} className="mb-3 text-md-end">
                  <Button
                    variant="primary"
                    disabled={ticketInfo.status !== "Inactive"}
                  >
                    Activate Card
                  </Button>
                </Col>
                <Col md={6} className="mb-3">
                  <p>
                    <strong>PiggyBox Balance:</strong> {ticketInfo.piggyBoxBalance}
                  </p>
                </Col>
                <Col md={6} className="mb-3">
                  <p>
                    <strong>Affiliate Bonus:</strong> {ticketInfo.affiliateBonus}
                  </p>
                </Col>
                <Col md={6} className="mb-3">
                  <p>
                    <strong>Gold Bonus:</strong> {ticketInfo.goldBonus}
                  </p>
                </Col>
                <Col md={6} className="mb-3">
                  <p>
                    <strong>Total Purchanse count:</strong> {ticketInfo.purchaseCount}
                  </p>
                </Col>
              </Row>
              <h4 className="mt-4">Referral History</h4>
              <Table responsive bordered className="mt-3">
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
                  {ticketInfo.referralHistory.map((referral) => (
                    <tr key={referral.id}>
                      <td>{referral.id}</td>
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
    </Container>
  );
};
