import React, { useState, useEffect } from "react";
import { Container, Card, Form, Button, Row, Col, Spinner, Alert } from "react-bootstrap";
import "./EditPan.css";

export const EditPanPage = () => {
  const [panData, setPanData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Simulate fetching PAN data
  useEffect(() => {
    setTimeout(() => {
      setPanData({
        status: "Rejected", // Can be "Pending", "Accepted", "Rejected"
        panNumber: "ABCDE1234F",
        panImage: "https://via.placeholder.com/150", // Placeholder image
        adminRemark: "Pan Image is not Clear", // Example: "Invalid PAN image uploaded."
      });
      setLoading(false);
    }, 2000); // Simulate API call
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert("PAN details submitted successfully!");
    }, 2000); // Simulate submission
  };

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
    <Container className="edit-pan-page py-4">
      <Card className="pan-card shadow-sm p-4">
        <h3 className="text-center mb-4">Edit PAN Details</h3>
        {panData.status === "Rejected" && (
          <Alert variant="danger" className="text-center">
            <strong>Admin Remark:</strong> Invalid PAN image uploaded.
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type="text"
                  value={panData.status}
                  readOnly
                  className={`status-${panData.status.toLowerCase()}`}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>PAN Number</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={panData.panNumber}
                  placeholder="Enter PAN Number"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col xs={12} className="text-center">
              <Form.Group>
                <Form.Label>PAN Image</Form.Label>
                <div className="image-upload-container">
                  <img
                    src={selectedImage || panData.panImage}
                    alt="PAN Preview"
                    className="img-fluid pan-image-preview"
                  />
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mt-3"
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Button
            type="submit"
            className="w-100"
            variant="primary"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <Spinner animation="border" size="sm" /> Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
