import { Navigate, Route, Routes } from "react-router-dom";
import { Auth } from "./Auth/Auth";
import { Dashboard } from "./Dashboard/Dashboard";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="auth" element={<Auth />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes>
    </>
  );
};
