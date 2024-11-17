import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Loans.css";
import { PageComponent } from "../../../../../../Utils/Utils";

export const LoansPage = () => {
  return (
    <Container className="loans-page">
      <PageComponent title={"Loans"} />
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={10} lg={8}>
          <Card className="text-center shadow-lg loan-card">
            <Card.Body>
              <Card.Title className="text-primary">Loan Offers</Card.Title>
              <Card.Text className="text-muted mt-3">
                Currently, there are no pre-approved loan offers available.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
