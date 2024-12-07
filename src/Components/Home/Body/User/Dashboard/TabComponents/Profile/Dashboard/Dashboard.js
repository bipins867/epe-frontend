import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Form,
  Spinner,
} from "react-bootstrap";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setUserAuthToken,
  userLogOut,
} from "../../../../../../../../Store/User/auth";
import { useAlert } from "../../../../../../../UI/Alert/AlertContext";
import { getUserDetails } from "./apiHandler";
import { baseUrl } from "../../../../../../../../Utils/config";

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const dummyUser = {
    name: "John Doe",
    customerId: "CUST12345",
    kycStatus: "Approved",
      profileImage:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
    userDetails: {
      gender: "Male",
      maritalStatus: "Married",
      alternatePhone: "9876541230",
      fatherName: "Robert Doe",
      motherName: "Sarah Doe",
      spouseName: "Jane Doe",
      employmentType: "Salaried",
      organizationName: "Tech Solutions",
      designation: "Software Engineer",
      monthlyIncome: "₹50,000 - ₹1,00,000",
    },
  };

  const {
    name,
    customerId,
    kycStatus,
    profileImage,
    userDetails,
  } = dummyUser;

  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDetails, setEditedDetails] = useState(userDetails);
  const [submitting, setSubmitting] = useState(false);
    const {showAlert}=useAlert();


    useEffect(()=>{

      const fetchUserDetails=async()=>{

        const response=await getUserDetails(setIsLoading,showAlert);

        if(response){
          const userDetails=response.userDetails;//this will be containing userDetails
          const userKyc=response.userKyc;
          
          const candidateId=response.candidateId;
          const kycStatus=userKyc.status;
          const profileImage=baseUrl+userKyc.userUrl
          const name=response.name;

        }

      }

      fetchUserDetails();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("userToken");
    dispatch(userLogOut());
    dispatch(setUserAuthToken(""));
    navigate("/user/auth/login");
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsEditing(false);
      alert("User details updated successfully!");
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails((prev) => ({ ...prev, [name]: value }));
  };

  const genderOptions = ["Male", "Female", "Non-Binary", "Other"];
  const maritalStatusOptions = ["Single", "Married", "Divorced", "Widowed"];
  const employmentTypeOptions = [
    "Salaried",
    "Self-Employed",
    "Unemployed",
    "Retired",
  ];
  const monthlyIncomeOptions = [
    "₹0 - ₹25,000",
    "₹25,001 - ₹50,000",
    "₹50,001 - ₹1,00,000",
    "₹1,00,001 - ₹2,00,000",
    "₹2,00,001+",
  ];

  return (
    <Container className="user-profile-page py-4">
      {isLoading ? (
        <>
          {" "}
          <div className="loading-screen text-center">
            <Spinner
              animation="border"
              role="status"
              className="loading-spinner"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h4 className="loading-text">Fetching User Details...</h4>
          </div>
        </>
      ) : (
        <>
          {/* Profile Header */}
          <Row className="justify-content-center text-center">
            <Col md={4} sm={6} xs={8}>
              <div className="profile-image-container">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-image"
                />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center text-center mt-3">
            <Col>
              <h3>{name}</h3>
              <p className="text-muted">Customer ID: {customerId}</p>
              <Badge
                bg={kycStatus === "Verified" ? "success" : "warning"}
                className="kyc-status-badge"
              >
                KYC: {kycStatus}
              </Badge>
            </Col>
          </Row>

          {/* User Details */}
          <Row className="mt-4">
            <Col>
              <Card className="user-details-card">
                <Card.Body>
                  <Card.Title>User Details</Card.Title>
                  {isEditing ? (
                    <Form onSubmit={handleSaveClick}>
                      <Row className="mb-3">
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                              name="gender"
                              value={editedDetails.gender}
                              onChange={handleChange}
                              required
                            >
                              {genderOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Marital Status</Form.Label>
                            <Form.Select
                              name="maritalStatus"
                              value={editedDetails.maritalStatus}
                              onChange={handleChange}
                              required
                            >
                              {maritalStatusOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Alternate Phone</Form.Label>
                            <Form.Control
                              type="text"
                              name="alternatePhone"
                              value={editedDetails.alternatePhone}
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Father's Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="fatherName"
                              value={editedDetails.fatherName}
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Mother's Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="motherName"
                              value={editedDetails.motherName}
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Spouse's Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="spouseName"
                              value={editedDetails.spouseName}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Employment Type</Form.Label>
                            <Form.Select
                              name="employmentType"
                              value={editedDetails.employmentType}
                              onChange={handleChange}
                              required
                            >
                              {employmentTypeOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Organization Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="organizationName"
                              value={editedDetails.organizationName}
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Designation</Form.Label>
                            <Form.Control
                              type="text"
                              name="designation"
                              value={editedDetails.designation}
                              onChange={handleChange}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Monthly Income</Form.Label>
                            <Form.Select
                              name="monthlyIncome"
                              value={editedDetails.monthlyIncome}
                              onChange={handleChange}
                              required
                            >
                              {monthlyIncomeOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button
                        type="submit"
                        variant="primary"
                        className="me-2"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <>
                            <Spinner animation="border" size="sm" /> Saving...
                          </>
                        ) : (
                          "Save"
                        )}
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => setIsEditing(false)}
                        disabled={submitting}
                      >
                        Cancel
                      </Button>
                    </Form>
                  ) : (
                    <>
                      <Row>
                        {Object.entries(userDetails).map(([key, value]) => (
                          <Col md={6} key={key} className="mb-3">
                            <p>
                              <strong>
                                {key.charAt(0).toUpperCase() + key.slice(1)}:
                              </strong>{" "}
                              {value}
                            </p>
                          </Col>
                        ))}
                      </Row>
                      <Button variant="primary" onClick={handleEditClick}>
                        Edit
                      </Button>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Referral Info


    {/* Referral Info */}
          <Row className="mt-4">
            <Col>
              <Card className="referral-card">
                <Card.Body>
                  <Card.Title>Referral Information</Card.Title>
                  <p>Name: Jane Smith</p>
                  <p>Customer ID: CUST67890</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Logout Button */}
          <Row className="mt-4 text-center">
            <Col className="button-container">
              <Button
                variant="danger"
                size="lg"
                className="logout-button"
                onClick={logoutHandler}
              >
                Logout
              </Button>
              <Link
                to="closeAccount"
                className="btn btn-danger close-account-button"
              >
                <i className="fas fa-times-circle"></i> Close Account
              </Link>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};
