import React, { useState } from "react";
import "./Kyc.css";
import { PendingPage } from "./Pending/Pending";
import { VerifiedPage } from "./Verified/Verified";
import { SearchPage } from "./Search/Search";

export const KycPage = () => {
  const [activeTab, setActiveTab] = useState("pending"); // Manage active tab state

  return (
    <div className="app-container">
      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab-button ${activeTab === "pending" ? "active" : ""}`}
          onClick={() => setActiveTab("pending")}
        >
          Pending
        </button>
        <button
          className={`tab-button ${activeTab === "verified" ? "active" : ""}`}
          onClick={() => setActiveTab("verified")}
        >
          Verified
        </button>
        <button
          className={`tab-button ${activeTab === "search" ? "active" : ""}`}
          onClick={() => setActiveTab("search")}
        >
          Search
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Tab: Pending */}
        {activeTab === "pending" && <PendingPage />}

        {/* Tab: Verified */}
        {activeTab === "verified" && <VerifiedPage />}

        {/* Tab: Search */}
        {activeTab === "search" && <SearchPage />}
      </div>
    </div>
  );
};
