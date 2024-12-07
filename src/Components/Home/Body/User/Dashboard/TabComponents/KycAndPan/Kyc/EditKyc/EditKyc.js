import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Row, Col, Spinner, Alert, Card } from "react-bootstrap";
import "./EditKyc.css";
import { baseUrl } from "../../../../../../../../../Utils/config";
import { updateKycDetailsHandler } from "../../apiHandler";
import { useAlert } from "../../../../../../../../UI/Alert/AlertContext";

export const EditKycPage = ({ kycDetails }) => {
  const userImageRef = useRef();
  const aadharFrontRef = useRef();
  const aadharBackRef = useRef();
  const { showAlert } = useAlert();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    address: "",
    aadharNumber: "",
    aadharFrontUrl: "https://via.placeholder.com/150",
    aadharBackUrl: "https://via.placeholder.com/150",
    userUrl: "https://via.placeholder.com/150",
    status: "Pending", // Can be "Pending" or "Rejected"
    adminMessageForKyc: "",
  });

  useEffect(() => {
    if (kycDetails && kycDetails.kyc) {
      const kyc = kycDetails.kyc;
      const userInfo = kycDetails.userInfo;

      setFormData({
        name: userInfo.name,
        email: userInfo.email,
        dob: kyc.dob,
        address: kyc.address,
        aadharNumber: kyc.aadharNumber,
        status: kyc.status,
        adminMessageForKyc: kyc.adminMessageForKyc,
        aadharBackUrl: baseUrl + kyc.aadharBackUrl,
        aadharFrontUrl: baseUrl + kyc.aadharFrontUrl,
        userUrl: baseUrl + kyc.userUrl,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [submitting, setSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("dob", formData.dob);
    data.append("address", formData.address);
    data.append("aadharNumber", formData.aadharNumber);
    data.append('customerId',kycDetails.userInfo.candidateId)

    data.append("userImage", userImageRef.current.files[0]);
    data.append("aadharFront", aadharFrontRef.current.files[0]);
    data.append("aadharBack", aadharBackRef.current.files[0]);

    const response = await updateKycDetailsHandler(data, setSubmitting, showAlert);

    if (response) {
      showAlert("info", "Info!", "Kyc Details Submitted Successfully!");
    }
  };

  return (
    <>
      <Card className="p-4 shadow">
        <h3 className="mb-4">Edit KYC</h3>
        {formData.status === "Rejected" && (
          <Alert variant="danger">
            <strong>Status:</strong> {formData.status}
            <br />
            <strong>Admin Remark:</strong> {formData.adminMessageForKyc}
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
              <Form.Group controlId="aadharFrontUrl" className="mb-3">
                <Form.Label>Aadhar Front</Form.Label>
                <div>
                  <img
                    src={formData.aadharFrontUrl}
                    alt="Aadhar Front"
                    className="img-thumbnail mb-2"
                  />
                  <Form.Control
                    type="file"
                    accept="image/*"
                    ref={aadharFrontRef}
                    onChange={(e) => handleImageChange(e, "aadharFrontUrl")}
                  />
                </div>
              </Form.Group>
            </Col>
            <Col md={4} className="text-center">
              <Form.Group controlId="aadharBackUrl" className="mb-3">
                <Form.Label>Aadhar Back</Form.Label>
                <div>
                  <img
                    src={formData.aadharBackUrl}
                    alt="Aadhar Back"
                    className="img-thumbnail mb-2"
                  />
                  <Form.Control
                    type="file"
                    accept="image/*"
                    ref={aadharBackRef}
                    onChange={(e) => handleImageChange(e, "aadharBackUrl")}
                  />
                </div>
              </Form.Group>
            </Col>
            <Col md={4} className="text-center">
              <Form.Group controlId="userUrl" className="mb-3">
                <Form.Label>User Image</Form.Label>
                <div>
                  <img
                    src={formData.userUrl}
                    alt="User"
                    className="img-thumbnail mb-2"
                  />
                  <Form.Control
                    type="file"
                    accept="image/*"
                    ref={userImageRef}
                    onChange={(e) => handleImageChange(e, "userUrl")}
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
    </>
  );
};
