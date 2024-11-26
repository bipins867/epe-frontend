import React, { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./AccountClouser.css";
import { SearchPage } from "./Search/Search";
import { ViewPage } from "./View/View";
import { ClosedPage } from "./Closed/Closed";


export const AccountClouserPage = () => {
  const [activeTab, setActiveTab] = useState("page1"); // Manage active tab state
  const navigate = useNavigate();
  return (
    <div className="app-container">
      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab-button ${activeTab === "page1" ? "active" : ""}`}
          onClick={() => {
            navigate("/admin/accountClouser/"); // Navigate to page1
            setActiveTab("page1");
          }}
        >
          Pending Account Clouser Requests
        </button>
        <button
          className={`tab-button ${activeTab === "page2" ? "active" : ""}`}
          onClick={() => {
            navigate("/admin/accountClouser/");
            setActiveTab("page2");
          }}
        >
          Closed Account 
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "page1" && (
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="view/:customerId" element={<ViewPage />} />
            <Route
              path="*"
              element={<Navigate to="/admin/accountClouser/" replace />}
            />
          </Routes>
        )}
        {activeTab === "page2" && (
          <Routes>
            <Route path="/" element={<ClosedPage />} />
            <Route path="view/:customerId" element={<ViewPage />} />
            <Route
              path="*"
              element={<Navigate to="/admin/accountClouser/" replace />}
            />
          </Routes>
        )}
      </div>
    </div>
  );
};
