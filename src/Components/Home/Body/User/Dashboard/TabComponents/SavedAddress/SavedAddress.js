import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
import "./SavedAddress.css";
import { PageComponent } from "../../../../../../Utils/Utils";
import { getAddressDetailsHandler, updateAddressDetailsHandler } from "./apiHandler";
import { useAlert } from "../../../../../../UI/Alert/AlertContext";

export const SavedAddressPage = () => {
  const [formData, setFormData] = useState({
    address1: "",
    address2: "",
    state: "",
    pinCode: "",
  });

  const [isUpdating, setIsUpdating] = useState(false); // State for button spinner
  const [isLoading, setIsLoading] = useState(true); // State for loading screen spinner
  const { showAlert } = useAlert();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    
    const response=await updateAddressDetailsHandler(formData,setIsUpdating,showAlert);
    if(response){
      //Its respective if neccessary

      showAlert("info","Info!","Address Updated Successfully")
    }
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await getAddressDetailsHandler(setIsLoading, showAlert);

      if (response) {
        const savedAddress = response.savedAddress;

        setFormData(savedAddress);
      }
    };

    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

  if (isLoading) {
    // Loading screen spinner
    return (
      <div className="loading-screen text-center">
        <Spinner animation="border" role="status" className="loading-spinner">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h4 className="loading-text">Fetching Details...</h4>
      </div>
    );
  }

  return (
    <Container className="address-page">
      <PageComponent title={"Saved Address"} />
      <Row className="mt-5">
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center text-primary">
                Update Address
              </Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="address1">
                  <Form.Label>Address Line 1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Address Line 1"
                    name="address1"
                    value={formData.address1}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="address2">
                  <Form.Label>Address Line 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Address Line 2"
                    name="address2"
                    value={formData.address2}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="state">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="pinCode">
                  <Form.Label>Pin Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Pin Code"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={handleUpdate}
                  className="w-100"
                  disabled={isUpdating} // Disable button while updating
                >
                  {isUpdating ? (
                    <Spinner as="span" animation="border" size="sm" />
                  ) : (
                    "Update"
                  )}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
