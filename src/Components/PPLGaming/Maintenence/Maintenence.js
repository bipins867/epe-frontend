// Import necessary modules
import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Maintenance.css';

export const MaintenancePage = () => {
    return (
        <Container fluid className="epe-maintenance-container">
            <Row className="epe-maintenance-header">
                <Col className="text-center">
                    <Image 
                        src="/Assets/Logo/epeLogo.jpg" 
                        alt="EPE Logo" 
                        className="epe-maintenance-logo"
                    />
                </Col>
            </Row>
            <Row className="epe-maintenance-content">
                <Col className="text-center">
                    <h1 className="epe-maintenance-title">We'll be Back Soon!</h1>
                    <p className="epe-maintenance-message">
                        Our website is currently undergoing scheduled maintenance to bring you a better experience. 
                        Please check back later.
                    </p>
                    <Button 
                        variant="primary" 
                        className="epe-maintenance-button"
                        onClick={() => window.location.reload()}
                    >
                        Refresh Page
                    </Button>
                </Col>
            </Row>
            <Row className="epe-maintenance-footer">
                <Col className="text-center">
                    <p className="epe-maintenance-footer-text">
                        Thank you for your patience. ~ Team EPE
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

