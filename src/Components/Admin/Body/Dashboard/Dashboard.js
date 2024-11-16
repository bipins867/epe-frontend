import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { Announcement } from "./Announcement/Announcement";
import { Customers } from "./Customers/Customers";
import { PiggyBox } from "./PiggyBox/PiggyBox";
import { AccountClouser } from "./AccountClouser/AccountClouser";
import { Withdrawal } from "./Withdrawal/Withdrawal";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { Referral } from "./Referral/Referral";
import { Kyc } from "./Kyc/Kyc";
import { CustomerSupport } from "./CustomerSupport/CustomerSupport";
import { Loan } from "./Loan/Loan";
import { ContactUs } from "./ContactUs/ContactUs";
import { UserActivity } from "./UserActivity/UserActivity";
import { EditAdmin } from "./EditAdmin/EditAdmin";

export const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="announcement" element={<Announcement />} />
        <Route path="customers" element={<Customers />} />
        <Route path="piggyBox" element={<PiggyBox />} />
        <Route path="accountClouser" element={<AccountClouser />} />
        <Route path="withdrawal" element={<Withdrawal />} />
        <Route path="transactionHistory" element={<TransactionHistory />} />
        <Route path="referral" element={<Referral />} />
        <Route path="kyc" element={<Kyc />} />
        <Route path="customerSupport" element={<CustomerSupport />} />
        <Route path="loan" element={<Loan />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="userActivity" element={<UserActivity />} />
        <Route path="editAdmin" element={<EditAdmin />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
