import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard/Dashboard";
import { AdminLoginPage } from "./Auth/AdminLogin";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="auth" element={<AdminLoginPage />} />
        <Route path="/*" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
