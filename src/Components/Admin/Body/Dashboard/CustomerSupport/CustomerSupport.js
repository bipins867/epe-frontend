import React, { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { SearchPage } from "./Search/Search"; // Assuming SearchPage is used for each case
import { ViewPage } from "./View/View"; // Assuming ViewPage is used to view details for each customer
import "./CustomerSupport.css"; // Your existing CSS file

export const CustomerSupportPage = () => {
  const [activeTab, setActiveTab] = useState("new"); // Manage active tab state (default "new")
  const navigate = useNavigate();

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h5 className="mb-4">Customer Support</h5>
        {/* Tab Navigation */}
        <div className="tab-navigation">
          <div
            className={`tab-item ${activeTab === "new" ? "active" : ""}`}
            onClick={() => {
              navigate("/admin/customerSupport/new"); // Navigate to New tab
              setActiveTab("new");
            }}
          >
            New Requests
          </div>
          <div
            className={`tab-item ${activeTab === "pending" ? "active" : ""}`}
            onClick={() => {
              navigate("/admin/customerSupport/pending"); // Navigate to Pending tab
              setActiveTab("pending");
            }}
          >
            Pending Requests
          </div>
          <div
            className={`tab-item ${activeTab === "closed" ? "active" : ""}`}
            onClick={() => {
              navigate("/admin/customerSupport/closed"); // Navigate to Closed tab
              setActiveTab("closed");
            }}
          >
            Closed Requests
          </div>
          <div
            className={`tab-item ${activeTab === "transferred" ? "active" : ""}`}
            onClick={() => {
              navigate("/admin/customerSupport/transferred"); // Navigate to Transferred tab
              setActiveTab("transferred");
            }}
          >
            Transferred Requests
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "new" && (
            <Routes>
              <Route path="new" element={<SearchPage />} /> {/* New Requests Page */}
              <Route path="view/:customerId" element={<ViewPage />} />
              <Route
                path="*"
                element={<Navigate to="/admin/customerSupport/new" replace />}
              />
            </Routes>
          )}
          {activeTab === "pending" && (
            <Routes>
              <Route path="pending" element={<SearchPage />} /> {/* Pending Requests */}
              <Route path="view/:customerId" element={<ViewPage />} />
              <Route
                path="*"
                element={<Navigate to="/admin/customerSupport/pending" replace />}
              />
            </Routes>
          )}
          {activeTab === "closed" && (
            <Routes>
              <Route path="closed" element={<SearchPage />} /> {/* Closed Requests Page */}
              <Route path="view/:customerId" element={<ViewPage />} />
              <Route
                path="*"
                element={<Navigate to="/admin/customerSupport/closed" replace />}
              />
            </Routes>
          )}
          {activeTab === "transferred" && (
            <Routes>
              <Route path="transferred" element={<SearchPage />} /> {/* Transferred Requests Page */}
              <Route path="view/:customerId" element={<ViewPage />} />
              <Route
                path="*"
                element={<Navigate to="/admin/customerSupport/transferred" replace />}
              />
            </Routes>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
