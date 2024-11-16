// import { AboutUs } from "./AboutUs/AboutUs";
// import { ClientAboutArea } from "./ClientAboutArea/ClientAboutArea";
// import { ProjectArea } from "./ProjectArea/ProjectArea";
// import { ServicesOffered } from "./ServicesOffered/ServicesOffered";
// import { TopSection } from "./TopSection/TopSection";
// import { WhyChooseEPe } from "./WhyChooseEPe/WhyChooseEPe";

// export const HomeScreen = () => {
//   return (
//     <>
//       <TopSection />
//       <WhyChooseEPe />
//       <AboutUs />
//       <ServicesOffered />
//       <ProjectArea />
//       <ClientAboutArea/>
//     </>
//   );
// };

import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./HomeScreen.css";

export const HomeScreen = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <Container className="text-center text-white">
            <h1 className="display-4 mb-4">Welcome to EPE India</h1>
            <p className="lead mb-5">
              Your one-stop solution for Instant Loans, Referral Rewards, and
              Smart Investments.
            </p>
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Container>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5">
        <Container>
          <h2 className="text-center mb-5">Our Services</h2>
          <Row>
            {/* Instant Loan */}
            <Col md={4}>
              <Card className="service-card shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/883/744/small/hand-holding-growing-tree-on-coins-with-stock-graph-over-green-background-photo.jpg"
                  alt="Instant Loan"
                />
                <Card.Body>
                  <Card.Title>Instant Loan</Card.Title>
                  <Card.Text>
                    Need funds quickly? Get instant loans with minimal
                    documentation and a fast approval process.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* SubhDhanLaabh */}
            <Col md={4}>
              <Card className="service-card shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-money-income-concept-of-referral-members-gain-earning-and-salary-flat-png-image_5305512.jpg"
                  alt="SubhDhanLaabh"
                />
                <Card.Body>
                  <Card.Title>SubhDhanLaabh</Card.Title>
                  <Card.Text>
                    Earn rewards by referring friends and activating the pool.
                    Enjoy a 70% commission on successful referrals!
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* PiggyBox */}
            <Col md={4}>
              <Card className="service-card shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://www.shutterstock.com/image-photo/piggy-bank-on-blue-background-260nw-472360912.jpg"
                  alt="PiggyBox"
                />
                <Card.Body>
                  <Card.Title>PiggyBox</Card.Title>
                  <Card.Text>
                    Make smart investments with PiggyBox and watch your money
                    grow with daily interest and monthly rewards.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Us Section */}
      <section className="about-us-section">
        <div className="about-us-overlay">
          <Container className="text-white text-center">
            <h2 className="mb-4">About EPE India</h2>
            <p className="lead">
              At EPE India, we aim to provide the best financial solutions for
              individuals and businesses. Whether you need an instant loan, want
              to earn through referrals, or grow your wealth, we have got you
              covered.
            </p>
          </Container>
        </div>
      </section>
    </div>
  );
};
