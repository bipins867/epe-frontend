import React, { useState } from "react";
import { Container, Nav, Tab } from "react-bootstrap";
import "./KycAndPan.css";
import { KycPage } from "./Kyc/Kyc";
import { PanPage } from "./Pan/Pan";

export const KycAndPanPage = () => {
  const [activeKey, setActiveKey] = useState("kyc");

  return (
    <Container className="tabbed-page-container">
      <Tab.Container activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Nav variant="tabs" className="custom-tabs">
          <Nav.Item>
            <Nav.Link eventKey="kyc" className="custom-tab-link">
              KYC 
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="pan" className="custom-tab-link">
              PAN 
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="custom-tab-content">
          <Tab.Pane eventKey="kyc">

            <KycPage/>
          </Tab.Pane>
          <Tab.Pane eventKey="pan">

            <PanPage/>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};
