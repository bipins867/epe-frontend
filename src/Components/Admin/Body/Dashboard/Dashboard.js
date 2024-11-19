import React, { useState } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Card, Dropdown, Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css";

// Import your pages
import { Home } from "./Home/Home";
import { Announcement } from "./Announcement/Announcement";
import { Customers } from "./Customers/Customers";
import { PiggyBox } from "./PiggyBox/PiggyBox";
import { AccountClouser } from "./AccountClouser/AccountClouser";
import { Withdrawal } from "./Withdrawal/Withdrawal";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { Referral } from "./Referral/Referral";
import { Kyc } from "./Kyc/Kyc";
import { CustomerSupport } from "./CustomerSupport/CustomerSupport";
import { Loan } from "./Loan/Loan";
import { ContactUs } from "./ContactUs/ContactUs";
import { UserActivity } from "./UserActivity/UserActivity";
import { EditAdmin } from "./EditAdmin/EditAdmin";
import { AdminProfilePage } from "./AdminProfile/AdminProfile";

export const Dashboard = () => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("Home");

  const menuItems = [
    { name: "Home", path: "./" },
    { name: "Announcement", path: "./announcement" },
    { name: "Customers", path: "./customers" },
    { name: "PiggyBox", path: "./piggyBox" },
    { name: "Account Closure", path: "./accountClouser" },
    { name: "Withdrawal", path: "./withdrawal" },
    { name: "Transaction History", path: "./transactionHistory" },
    { name: "Referral", path: "./referral" },
    { name: "KYC", path: "./kyc" },
    { name: "Customer Support", path: "./customerSupport" },
    { name: "Loan", path: "./loan" },
    { name: "Contact Us", path: "./contactUs" },
    { name: "User Activity", path: "./userActivity" },
    { name: "Edit Admins", path: "./editAdmin" },
  ];

  return (
    <Container fluid className="dashboard-container">
      <Row>
        {/* Sidebar for desktop view */}
        <Col md={3} className="d-none d-md-block">
          <Card className="sidebar shadow">
            <Card.Body>
              <ul className="menu-list">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`menu-link ${
                        location.pathname === item.path ? "active" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Dropdown for mobile view */}
        <Col xs={12} className="d-md-none mb-3">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {selectedOption}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {menuItems.map((item) => (
                <Dropdown.Item
                  as={Link}
                  to={item.path}
                  key={item.name}
                  onClick={() => setSelectedOption(item.name)}
                >
                  {item.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        {/* Main Content */}
        <Col md={9} xs={12} className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="announcement" element={<Announcement />} />
            <Route path="customers" element={<Customers />} />
            <Route path="piggyBox" element={<PiggyBox />} />
            <Route path="accountClouser" element={<AccountClouser />} />
            <Route path="withdrawal" element={<Withdrawal />} />
            <Route path="transactionHistory" element={<TransactionHistory />} />
            <Route path="referral" element={<Referral />} />
            <Route path="kyc" element={<Kyc />} />
            <Route path="customerSupport" element={<CustomerSupport />} />
            <Route path="loan" element={<Loan />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="userActivity" element={<UserActivity />} />
            <Route path="editAdmin" element={<EditAdmin />} />
            <Route path="adminProfile" element={<AdminProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};
