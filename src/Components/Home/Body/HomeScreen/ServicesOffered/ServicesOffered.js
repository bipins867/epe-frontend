import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ServicesOffered.css';

// Sample data for the services
const services = [
  { title: "Interest on Reserves", imgSrc: "/Assets/HomeScreen/Services/interest.png" },
  { title: "Anytime Reserves Settlement", imgSrc: "/Assets/HomeScreen/Services/settlement.png" },
  { title: "Personal Loans", imgSrc: "/Assets/HomeScreen/Services/personalLoan.png" },
  { title: "Startup Funding Support", imgSrc: "/Assets/HomeScreen/Services/startup.png" },
  { title: "Merchant/Business Loans", imgSrc: "/Assets/HomeScreen/Services/merchant.png" },
  { title: "Free Startup/Business Consultation", imgSrc: "/Assets/HomeScreen/Services/consulting.png" },
  { title: "Education Loans", imgSrc: "/Assets/HomeScreen/Services/education.png" },
  { title: "Medical Loans", imgSrc: "/Assets/HomeScreen/Services/medical.png" },
  { title: "Loan Against Property", imgSrc: "/Assets/HomeScreen/Services/property.png" },
  { title: "Return on Investment", imgSrc: "/Assets/HomeScreen/Services/interest.png" },
  { title: "Lucky Draw", imgSrc: "/Assets/HomeScreen/Services/luckyDraw.png" },
  { title: "Referral Program", imgSrc: "/Assets/HomeScreen/Services/referal.png" },
  { title: "Free Access to Events", imgSrc: "/Assets/HomeScreen/Services/event.png" },
  { title: "Doorstep Services", imgSrc: "/Assets/HomeScreen/Services/doorstep.png" },
  { title: "Career Support", imgSrc: "/Assets/HomeScreen/Services/career.png" },
  { title: "Investment Support", imgSrc: "/Assets/HomeScreen/Services/investmentSupport.png" }
];

export const ServicesOffered = () => {
  return (
    <section className="services-section">
      <Container>
        <h2 className="section-title">Services Offered</h2>
        <Row className="services-row">
          {services.map((service, index) => (
            <Col xl={3} lg={3} md={4} sm={6} xs={12} key={index}>
              <Card className="service-card">
                <div className="card-image-container">
                  <Card.Img
                    variant="top"
                    src={service.imgSrc}
                    className="service-img"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="service-title">{service.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
