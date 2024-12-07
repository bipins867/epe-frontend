import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./ViewPan.css";
import { baseUrl } from "../../../../../../../../../Utils/config";

export const ViewPanPage = ({ panDetails }) => {
  const [panData, setPanData] = useState({
    status: "Review",
    panNumber: "",
    panImage: "https://via.placeholder.com/150",
  });

  // Simulate fetching PAN data
  useEffect(() => {
    if (panDetails && panDetails.pan) {
      const pan = panDetails.pan;
      setPanData({
        status: pan.panStatus,
        panNumber: pan.panNumber,
        panImage: baseUrl + pan.panUrl,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
