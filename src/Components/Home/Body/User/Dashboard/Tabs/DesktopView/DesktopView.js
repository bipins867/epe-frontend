import { Col, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const DesktopView = ({ tabs, activeTab }) => {
  const navigate = useNavigate();
  return (
    <Col md={3} className="dashboard-sidebar">
      <Nav className="flex-column">
        {tabs.map((tab) => (
          <Nav.Item key={tab.key}>
            <Nav.Link
              className={`sidebar-tab ${
                activeTab === tab.key ? "active-tab" : ""
              }`}
              onClick={() => navigate(`/user/${tab.key}`)}
            >
              {tab.icon} {tab.name}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Col>
  );
};
