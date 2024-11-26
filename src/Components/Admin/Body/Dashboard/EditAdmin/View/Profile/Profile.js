import React, { useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Profile.css";

export const ProfilePage = () => {
  const [adminInfo, setAdminInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    isFrozen: false,
    isDeactivated: false,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState({
    name: adminInfo.name,
    email: adminInfo.email,
  });

  const [passwordForm, setPasswordForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
    setUpdatedInfo({ name: adminInfo.name, email: adminInfo.email }); // Reset changes on cancel
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    setAdminInfo(updatedInfo);
    setIsEditing(false);
  };

  const handleToggleAction = (action) => {
    setAdminInfo((prev) => ({
      ...prev,
      [action]: !prev[action],
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log("Password updated:", passwordForm);
    setPasswordForm({ password: "", confirmPassword: "" });
  };

  return (
    <>
      {/* Admin Info Section */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h5 className="section-title">Admin Information</h5>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                {isEditing ? (
                  <Form.Control
                    type="text"
                    name="name"
                    value={updatedInfo.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="info-text">{adminInfo.name}</p>
                )}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                {isEditing ? (
                  <Form.Control
                    type="email"
                    name="email"
                    value={updatedInfo.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="info-text">{adminInfo.email}</p>
                )}
              </Form.Group>
            </Col>
          </Row>

          {isEditing ? (
            <Button variant="success" onClick={handleUpdate} className="me-2">
              Update
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleEditToggle}
              className="me-2"
            >
              Edit
            </Button>
          )}

          {isEditing && (
            <Button variant="secondary" onClick={handleEditToggle}>
              Cancel
            </Button>
          )}
        </Card.Body>
      </Card>

      {/* Freeze and Deactivate Section */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h5 className="section-title">Account Status</h5>
          <Row className="mt-4">
            <Col md={6}>
              <Form.Check
                type="switch"
                id="freeze-toggle"
                label="Freeze"
                checked={adminInfo.isFrozen}
                onChange={() => handleToggleAction("isFrozen")}
              />
            </Col>
            <Col md={6}>
              <Form.Check
                type="switch"
                id="deactivate-toggle"
                label="Deactivate"
                checked={adminInfo.isDeactivated}
                onChange={() => handleToggleAction("isDeactivated")}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Reset Password Form */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h5 className="section-title">Reset Password</h5>
          <Form onSubmit={handlePasswordSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={passwordForm.password}
                    onChange={handlePasswordChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={passwordForm.confirmPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="success" type="submit">
              Update Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
