import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Table,
  Form,
  Spinner,
} from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Referral.css";
import { PageComponent } from "../../../../../../Utils/Utils";
import { getReferralInfoHandler } from "./apiHandler";
import { useAlert } from "../../../../../../UI/Alert/AlertContext";

export const ReferralPage = () => {
  const [referralLink, setReferralLink] = useState("");

  const [referrals, setReferrals] = useState({
    totalReferrals: 0,
    pendingReferrals: 0,
    referralHistory: [],
  });
  const [loading, setLoading] = useState(true); // New loading state
  const { showAlert } = useAlert();

  useEffect(() => {
    // Simulate an API call to fetch user details
    const fetchUserDetails = async () => {
      const response = await getReferralInfoHandler(setLoading, showAlert);

      if (response) {
        setReferralLink(response.referralUrl);
        setReferrals({
          totalReferrals: response.numberOfReferrals,
          pendingReferrals: response.pendingReferrals,
          referralHistory: response.referredUsers,
        });
      }
    };

    fetchUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="referral-page">
      <PageComponent title={"Referral"} />
      {loading ? ( // Show spinner while loading
        <div className="loading-screen text-center">
          <Spinner animation="border" role="status" className="loading-spinner">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h4 className="loading-text">Fetching User Details...</h4>
        </div>
      ) : (
        <>
          <Row>
            <Col xs={12}>
              <Card>
                <Card.Body>
                  <Card.Title className="text-primary">
                    Your Referral Link
                  </Card.Title>
                  <div className="referral-link-container">
                    <Form.Control type="text" value={referralLink} readOnly />
                    <CopyToClipboard text={referralLink}>
                      <Button variant="primary" className="ms-2">
                        Copy Link
                      </Button>
                    </CopyToClipboard>
                  </div>

                  <div className="share-buttons">
                    <Button
                      variant="info"
                      className="share-btn"
                      onClick={() =>
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            referralLink
                          )}`,
                          "_blank"
                        )
                      }
                    >
                      <FaFacebook /> Facebook
                    </Button>
                    <Button
                      variant="info"
                      className="share-btn"
                      onClick={() =>
                        window.open(
                          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                            referralLink
                          )}`,
                          "_blank"
                        )
                      }
                    >
                      <FaTwitter /> Twitter
                    </Button>
                    <Button
                      variant="info"
                      className="share-btn"
                      onClick={() =>
                        window.open(
                          `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
                            referralLink
                          )}`,
                          "_blank"
                        )
                      }
                    >
                      <FaPinterest /> Pinterest
                    </Button>
                    <Button
                      variant="info"
                      className="share-btn"
                      onClick={() =>
                        window.open(
                          `https://wa.me/?text=${encodeURIComponent(
                            referralLink
                          )}`,
                          "_blank"
                        )
                      }
                    >
                      <FaWhatsapp /> WhatsApp
                    </Button>
                    <Button
                      variant="info"
                      className="share-btn"
                      onClick={() =>
                        window.open(
                          `mailto:?subject=Check%20this%20out&body=${encodeURIComponent(
                            referralLink
                          )}`,
                          "_blank"
                        )
                      }
                    >
                      <FaEnvelope /> Email
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Referral Statistics */}
          <Row className="my-4">
            <Col xs={12} md={6}>
              <Card>
                <Card.Body>
                  <Card.Title className="text-primary">
                    Referral Statistics
                  </Card.Title>
                  <p>
                    <strong>Total Referrals:</strong> {referrals.totalReferrals}
                  </p>
                  <p>
                    <strong>Pending Referrals:</strong>{" "}
                    {referrals.pendingReferrals}
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Referral History */}
            <Col xs={12}>
              <Card>
                <Card.Body>
                  <Card.Title className="text-primary">
                    Referral History
                  </Card.Title>
                  <div className="referral-history-table-container">
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Date of Joining</th>
                          <th>Customer ID</th>
                          <th>Name</th>
                          <th>Date of Completion</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {referrals.referralHistory.map((referral,index) => (
                          <tr key={index+1}>
                            <td>{index+1}</td>
                            <td>{new Date(referral.dateOfJoining).toLocaleDateString()}</td>
                            <td>{referral.candidateId}</td>
                            <td>{referral.name}</td>
                            <td>{new Date(referral.dateOfCompletion ).toLocaleDateString()|| "N/A"}</td>
                            <td>{referral.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};
