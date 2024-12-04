import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Spinner, Alert, Card } from "react-bootstrap";
import "./EditKyc.css";

export const EditKycPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    address: "",
    aadharNumber: "",
    aadharFront: "https://via.placeholder.com/150",
    aadharBack: "https://via.placeholder.com/150",
    userImage: "https://via.placeholder.com/150",
    status: "Pending", // Can be "Pending" or "Rejected"
    adminRemark: "",
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Simulate fetching KYC data
  useEffect(() => {
    setTimeout(() => {
      setFormData({
        ...formData,
        // Example data
        name: "John Doe",
        email: "johndoe@example.com",
        dob: "1990-01-01",
        address: "123 Main St, City, State",
        aadharNumber: "1234-5678-9101",
        status: "Pending",
        adminRemark: "Invalid Aadhar Number",
      });
      setLoading(false);
    }, 2000); // Simulating API call
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, [key]: imageUrl }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setSubmitting(false);
      alert("KYC submitted successfully!");
    }, 2000);
  };

  return (
    
     <> {loading ? (
        <div className="loading-screen text-center">
          <Spinner animation="border" role="status" className="loading-spinner">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h4 className="loading-text">Fetching Kyc Details...</h4>
        </div>
      ) : (
        <Card className="p-4 shadow">
          <h3 className="mb-4">Edit KYC</h3>
          {formData.status === "Rejected" && (
            <Alert variant="danger">
              <strong>Status:</strong> {formData.status}
              <br />
              <strong>Admin Remark:</strong> {formData.adminRemark}
            </Alert>
          )}
          {formData.status === "Pending" && (
            <Alert variant="warning">
              <strong>Status:</strong> {formData.status}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="dob" className="mb-3">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="address" className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId="aadharNumber" className="mb-3">
                  <Form.Label>Aadhar Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="aadharNumber"
                    value={formData.aadharNumber}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="image-section">
              <Col md={4} className="text-center">
                <Form.Group controlId="aadharFront" className="mb-3">
                  <Form.Label>Aadhar Front</Form.Label>
                  <div>
                    <img
                      src={formData.aadharFront}
                      alt="Aadhar Front"
                      className="img-thumbnail mb-2"
                    />
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, "aadharFront")}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col md={4} className="text-center">
                <Form.Group controlId="aadharBack" className="mb-3">
                  <Form.Label>Aadhar Back</Form.Label>
                  <div>
                    <img
                      src={formData.aadharBack}
                      alt="Aadhar Back"
                      className="img-thumbnail mb-2"
                    />
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, "aadharBack")}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col md={4} className="text-center">
                <Form.Group controlId="userImage" className="mb-3">
                  <Form.Label>User Image</Form.Label>
                  <div>
                    <img
                      src={formData.userImage}
                      alt="User"
                      className="img-thumbnail mb-2"
                    />
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, "userImage")}
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <div className="text-center">
              <Button type="submit" variant="primary" disabled={submitting}>
                {submitting ? (
                  <>
                    <Spinner animation="border" size="sm" /> Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </Form>
        </Card>
      )}</>
   
  );
};
