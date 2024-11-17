import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import {useLocation } from "react-router-dom";
import {
  FaUser,
  FaPiggyBank,
  FaGift,
  FaHandshake,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaFileInvoice,
  FaAddressBook,
  FaIdCard,
  FaChartLine,
  FaCrown,
  FaToolbox,
} from "react-icons/fa";
import "./Dashboard.css";

// Import Components
import { PiggyBox } from "./TabComponents/PiggyBox/PiggyBox";
import { Kit } from "./TabComponents/Kit/Kit";
import { Referral } from "./TabComponents/Referral/Referral";
import { Loans } from "./TabComponents/Loans/Loans";
import { Withdrawal } from "./TabComponents/Withdrawal/Withdrawal";
import { TransferMoney } from "./TabComponents/TransferMoney/TransferMoney";
import { Settlement } from "./TabComponents/Settlement/Settlement";
import { SavedAddress } from "./TabComponents/SavedAddress/SavedAddress";
import { Kyc } from "./TabComponents/Kyc/Kyc";
import { UserActivity } from "./TabComponents/UserActivity/UserActivity";
import { SubhDhanLaabh } from "./TabComponents/ShubhDhanLaabh/ShubhDhanLaabh";
import { Profile } from "./TabComponents/Profile/Profile";
import { TabsView } from "./Tabs/Tabs";
import { TabContentView } from "./TabContent/TabContent";

export const Dashboard = () => {
  const location = useLocation();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  // List of tabs with their routes, names, and icons
  const tabs = [
    {
      key: "profile",
      name: "UserProfile",
      component: Profile,
      icon: <FaUser />,
    },
    { key: "kit", name: "Kit", component: Kit, icon: <FaToolbox /> },
    {
      key: "piggyBox",
      name: "PiggyBox",
      component: PiggyBox,
      icon: <FaPiggyBank />,
    },
    {
      key: "referral",
      name: "Referral",
      component: Referral,
      icon: <FaGift />,
    },
    { key: "loans", name: "Loans", component: Loans, icon: <FaHandshake /> },
    {
      key: "withdrawal",
      name: "Withdrawal",
      component: Withdrawal,
      icon: <FaMoneyBillWave />,
    },
    {
      key: "transferMoney",
      name: "Transfer Money",
      component: TransferMoney,
      icon: <FaExchangeAlt />,
    },
    {
      key: "settlement",
      name: "Settlement",
      component: Settlement,
      icon: <FaFileInvoice />,
    },
    {
      key: "savedAddress",
      name: "SavedAddress",
      component: SavedAddress,
      icon: <FaAddressBook />,
    },
    { key: "kyc", name: "KYC", component: Kyc, icon: <FaIdCard /> },
    {
      key: "userActivity",
      name: "UserActivity",
      component: UserActivity,
      icon: <FaChartLine />,
    },
    {
      key: "shubhDhanLaabh",
      name: "SubhDhanLaabh",
      component: SubhDhanLaabh,
      icon: <FaCrown />,
    },
  ];

  const activeTab = location.pathname.split("/")[2] || "piggyBox";

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dashboard-page">
      <div className="dashboard-background"></div>
      <Container fluid className="dashboard-container">
        <Row className="dashboard-row">
          <TabsView
            tabs={tabs}
            activeTab={activeTab}
            isMobileView={isMobileView}
          />

          <TabContentView tabs={tabs} isMobileView={isMobileView} />
        </Row>
      </Container>
    </div>
  );
};
