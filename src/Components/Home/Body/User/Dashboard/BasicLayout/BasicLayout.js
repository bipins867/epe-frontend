import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav, Card, Dropdown } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./BasicLayout.css";

export const BasicLayoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  // List of tabs with their keys, display names, and routes

  const tabs = [
    { key: "userProfile", name: "UserProfile", route: "/user/profile" },
    { key: "kit", name: "Kit", route: "/user/kit" },
    { key: "piggyBox", name: "PiggyBox", route: "/user/piggyBox" },
    { key: "referral", name: "Referral", route: "/user/referral" },
    { key: "loans", name: "Loans", route: "/user/loans" },
    { key: "withdrawal", name: "Withdrawal", route: "/user/Withdrawal" },
    { key: "transferMoney", name: "Transfer Money", route: "/user/transferMoney" },
    { key: "settlement", name: "Settlement", route: "/user/settlement" },
    { key: "savedAddress", name: "SavedAddress", route: "/user/savedAddress" },
    { key: "kyc", name: "KYC", route: "/user/kyc" },
    { key: "userActivity", name: "UserActivity", route: "/user/userActivity" },
    { key: "subhDhanLabh", name: "SubhDhanLabh", route: "/user/shubhDhanLaabh" },
  ];

  // Sync active tab with the current route
  const getActiveTabKey = () => {
    const currentTab = tabs.find((tab) => location.pathname.includes(tab.route));
    return currentTab ? currentTab.key : "piggyBox"; // Default to PiggyBox if no match
  };

  const [activeTab, setActiveTab] = useState(getActiveTabKey());

  useEffect(() => {
    setActiveTab(getActiveTabKey());
  }, [location]);

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabClick = (key) => {
    const selectedTab = tabs.find((tab) => tab.key === key);
    if (selectedTab) {
      navigate(selectedTab.route); // Navigate to the corresponding route
      setActiveTab(key);
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-background"></div>
      <Container fluid className="dashboard-container">
        <Row className="dashboard-row">
          {isMobileView ? (
            // Mobile View: Dropdown Menu
            <Col xs={12} className="dashboard-dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  {tabs.find((tab) => tab.key === activeTab)?.name || "Select Tab"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {tabs.map((tab) => (
                    <Dropdown.Item key={tab.key} onClick={() => handleTabClick(tab.key)}>
                      {tab.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          ) : (
            // Desktop View: Sidebar
            <Col md={3} className="dashboard-sidebar">
              <Nav className="flex-column">
                {tabs.map((tab) => (
                  <Nav.Item key={tab.key}>
                    <Nav.Link
                      className={`sidebar-tab ${
                        activeTab === tab.key ? "active-tab" : ""
                      }`}
                      onClick={() => handleTabClick(tab.key)}
                    >
                      {tab.name}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
          )}

          {/* Main Content */}
          <Col md={isMobileView ? 12 : 9} className="dashboard-content">
            <Card className="content-card">
              <Card.Body>
                {/* Content will render based on the current route */}
                <Tab.Content>
                  <div>{activeTab}</div>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
