import React from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import "./TopSection.css";

export const TopSection = () => {
  return (
    <section className="top-section">
      <Container fluid>
        <Row className="align-items-center">
          {/* Left Content Section */}
          <Col lg={6} md={12} className="text-content">
            <h1>Get Instant Loans with E Pe</h1>
            <p>
              Quick, easy, and secure. Your financial solutions, simplified.
            </p>
            <Button variant="primary" className="apply-now-btn">
              Apply Now
            </Button>
          </Col>

          {/* Right Image Slider */}
          <Col lg={6} md={12}>
            <Carousel className="image-slider">
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="/Assets/HomeScreen/banner.png"
                  alt="Slide 1"
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="/Assets/HomeScreen/diwali.jpg"
                  alt="Slide 2"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
