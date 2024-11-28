import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./CardsProfile.css";

export const CardsProfilePage = ({ cardDetails }) => {
  // Sample data (replace with actual props or API data)
  const details = cardDetails || {
    title: "Gold",
    price: 15000,
    totalPool: 500,
    totalActivePool: 450,
    totalPoolActivatedToday: 10,
    color: "#FFD700", // Gold color
  };

  return (
    <Container className="cards-profile-page">
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={6}>
          <Card
            style={{
              backgroundColor: details.color,
              color: "#fff",
            }}
            className="profile-card text-center shadow-lg"
          >
            <Card.Body>
              <Card.Title className="profile-card-title">
                {details.title}
              </Card.Title>
              <Card.Text className="profile-card-price">
                ₹{details.price.toLocaleString()} <small>(Inc. of GST)</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="gy-3">
        <Col xs={12} md={4}>
          <Card className="info-card text-center">
            <Card.Body>
              <Card.Title className="info-title">Total Pool</Card.Title>
              <Card.Text className="info-value">{details.totalPool}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="info-card text-center">
            <Card.Body>
              <Card.Title className="info-title">Total Active Pool</Card.Title>
              <Card.Text className="info-value">
                {details.totalActivePool}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="info-card text-center">
            <Card.Body>
              <Card.Title className="info-title">
                Total Pool Activated Today
              </Card.Title>
              <Card.Text className="info-value">
                {details.totalPoolActivatedToday}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
