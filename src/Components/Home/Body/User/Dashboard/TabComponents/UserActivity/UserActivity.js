import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Dropdown,
  DropdownButton,
  Table,
} from "react-bootstrap";
import "./UserActivity.css";
import { PageComponent } from "../../../../../../Utils/Utils";

export const UserActivityPage = () => {
  const [filterData, setFilterData] = useState({
    from: "",
    to: "",
    limit: 20,
    type: "All",
  });

  const activityData = [
    {
      id: 1,
      date: "2024-10-01",
      time: "10:30 AM",
      type: "AdminUpdate",
      description: "Updated user profile",
      ipAddress: "192.168.1.1",
      location: "New York, USA",
      deviceType: "Mobile",
    },
    {
      id: 2,
      date: "2024-10-02",
      time: "12:00 PM",
      type: "Custom",
      description: "Custom activity",
      ipAddress: "192.168.1.2",
      location: "California, USA",
      deviceType: "Desktop",
    },
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

  const handleLimitChange = (limit) => {
    setFilterData({ ...filterData, limit });
  };

  const handleTypeChange = (type) => {
    setFilterData({ ...filterData, type });
  };

  const getActivity = () => {
    // Add logic to fetch activity based on filterData
    alert("Fetching activity data based on filters!");
  };

  return (
    <Container className="user-activity-page">
      <PageComponent title={"User Activity"}/>
      <Row className="mt-5">
        <Col xs={12}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center text-primary">
                User Activity
              </Card.Title>
              <div className="filter-options mb-4">
                <Row>
                  <Col xs={12} md={3}>
                    <Form.Label>From</Form.Label>
                    <Form.Control
                      type="date"
                      name="from"
                      value={filterData.from}
                      onChange={handleFilterChange}
                    />
                  </Col>
                  <Col xs={12} md={3}>
                    <Form.Label>To</Form.Label>
                    <Form.Control
                      type="date"
                      name="to"
                      value={filterData.to}
                      onChange={handleFilterChange}
                    />
                  </Col>
                  <Col xs={12} md={2}>
                    <Form.Label>Limit</Form.Label>
                    <DropdownButton
                      title={filterData.limit}
                      onSelect={handleLimitChange}
                      variant="outline-primary"
                      className="w-100"
                    >
                      <Dropdown.Item eventKey={20}>20</Dropdown.Item>
                      <Dropdown.Item eventKey={50}>50</Dropdown.Item>
                      <Dropdown.Item eventKey={100}>100</Dropdown.Item>
                    </DropdownButton>
                  </Col>
                  <Col xs={12} md={2}>
                    <Form.Label>Type</Form.Label>
                    <DropdownButton
                      title={filterData.type}
                      onSelect={handleTypeChange}
                      variant="outline-primary"
                      className="w-100"
                    >
                      <Dropdown.Item eventKey="All">All</Dropdown.Item>
                      <Dropdown.Item eventKey="AdminUpdate">
                        AdminUpdate
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Custom">Custom</Dropdown.Item>
                    </DropdownButton>
                  </Col>
                  <Col xs={12} md={2}>
                    <Button
                      onClick={getActivity}
                      variant="primary"
                      className="w-100"
                    >
                      Get Activity
                    </Button>
                  </Col>
                </Row>
              </div>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>IP Address</th>
                    <th>Location</th>
                    <th>Device Type</th>
                  </tr>
                </thead>
                <tbody>
                  {activityData.map((activity) => (
                    <tr key={activity.id}>
                      <td>{activity.id}</td>
                      <td>{activity.date}</td>
                      <td>{activity.time}</td>
                      <td>{activity.type}</td>
                      <td>{activity.description}</td>
                      <td>{activity.ipAddress}</td>
                      <td>{activity.location}</td>
                      <td>{activity.deviceType}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
