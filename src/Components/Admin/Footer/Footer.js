import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="admin-footer shadow-sm">
      <Container fluid>
        <Row className="py-3">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} <strong>EPE India</strong>. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <ul className="footer-links">
              <li>
                <a href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-conditions" className="footer-link">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/contact-us" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
