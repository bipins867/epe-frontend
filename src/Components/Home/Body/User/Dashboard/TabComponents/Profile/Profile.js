import "./Profile.css";
import { PageComponent } from "../../../../../../Utils/Utils";
import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./Dashboard/Dashboard";
import { CloseAccountPage } from "./CloseAccount/CloseAccount";


export const ProfilePage = () => {
  return (
    <>
      <PageComponent title={"User Profile"} />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="closeAccount" element={<CloseAccountPage/>}/>
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </>
  );
};
