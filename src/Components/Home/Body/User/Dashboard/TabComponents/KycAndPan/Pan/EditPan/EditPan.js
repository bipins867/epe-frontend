import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Card,
  Form,
  Button,
  Row,
  Col,
  Spinner,
  Alert,
} from "react-bootstrap";
import "./EditPan.css";
import { useAlert } from "../../../../../../../../UI/Alert/AlertContext";
import { baseUrl } from "../../../../../../../../../Utils/config";
import { updatePanDetailsHandler } from "../../apiHandler";

export const EditPanPage = ({ panDetails }) => {
  const [panData, setPanData] = useState({
    status: "",
    panNumber: "",
    adminMessageForPan: "",
    panUrl: "https://via.placeholder.com/150",
  });
  const [submitting, setSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { showAlert } = useAlert();

  const panRef = useRef();

  // Simulate fetching PAN data
  useEffect(() => {
    if (panDetails && panDetails.pan) {
      const pan = panDetails.pan;

      setPanData({
        status: pan.panStatus || "Pending",
        panNumber: pan.panNumber,
        adminMessageForPan: pan.adminMessageForPan,
        panUrl: baseUrl + pan.panUrl,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();

    formData.append("panNumber", panData.panNumber);
    formData.append("panFile", panRef.current.files[0]);

    const response = await updatePanDetailsHandler(
      formData,
      setSubmitting,
      showAlert
    );

    if (response) {
      showAlert("info", "Info!", "Pan Details Submitted Successfully!");
    }
  };

  return (
    <Container className="edit-pan-page py-4">
      <Card className="pan-card shadow-sm p-4">
        <h3 className="text-center mb-4">Edit PAN Details</h3>
        {panData.status === "Rejected" && (
          <Alert variant="danger" className="text-center">
            <strong>Admin Remark:</strong> {panData.adminMessageForPan}
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
                  value={panData.panNumber} // Bind value to state
                  placeholder="Enter PAN Number"
                  required
                  onChange={(e) =>
                    setPanData((prevData) => ({
                      ...prevData,
                      panNumber: e.target.value,
                    }))
                  }
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
                    src={selectedImage || panData.panUrl}
                    alt="PAN Preview"
                    className="img-fluid pan-image-preview"
                  />
                  <Form.Control
                    type="file"
                    accept="image/*"
                    ref={panRef}
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
