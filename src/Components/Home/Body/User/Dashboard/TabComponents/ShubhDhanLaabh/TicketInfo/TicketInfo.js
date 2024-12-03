import React, { useState, useEffect } from "react";
import {
  Card,
  Table,
  Row,
  Col,
  Container,
  Button,
  Spinner,
} from "react-bootstrap";
import "./TicketInfo.css";
import { useParams } from "react-router-dom";
import { useAlert } from "../../../../../../../UI/Alert/AlertContext";
import { activateTicketHandler, fetchTicketInfoHandler } from "./apiHandler";

const ticketData = [
  {
    title: "stone",
    price: 100,
    baseColor: "#a8a8a8",
    gradientColor: "#d3d3d3",
  },
  { title: "iron", price: 500, baseColor: "#b87333", gradientColor: "#d4a17a" },
  {
    title: "bronze",
    price: 2000,
    baseColor: "#cd7f32",
    gradientColor: "#e2a679",
  },
  {
    title: "silver",
    price: 5000,
    baseColor: "#c0c0c0",
    gradientColor: "#e0e0e0",
  },
  {
    title: "gold",
    price: 15000,
    baseColor: "#ffd700",
    gradientColor: "#ffec94",
  },
  {
    title: "diamond",
    price: 25000,
    baseColor: "#b9f2ff",
    gradientColor: "#e0ffff",
  },
  {
    title: "platinum",
    price: 500000,
    baseColor: "#e5e4e2",
    gradientColor: "#f2f2f2",
  },
];

export const TicketInfoPage = () => {
  const { ticketName } = useParams();

  const ticket = ticketData.find((item) => item.title === ticketName);
  const [loading, setLoading] = useState(true);
  const [activateLoading, setActivateLoading] = useState(false);
  const [isInfoUpdate, setIsInfoUpdated] = useState(0);
  const { showAlert } = useAlert();
  const [ticketInfo, setTicketInfo] = useState({
    title: ticketName,
    price: `₹${ticket.price}(Inc. of GST)`,
    status: "Inactive",
    piggyBoxBalance: "₹0",
    affiliateBonus: "₹0",
    purchaseCount: "0",
    goldBonus: "N/A",
    referralHistory: [],
  });

  // Simulating data fetch
  useEffect(() => {
    const fetchTicketDetails = async () => {
      const response = await fetchTicketInfoHandler(
        ticketName,
        setLoading,
        showAlert
      );

      if (response) {
        
        const userList = response.usersLists;
        const userTicketCard = response.userTicketCard;
        setTicketInfo((prevState) => {
          return {
            ...prevState,
            status: userTicketCard?userTicketCard.isTicketActive ? "Active" : "Inactive":'Inactive',
            piggyBoxBalance: `₹${response.piggyBalance.toFixed(2)}`,
            affiliateBonus: userTicketCard?`₹${userTicketCard.affiliateBonus.toFixed(2)}`:'NA',
            purchaseCount: userTicketCard?userTicketCard.rechargeCount:'NA',
            referralHistory: userList,
          };
        });
      }
    };

    fetchTicketDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInfoUpdate]);

  const handleActivate = async () => {
   
    const response=await activateTicketHandler(ticketName,setActivateLoading,showAlert);
    if(response){
      showAlert('info','Info!','Pool Activated Successfully!')
      setIsInfoUpdated(isInfoUpdate+1)
    }
  };

  // Fetch the ticket design details
  const ticketDesign =
    ticketData.find((ticket) => ticket.title === ticketInfo.title) || {};

  return (
    <Container className="ticket-info-page">
      {loading ? (
        <div className="loading-screen text-center">
          <Spinner animation="border" role="status" className="loading-spinner">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h4 className="loading-text">Fetching Details...</h4>
        </div>
      ) : (
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            {/* Card Info */}
            <Card
              className="card-info shadow mb-4"
              style={{
                background: `linear-gradient(45deg, ${ticketDesign.baseColor}, ${ticketDesign.gradientColor})`,
                color: "#fff",
              }}
            >
              <Card.Body className="text-center">
                <h4>{ticketInfo.title.toUpperCase()} POOL</h4>
                <p className="card-price">{ticketInfo.price}</p>
              </Card.Body>
            </Card>

            {/* Ticket Info */}
            <Card className="shadow ticket-card">
              <Card.Body>
                <Row>
                  <Col md={6} className="mb-3">
                    <p>
                      <strong>Status:</strong> {ticketInfo.status}
                    </p>
                  </Col>
                  <Col md={6} className="mb-3 text-md-end">
                    <Button
                      variant="primary"
                      disabled={
                        ticketInfo.status !== "Inactive" || activateLoading
                      }
                      onClick={handleActivate}
                    >
                      {activateLoading ? (
                        <Spinner as="span" animation="border" size="sm" />
                      ) : (
                        "Activate Card"
                      )}
                    </Button>
                  </Col>
                  <Col md={6} className="mb-3">
                    <p>
                      <strong>PiggyBox Balance:</strong>{" "}
                      {ticketInfo.piggyBoxBalance}
                    </p>
                  </Col>
                  <Col md={6} className="mb-3">
                    <p>
                      <strong>Affiliate Bonus:</strong>{" "}
                      {ticketInfo.affiliateBonus}
                    </p>
                  </Col>
                  <Col md={6} className="mb-3">
                    <p>
                      <strong>Gold Bonus:</strong> {ticketInfo.goldBonus}
                    </p>
                  </Col>
                  <Col md={6} className="mb-3">
                    <p>
                      <strong>Total Purchase Count:</strong>{" "}
                      {ticketInfo.purchaseCount}
                    </p>
                  </Col>
                </Row>
                <h4 className="mt-4">Referral History</h4>
                <Table responsive bordered className="mt-3">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Customer ID</th>
                      <th>Name</th>
                      <th>Pool Purchase Count</th>
                      <th>Pending Purchase Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ticketInfo.referralHistory.map((referral, index) => {
                      const userTicketCard = referral.userTicketCard;
                      const rechargeCount = userTicketCard
                        ? userTicketCard.rechargeCount
                        : 0;
                      const completedCount = userTicketCard
                        ? rechargeCount - userTicketCard.completedCount
                        : 0;

                      return (
                        <tr key={index + 1}>
                          <td>{index + 1}</td>
                          {/* Use index + 1 to display sequential numbering */}
                          <td>{referral.candidateId}</td>
                          <td>{referral.name}</td>
                          <td>{rechargeCount}</td>
                          <td>{completedCount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};
