import React from 'react';
import { Container, Row, Col,Card } from 'react-bootstrap';
import './AuthLayout.css';


export const AuthLayout = (props) => {
    const {title,description,imageUrl}=props;
  return (
    <div className="auth-page">
      <div className="auth-background"></div>
      <Container fluid className="auth-container">
        <Row className="justify-content-center align-items-center h-100">
          {/* Left Content Section */}
          <Col md={6} className="auth-left">
            <div className="content-box">
              <h1>{title}</h1>
              <p>
                {description}
              </p>
              <img
                src={imageUrl}
                alt="Illustration"
                className="auth-illustration"
              />
            </div>
          </Col>

          {/* Right auth Form Section */}
          <Col md={5} className="auth-right d-flex align-items-center">
            <Card className="auth-card w-100">
              <Card.Body>
               
               {props.children}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
