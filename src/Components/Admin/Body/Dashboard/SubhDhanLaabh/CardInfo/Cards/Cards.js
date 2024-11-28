import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cards.css";

export const CardsPage = () => {
  const materials = [
    { title: "Stone", price: 100, color: "#BDBDBD" }, // Gray
    { title: "Iron", price: 500, color: "#9E9E9E" }, // Dark Gray
    { title: "Bronze", price: 2000, color: "#CD7F32" }, // Bronze
    { title: "Silver", price: 5000, color: "#C0C0C0" }, // Silver
    { title: "Gold", price: 15000, color: "#FFD700" }, // Gold
    { title: "Platinum", price: 25000, color: "#E5E4E2" }, // Platinum
    { title: "Diamond", price: 50000, color: "#B9F2FF" }, // Diamond
  ];

  return (
    <Container className="cards-page">
      <Row className="gy-4">
        {materials.map((material) => (
          <Col xs={12} sm={6} md={4} key={material.title}>
            <Link to={`/admin/subhDhanLaabh/cardInfo/type/${material.title}`} className="card-link">
              <Card style={{ backgroundColor: material.color }} className="material-card text-center shadow-sm">
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
    </Container>
  );
};
