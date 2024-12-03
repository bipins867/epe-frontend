import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./Dashboard/Dashboard";
import { AddFundsPage } from "./AddFunds/AddFunds";
import { PageComponent } from "../../../../../../Utils/Utils";
import { VerifyTransactionPage } from "./VerifyTransaction/VerifyTransaction";

export const PiggyBoxPage = () => {
  return (
    <>
      <PageComponent title={"Piggy Box"} />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="addFunds" element={<AddFundsPage />} />
        <Route
          path="verifyTransaction/:transactionId"
          element={<VerifyTransactionPage />}
        />
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </>
  );
};
