import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./Dashboard/Dashboard";
import { UserCardPage } from "./UserCard/UserCard";

export const PoolInfoPage = ({ customerId }) => {
  const baseUrl = `/admin/subhDhanLaabh/userInfo/view/${customerId}/`;
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage customerId={customerId} />} />
        <Route path="card/:type" element={<UserCardPage />} />
        <Route path="*" element={<Navigate to={baseUrl} replace />} />
      </Routes>
    </>
  );
};
