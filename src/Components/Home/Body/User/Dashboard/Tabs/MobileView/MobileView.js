import { Col, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const MobileView = ({ tabs, activeTab }) => {
  const navigate = useNavigate();
  return (
    <Col xs={12} className="dashboard-dropdown">
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          {tabs.find((tab) => tab.key === activeTab)?.name || "Select Tab"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {tabs.map((tab) => (
            <Dropdown.Item
              key={tab.key}
              active={activeTab === tab.key}
              onClick={() => navigate(`/user/${tab.key}`)}
            >
              {tab.icon} {tab.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Col>
  );
};
