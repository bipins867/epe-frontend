import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./Dashboard/Dashboard";
import { TicketInfoPage } from "./TicketInfo/TicketInfo";
import { PageComponent } from "../../../../../../Utils/Utils";

export const SubhDhanLaabhPage = () => {
  return (
    <>
      <PageComponent title={"Shubh Dhan Laabh"} />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="ticket/:ticketName" element={<TicketInfoPage />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </>
  );
};
