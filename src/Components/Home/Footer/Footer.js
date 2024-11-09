import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer-area bg-primary text-light">
      <Container className="py-5">
        <Row className="g-5">
          {/* Logo and Social Icons Column */}
          <Col md={6} lg={3} className="d-flex flex-column align-items-start">
            <img src="/Assets/Logo/iso.png" width="200px" alt="ISO Logo" className="footer-logo" />
            <div className="d-flex pt-4">
              <a className="btn btn-outline-light btn-social me-2" href="https://x.com/EPE_FINTECH">
                <FaTwitter />
              </a>
              <a className="btn btn-outline-light btn-social me-2" href="https://www.facebook.com/profile.php?id=61554840600572">
                <FaFacebookF />
              </a>
              <a className="btn btn-outline-light btn-social me-2" href="https://www.instagram.com/epe.fintech/">
                <FaInstagram />
              </a>
              <button className="btn btn-outline-light btn-social">
                <FaLinkedinIn />
              </button>
            </div>
          </Col>

          {/* Quick Links Column */}
          <Col md={6} lg={2}>
            <h4 className="text-white mb-4">Quick Link</h4>
            <Link className="footer-link" to="#About">About Us</Link>
            <Link className="footer-link" to="#Services">Services</Link>
            <Link className="footer-link" to="">PiggyBox</Link>
            <Button variant="link" className="footer-link">Contact Us</Button>
          </Col>

          {/* Popular Links Column */}
          <Col md={6} lg={3}>
            <h4 className="text-white mb-4">Popular Link</h4>
            <Link className="footer-link" to="/privacyPolicy">Privacy Policy</Link>
            <Link className="footer-link" to="/termsAndConditions">Terms & Conditions</Link>
            <Link className="footer-link" to="/userAgreement">User Agreement</Link>
            <Button variant="link" className="footer-link">Ask E Pe</Button>
          </Col>

          {/* Newsletter Column */}
          <Col md={6} lg={4}>
            <h4 className="text-white mb-4">Newsletter</h4>
            <p className="newsletter-text">
              Stay ahead in the financial world with our expert insights and tips. Subscribe for the latest updates.
            </p>
            <Form className="newsletter-form">
              <Form.Control
                type="email"
                placeholder="Your Email"
                className="rounded-pill ps-4 pe-5"
              />
              <Button variant="primary" type="submit" className="newsletter-btn">
                <FaPaperPlane />
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Footer Bottom */}
      <Container className="footer-bottom text-center py-3">
        <p>&copy; 2024 by Techfin Innovations Private Limited, All Rights Reserved. Created with ❤️ in INDIA</p>
      </Container>
    </footer>
  );
};



