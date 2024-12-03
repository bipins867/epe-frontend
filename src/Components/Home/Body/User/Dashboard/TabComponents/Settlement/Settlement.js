import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button, Spinner } from "react-bootstrap";
import "./Settlement.css";
import { PageComponent } from "../../../../../../Utils/Utils";
import { getSettlementDetailsHandler, updateSettlementDetailsHandler } from "./apiHandler";
import { useAlert } from "../../../../../../UI/Alert/AlertContext";

export const SettlementPage = () => {
  const [formData, setFormData] = useState({
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
  });
  const [isUpdating, setIsUpdating] = useState(false); // State for button spinner
  const [isLoading, setIsLoading] = useState(false); // State for loading screen spinner
  const {showAlert}=useAlert();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    
    const response=await updateSettlementDetailsHandler(formData,setIsUpdating,showAlert);
    if(response){
      //Its respective if neccessary

      showAlert("info","Info!","Settlement Updated Successfully")
    }
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await getSettlementDetailsHandler(setIsLoading, showAlert);

      if (response) {
        const savedAddress = response.bankDetails;

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
          <h4 className="loading-text">Fetching  Details...</h4>
        </div>
    );
  }

  return (
    <Container className="settlement-page">
      <PageComponent title={"Settlement"} />
      <Row className="mt-5">
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center text-primary">
                Settlement Details
              </Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="bankName">
                  <Form.Label>Bank Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Bank Name"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="accountHolderName">
                  <Form.Label>Account Holder Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Account Holder Name"
                    name="accountHolderName"
                    value={formData.accountHolderName}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="accountNumber">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Account Number"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ifscCode">
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter IFSC Code"
                    name="ifscCode"
                    value={formData.ifscCode}
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
