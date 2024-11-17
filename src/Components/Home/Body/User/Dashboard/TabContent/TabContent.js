import { Navigate } from "react-router-dom";

import { Col, Tab, Card } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

export const TabContentView = ({ isMobileView, tabs }) => {
  return (
    <Col md={isMobileView ? 12 : 9} className="dashboard-content">
      <Card className="content-card">
        <Card.Body>
          <Tab.Content>
            <Routes>
              {tabs.map((tab) => (
                <Route
                  key={tab.key}
                  path={`${tab.key}`}
                  element={<tab.component />}
                />
              ))}
              <Route path="*" element={<Navigate to="piggyBox" replace />} />
            </Routes>
          </Tab.Content>
        </Card.Body>
      </Card>
    </Col>
  );
};
