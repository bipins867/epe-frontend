
import React, { useState } from "react";
import "./View.css";
import { ProfilePage } from "./Profile/Profile";
import { ActivityPage } from "../Activity/Activity";


export const ViewPage = () => {
  const [activeSubTab, setActiveSubTab] = useState("profile");

  return (
    <div className="admin-profile-container">
      <h3 className="page-title">Admin Profile</h3>

      {/* Sub-tab Navigation */}
      <div className="sub-tab-navigation">
        <button
          className={`sub-tab-button ${
            activeSubTab === "profile" ? "active" : ""
          }`}
          onClick={() => setActiveSubTab("profile")}
        >
          Profile Info
        </button>
        <button
          className={`sub-tab-button ${
            activeSubTab === "activity" ? "active" : ""
          }`}
          onClick={() => setActiveSubTab("activity")}
        >
          Activity Info
        </button>
      </div>

      {/* Sub-tab Content */}
      <div className="sub-tab-content">
        {activeSubTab === "profile" && <ProfilePage />}
        {activeSubTab === "activity" && <ActivityPage />}
      </div>
    </div>
  );
};
