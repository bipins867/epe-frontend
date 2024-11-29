import { Navigate, Route, Routes } from "react-router-dom";
import { SearchPage } from "./Search/Search";
import { PoolInfoPage } from "./PoolInfo/PoolInfo";

export const UserInfoPage = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route
        path="view/:customerId/*"
        element={<PoolInfoPage customerId={"CUST1"} />}
      />
      <Route
        path="*"
        element={<Navigate to="/admin/subhDhanLaabh/userInfo" replace />}
      />
    </Routes>
  );
};
