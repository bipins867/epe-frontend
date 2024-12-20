import { Navigate, Route, Routes } from "react-router-dom";
import { MaintenancePage } from "./Maintenence/Maintenence";
import { TransactionPage } from "./Transaction/Transaction";
import { PaymentSuccessPage } from "./PaymentSuccess/PaymentSuccess";



export const PPLGamingPage = () => {
  return (
    <Routes>
      <Route path="" element={<MaintenancePage />} />
      <Route path="transaction/:transactionId" element={<TransactionPage />} />
      <Route path="paymentStatus/:transactionId" element={<PaymentSuccessPage/>}/>
      <Route path="*" element={<Navigate to="" replace />} />
    </Routes>
  );
};
