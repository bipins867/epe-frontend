import React, { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./SubhDhanLaabh.css"; // Custom CSS for tabs
import { CardInfoPage } from "./CardInfo/CardInfo";
import { UserInfoPage } from "./UserInfo/UserInfo";

export const SubhDhanLaabhPage = () => {
  const [activeTab, setActiveTab] = useState("cardInfo"); // Default tab
  const navigate = useNavigate();

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h5 className="mb-4">SubhDhanLaabh</h5>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <div
            className={`tab-item ${activeTab === "cardInfo" ? "active" : ""}`}
            onClick={() => {
              navigate("/admin/subhDhanLaabh/cardInfo"); // Navigate to Card Info tab
              setActiveTab("cardInfo");
            }}
          >
            Card Info
          </div>
          <div
            className={`tab-item ${activeTab === "userInfo" ? "active" : ""}`}
            onClick={() => {
              navigate("/admin/subhDhanLaabh/userInfo"); // Navigate to User Info tab
              setActiveTab("userInfo");
            }}
          >
            User Info
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          <Routes>
            <Route path="userInfo/*" element={<UserInfoPage />} />
            <Route path="cardInfo/*" element={<CardInfoPage />} />
            <Route
              path="*"
              element={<Navigate to="/admin/subhDhanLaabh/cardInfo" replace />}
            />
          </Routes>
        </div>
      </Card.Body>
    </Card>
  );
};
