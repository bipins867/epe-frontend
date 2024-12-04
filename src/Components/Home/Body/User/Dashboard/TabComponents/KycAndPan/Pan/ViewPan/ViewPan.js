import React, { useState, useEffect } from "react";
import { Container, Card, Spinner, Row, Col } from "react-bootstrap";
import "./ViewPan.css";

export const ViewPanPage = () => {
  const [panData, setPanData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching PAN data
  useEffect(() => {
    setTimeout(() => {
      setPanData({
        status: "Pending", // Can be "Pending", "Accepted", "Rejected"
        panNumber: "ABCDE1234F",
        panImage: "https://via.placeholder.com/150", // Placeholder image
      });
      setLoading(false);
    }, 2000); // Simulate API call
  }, []);

  if (loading) {
    return (
      <div className="loading-screen text-center">
        <Spinner animation="border" role="status" className="loading-spinner">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h4 className="loading-text">Fetching PAN Details...</h4>
      </div>
    );
  }

  return (
    <Container className="view-pan-page py-4">
      <Card className="pan-card shadow-sm p-4">
        <h3 className="text-center mb-4">View PAN Details</h3>
        <Row className="mb-3">
          <Col xs={12}>
            <div className="info-row">
              <strong>Status:</strong>{" "}
              <span className={`status-${panData.status.toLowerCase()}`}>
                {panData.status}
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12}>
            <div className="info-row">
              <strong>PAN Number:</strong> {panData.panNumber}
            </div>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12}>
            <div className="image-container">
              <strong>PAN Image:</strong>
              <div>
                <img
                  src={panData.panImage}
                  alt="PAN Preview"
                  className="img-fluid pan-image"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};
