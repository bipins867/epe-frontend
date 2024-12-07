import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";
import "./ViewKyc.css";
import { baseUrl } from "../../../../../../../../../Utils/config";
import { acceptKycAggrementHandler } from "../../apiHandler";
import { useAlert } from "../../../../../../../../UI/Alert/AlertContext";
import { formatAadharNumber } from "../../utils";

export const ViewKycPage = ({ kycDetails, setIsUpdated }) => {
  const [kycData, setKycData] = useState({
    name: "",
    email: "",
    dob: "",
    address: "",
    aadharNumber: "",
    aadharFrontUrl: "https://via.placeholder.com/150",
    aadharBackUrl: "https://via.placeholder.com/150",
    userUrl: "https://via.placeholder.com/150",
    status: "Pending", // Can be "Pending" or "Rejected"
  });
  const [accepting, setAccepting] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsForm, setTermsForm] = useState(false);
  const { showAlert } = useAlert();

  useEffect(() => {
    if (kycDetails && kycDetails.kyc) {
      const kyc = kycDetails.kyc;
      const userInfo = kycDetails.userInfo;

      if (kyc.status === "Verified") {
        if (!kyc.userAggreementAccepted) {
          setTermsForm(true);
        }
      }

      setKycData({
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

  const handleAcceptTerms = async () => {
    const response = await acceptKycAggrementHandler(setAccepting, showAlert);

    if (response) {
      showAlert("info", "Info!", "Kyc Aggreement Accepted Successfully!");
      setIsUpdated((prevState) => {
        return prevState + 1;
      });
    }
  };

  return (
    <>
      <Card className="kyc-card shadow-sm p-4">
        <h3 className="text-center mb-4">View KYC Details</h3>
        <Alert
          variant={kycData.status === "Rejected" ? "danger" : "info"}
          className="text-center"
        >
          <strong>Status:</strong> {kycData.status}
        </Alert>
        <Row className="mb-4">
          <Col md={6} className="mb-3">
            <p>
              <strong>Name:</strong> {kycData.name}
            </p>
            <p>
              <strong>Email:</strong> {kycData.email}
            </p>
            <p>
              <strong>Date of Birth:</strong> {kycData.dob}
            </p>
            <p>
              <strong>Address:</strong> {kycData.address}
            </p>
          </Col>
          <Col md={6}>
          <p>
  <strong>Aadhar Number:</strong> {kycData?.aadharNumber ? formatAadharNumber(kycData.aadharNumber) : "N/A"}
</p>

          </Col>
        </Row>
        <Row className="image-row text-center">
          <Col xs={12} sm={4} className="mb-3">
            <div className="image-container">
              <img
                src={kycData.aadharFrontUrl}
                alt="Aadhar Front"
                className="img-fluid rounded"
              />
              <p className="image-label">Aadhar Front</p>
            </div>
          </Col>
          <Col xs={12} sm={4} className="mb-3">
            <div className="image-container">
              <img
                src={kycData.aadharBackUrl}
                alt="Aadhar Back"
                className="img-fluid rounded"
              />
              <p className="image-label">Aadhar Back</p>
            </div>
          </Col>
          <Col xs={12} sm={4} className="mb-3">
            <div className="image-container">
              <img
                src={kycData.userUrl}
                alt="User"
                className="img-fluid rounded"
              />
              <p className="image-label">User Image</p>
            </div>
          </Col>
        </Row>
        {termsForm && (
          <div className="terms-section mt-4 p-3 rounded">
            <div className="d-flex align-items-center mb-3">
              <input
                type="checkbox"
                id="termsCheckbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="me-2"
              />
              <label htmlFor="termsCheckbox">
                I accept the{" "}
                <a
                  href="/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
            <Button
              className="accept-btn"
              variant="primary"
              disabled={!termsAccepted || accepting}
              onClick={handleAcceptTerms}
            >
              {accepting ? (
                <>
                  <Spinner animation="border" size="sm" /> Accepting...
                </>
              ) : (
                "Accept"
              )}
            </Button>
          </div>
        )}
      </Card>
    </>
  );
};
