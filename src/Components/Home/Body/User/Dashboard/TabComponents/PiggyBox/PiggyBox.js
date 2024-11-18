import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./Dashboard/Dashboard";
import { AddFundsPage } from "./AddFunds/AddFunds";
import { PageComponent } from "../../../../../../Utils/Utils";

export const PiggyBoxPage = () => {
  return (
    <>
      <PageComponent title={"Piggy Box"} />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="addFunds" element={<AddFundsPage />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </>
  );
};
