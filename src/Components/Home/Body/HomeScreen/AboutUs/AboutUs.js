import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AboutUs.css';

// Sample data for each card
const aboutContent = [
  {
    title: "Our Mission",
    description: "At E PE, our mission is to democratize financial access by leveraging cutting-edge technology to provide innovative investment solutions. We believe that everyone should have the opportunity to achieve financial freedom, and we are dedicated to making that a reality for our clients.",
    imgSrc: "/Assets/HomeScreen/AboutUs/our_missions.png"
  },
  {
    title: "Who We Are",
    description: "Founded by a team of seasoned financial experts and tech innovators, E PE stands at the intersection of finance and technology. We are passionate about creating a smart, user-friendly platform that empowers individuals and businesses to make informed investment decisions.",
    imgSrc: "/Assets/HomeScreen/AboutUs/who_we_are.png"
  },
  {
    title: "Our Expertise",
    description: "With decades of experience in the financial industry, our team brings deep knowledge and a commitment to excellence. We combine this expertise with advanced fintech solutions to offer our clients unparalleled access to financial markets, data-driven insights, and personalized investment strategies.",
    imgSrc: "/Assets/HomeScreen/AboutUs/experties.png"
  },
  {
    title: "Why Choose Us",
    description: "At E PE, we prioritize transparency, security, and customer satisfaction. Our platform is designed with the user in mind, offering intuitive interfaces, real-time analytics, and robust security features to protect your investments.",
    imgSrc: "/Assets/HomeScreen/AboutUs/why_choose_us.png"
  },
  {
    title: "Our Vision",
    description: "We envision a world where technology bridges the gap between traditional financial services and the needs of modern investors. By continuously innovating and staying ahead of industry trends, we aim to redefine the future of investing, making it more accessible, efficient, and rewarding for everyone.",
    imgSrc: "/Assets/HomeScreen/AboutUs/our_vissions.png"
  },
  {
    title: "Join Us on the Journey",
    description: "We invite you to explore our platform and discover how E PE can help you achieve your financial goals. Together, we can build a brighter financial future.",
    imgSrc: "/Assets/HomeScreen/AboutUs/our_journey.png"
  }
];

export const AboutUs = () => {
  return (
    <section className="about-us-section">
      <Container>
        <h2 className="section-title">About Us</h2>
        {aboutContent.map((content, index) => (
          <Row className={`align-items-center mb-5 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} key={index}>
            <Col md={6}>
              <Card className="about-card">
                <Card.Img src={content.imgSrc} className="about-img" />
                <Card.Body>
                  <Card.Title className="card-title">{content.title}</Card.Title>
                  <Card.Text className="card-text">
                    {content.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};
