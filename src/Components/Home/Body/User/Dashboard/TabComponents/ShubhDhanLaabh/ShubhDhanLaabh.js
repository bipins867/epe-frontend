import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./SubhDhanLaabh.css";
import { PageComponent } from "../../../../../../Utils/Utils";

const ticketData = [
  { title: "Stone", price: 100, baseColor: "#a8a8a8", gradientColor: "#d3d3d3" }, // Gray
  { title: "Iron", price: 500, baseColor: "#b87333", gradientColor: "#d4a17a" }, // Copper
  { title: "Bronze", price: 2000, baseColor: "#cd7f32", gradientColor: "#e2a679" }, // Bronze
  { title: "Silver", price: 5000, baseColor: "#c0c0c0", gradientColor: "#e0e0e0" }, // Silver
  { title: "Gold", price: 15000, baseColor: "#ffd700", gradientColor: "#ffec94" }, // Gold
  { title: "Diamond", price: 25000, baseColor: "#b9f2ff", gradientColor: "#e0ffff" }, // Light Blue
  { title: "Platinum", price: 500000, baseColor: "#e5e4e2", gradientColor: "#f2f2f2" }, // Platinum
];

export const SubhDhanLaabhPage = () => {
  return (
    <Container className="subh-dhan-laabh-page">
      <PageComponent title={"SubhDhanLaabh"}/>
      <h1 className="text-center my-5">SubhDhanLaabh</h1>
      <Row>
        {ticketData.map((ticket, index) => (
          <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
            <Card
              className="ticket-card shadow"
              style={{
                background: `linear-gradient(135deg, ${ticket.baseColor}, ${ticket.gradientColor})`,
              }}
            >
              <Card.Body className="text-center">
                <Card.Title className="ticket-title">{ticket.title}</Card.Title>
                <Card.Text className="ticket-price">
                  ₹{ticket.price} <br />
                  <small>(Inc. of GST)</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

