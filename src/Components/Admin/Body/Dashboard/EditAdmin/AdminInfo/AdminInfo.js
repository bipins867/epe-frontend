import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Table,
  Tabs,
  Tab,
} from "react-bootstrap";
import "./AdminInfo.css";
import { Link } from "react-router-dom";

export const AdminInfoPage = () => {
  // Dummy Data
  const [saAdmins, setSaAdmins] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      frozen: false,
    },
    { id: 2, name: "Jane Doe", email: "jane.doe@example.com", frozen: true },
  ]);

  const [aAdmins, setAAdmins] = useState([
    {
      id: 1,
      name: "Michael Scott",
      email: "michael.scott@example.com",
      frozen: false,
    },
    {
      id: 2,
      name: "Pam Beesly",
      email: "pam.beesly@example.com",
      frozen: false,
    },
  ]);

  // States for Create Admin Form
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    type: "SA",
    password: "",
    confirmPassword: "",
  });

  const handleToggleFreeze = (type, id) => {
    if (type === "SA") {
      setSaAdmins((prev) =>
        prev.map((admin) =>
          admin.id === id ? { ...admin, frozen: !admin.frozen } : admin
        )
      );
    } else {
      setAAdmins((prev) =>
        prev.map((admin) =>
          admin.id === id ? { ...admin, frozen: !admin.frozen } : admin
        )
      );
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewAdmin((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("New Admin Data:", newAdmin);
    // Logic for creating an admin
    setNewAdmin({
      name: "",
      email: "",
      type: "SA",
      password: "",
      confirmPassword: "",
    });
    setShowCreateForm(false);
  };

  return (
    <Container fluid className="edit-admin-page mt-4">
      <h4 className="mb-4 text-primary">Edit Admins</h4>

      {/* Admin Stats */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Row>
            <Col md={6}>
              <p className="admin-stat">
                <strong>SA Admins:</strong> {saAdmins.length}
              </p>
            </Col>
            <Col md={6}>
              <p className="admin-stat">
                <strong>A Admins:</strong> {aAdmins.length}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Create Admin Section */}
      <Card className="shadow-sm mb-4">
        <Card.Header>
          <Button
            variant="primary"
            onClick={() => setShowCreateForm((prev) => !prev)}
          >
            {showCreateForm ? "Close Form" : "Create Admin"}
          </Button>
        </Card.Header>
        {showCreateForm && (
          <Card.Body>
            <Form onSubmit={handleFormSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={newAdmin.name}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={newAdmin.email}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="type">
                    <Form.Label>Type</Form.Label>
                    <Form.Select
                      name="type"
                      value={newAdmin.type}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="SA">SA</option>
                      <option value="A">A</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={newAdmin.password}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      value={newAdmin.confirmPassword}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="success" type="submit">
                Create Admin
              </Button>
            </Form>
          </Card.Body>
        )}
      </Card>

      {/* Admins List Tabs */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Tabs defaultActiveKey="sa-admins" id="admin-tabs" className="mb-3">
            {/* SA Admins Tab */}
            <Tab eventKey="sa-admins" title="SA Admins">
              <Table bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Freeze</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {saAdmins.map((admin, index) => (
                    <tr key={admin.id}>
                      <td>{index + 1}</td>
                      <td>{admin.name}</td>
                      <td>{admin.email}</td>
                      <td>
                        <Form.Check
                          type="switch"
                          id={`freeze-sa-${admin.id}`}
                          checked={admin.frozen}
                          onChange={() => handleToggleFreeze("SA", admin.id)}
                        />
                      </td>
                      <td>
                        <Link to={`./view/${admin.id}`}>
                          <span className="btn btn-info btn-sm">View</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>

            {/* A Admins Tab */}
            <Tab eventKey="a-admins" title="A Admins">
              <Table bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Freeze</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {aAdmins.map((admin, index) => (
                    <tr key={admin.id}>
                      <td>{index + 1}</td>
                      <td>{admin.name}</td>
                      <td>{admin.email}</td>
                      <td>
                        <Form.Check
                          type="switch"
                          id={`freeze-a-${admin.id}`}
                          checked={admin.frozen}
                          onChange={() => handleToggleFreeze("A", admin.id)}
                        />
                      </td>
                      <td>
                        <Link to={`./view/${admin.id}`}>
                          <span className="btn btn-info btn-sm">View</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </Container>
  );
};
