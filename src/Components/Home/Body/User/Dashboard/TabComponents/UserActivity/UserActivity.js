import React, { useEffect, useState } from "react";
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
  Spinner,
} from "react-bootstrap";
import "./UserActivity.css";
import { PageComponent } from "../../../../../../Utils/Utils";
import { getUserActivityHandler } from "./apiHandler";
import { useAlert } from "../../../../../../UI/Alert/AlertContext";

export const UserActivityPage = () => {
  const [filterData, setFilterData] = useState({
    fromDate: "",
    toDate: "",
    limit: 20,
    activityType: "All",
  });

  const [activityData, setActivityData] = useState([ ]);
  const [isFetching, setIsFetching] = useState(false); // State for activity fetching
 const {showAlert}=useAlert();
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

  const handleLimitChange = (limit) => {
    setFilterData({ ...filterData, limit });
  };

  const handleTypeChange = (activityType) => {
    setFilterData({ ...filterData, activityType });
  };

  const getActivity = async() => {
    
    const response=await getUserActivityHandler(filterData,setIsFetching,showAlert);
    console.log(response);
    if(response){
      setActivityData(response.data);
    }
  };


  useEffect(()=>{
    getActivity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <Container className="user-activity-page">
      <PageComponent title={"User Activity"} />
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
                      name="fromDate"
                      value={filterData.fromDate}
                      onChange={handleFilterChange}
                    />
                  </Col>
                  <Col xs={12} md={3}>
                    <Form.Label>To</Form.Label>
                    <Form.Control
                      type="date"
                      name="toDate"
                      value={filterData.toDate}
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
                      title={filterData.activityType}
                      onSelect={handleTypeChange}
                      variant="outline-primary"
                      className="w-100"
                    >
                      <Dropdown.Item eventKey="All">All</Dropdown.Item>
                      <Dropdown.Item eventKey="AdminUpdate">
                        AdminUpdate
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Auth">Auth</Dropdown.Item>
                      <Dropdown.Item eventKey="AccountClouser">AccountClouser</Dropdown.Item>
                      <Dropdown.Item eventKey="BankDetails">BankDetails</Dropdown.Item>
                      <Dropdown.Item eventKey="SavedAddress">SavedAddress</Dropdown.Item>
                      
                      
                    </DropdownButton>
                  </Col>
                  <Col xs={12} md={2}>
                    <Button
                      onClick={getActivity}
                      variant="primary"
                      className="w-100"
                      disabled={isFetching}
                    >
                      Get Activity
                    </Button>
                  </Col>
                </Row>
              </div>
              {isFetching ? (
                <div className="d-flex justify-content-center align-items-center">
                  <Spinner animation="border" variant="primary" />
                </div>
              ) : (
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
                    {activityData.map((activity,index) => (
                      <tr key={index+1}>
                        <td>{index+1}</td>
                        <td>{new Date(activity.createdAt).toLocaleDateString()}</td>
                        <td>{new Date(activity.createdAt).toLocaleTimeString()}</td>
                        <td>{activity.activityType}</td>
                        <td>{activity.activityDescription}</td>
                        <td>{activity.ipAddress}</td>
                        <td>{activity.location}</td>
                        <td>{activity.deviceType}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
