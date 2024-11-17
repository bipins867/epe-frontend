import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Table,
  Form,
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

export const ReferralPage = () => {
  const [referrals, setReferrals] = useState({
    totalReferrals: 120,
    pendingReferrals: 25,
    referralHistory: [
      {
        id: 1,
        joinDate: "2024-10-01",
        customerId: "C12345",
        name: "John Doe",
        completionDate: "2024-10-15",
        status: "Completed",
      },
      {
        id: 2,
        joinDate: "2024-10-10",
        customerId: "C12346",
        name: "Jane Smith",
        completionDate: "",
        status: "Pending",
      },
    ],
  });

  useEffect(() => {
    setReferrals({
      totalReferrals: 120,
      pendingReferrals: 25,
      referralHistory: [
        {
          id: 1,
          joinDate: "2024-10-01",
          customerId: "C12345",
          name: "John Doe",
          completionDate: "2024-10-15",
          status: "Completed",
        },
        {
          id: 2,
          joinDate: "2024-10-10",
          customerId: "C12346",
          name: "Jane Smith",
          completionDate: "",
          status: "Pending",
        },
      ],
    });
  }, []);

  const referralLink = "https://www.yoursite.com/referral?code=12345"; // Sample referral link

  return (
    <Container className="referral-page">
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
                      `https://wa.me/?text=${encodeURIComponent(referralLink)}`,
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
                <strong>Pending Referrals:</strong> {referrals.pendingReferrals}
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Referral History */}
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Card.Title className="text-primary">Referral History</Card.Title>
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
                    {referrals.referralHistory.map((referral) => (
                      <tr key={referral.id}>
                        <td>{referral.id}</td>
                        <td>{referral.joinDate}</td>
                        <td>{referral.customerId}</td>
                        <td>{referral.name}</td>
                        <td>{referral.completionDate || "N/A"}</td>
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
    </Container>
  );
};
