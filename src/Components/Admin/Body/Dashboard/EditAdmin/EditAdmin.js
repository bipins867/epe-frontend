import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./EditAdmin.css";

import {ViewPage} from './View/View';
import { AdminInfoPage } from "./AdminInfo/AdminInfo";
import { ActivityPage } from "./Activity/Activity";

export const EditAdminPage = () => {
  const [activeTab, setActiveTab] = useState("search");

  

  return (
    <div className="user-activity-container">
      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab-button ${activeTab === "search" ? "active" : ""}`}
          onClick={() => setActiveTab("search")}
        >
          Admin Info
        </button>
        <button
          className={`tab-button ${activeTab === "recent" ? "active" : ""}`}
          onClick={() => setActiveTab("recent")}
        >
          Recent All Admins Activity
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Tab: Search User */}
        {activeTab === "search" && 
        
        <Routes>
            <Route path="/" element={<AdminInfoPage />} />
            <Route path="view/:customerId" element={<ViewPage />} />
            <Route
              path="*"
              element={<Navigate to="/admin/userActivity/" replace />}
            />
          </Routes>

        }

        {/* Tab: Recent Activity */}
        {activeTab === "recent" && <ActivityPage />}
      </div>
    </div>
  );
};
