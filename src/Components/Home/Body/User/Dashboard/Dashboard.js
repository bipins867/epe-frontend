import { Navigate, Route, Routes } from "react-router-dom";
import { PiggyBox } from "./PiggyBox/PiggyBox";
import { Kit } from "./Kit/Kit";
import { Referral } from "./Referral/Referral";
import { Loans } from "./Loans/Loans";
import { Withdrawal } from "./Withdrawal/Withdrawal";
import { TransferMoney } from "./TransferMoney/TransferMoney";
import { Settlement } from "./Settlement/Settlement";
import { SavedAddress } from "./SavedAddress/SavedAddress";
import { Kyc } from "./Kyc/Kyc";
import { UserActivity } from "./UserActivity/UserActivity";
import { SubhDhanLaabh } from "./ShubhDhanLaabh/ShubhDhanLaabh";
import { Profile } from "./Profile/Profile";
export const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="kit" element={<Kit />} />
        <Route path="piggyBox" element={<PiggyBox />} />
        <Route path="referral" element={<Referral />} />
        <Route path="loans" element={<Loans />} />
        <Route path="Withdrawal" element={<Withdrawal />} />
        <Route path="transferMoney" element={<TransferMoney />} />
        <Route path="settlement" element={<Settlement />} />
        <Route path="savedAddress" element={<SavedAddress />} />
        <Route path="kyc" element={<Kyc />} />
        <Route path="userActivity" element={<UserActivity />} />
        <Route path="shubhDhanLaabh" element={<SubhDhanLaabh />} />
        <Route path="*" element={<Navigate to="piggyBox" replace />} />
      </Routes>
    </>
  );
};
