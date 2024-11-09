import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './WhyChooseEPe.css';

export const WhyChooseEPe = () => {
  return (
    <section className="why-choose-epe">
      <Container>
        <h2 className="section-title">Why Choose E Pe?</h2>
        <Row className="g-4">
          {/* Card 1 */}
          <Col lg={4} md={6} sm={12}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title className="card-title">Quick Approval</Card.Title>
                <Card.Text>
                  Get your loans approved in minutes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Card 2 */}
          <Col lg={4} md={6} sm={12}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title className="card-title">Flexible Plans</Card.Title>
                <Card.Text>
                  Choose a repayment plan that suits you.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Card 3 */}
          <Col lg={4} md={6} sm={12}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title className="card-title">Secure & Reliable</Card.Title>
                <Card.Text>
                  Your data is safe with us.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


