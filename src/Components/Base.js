// import { Navigate, Route, Routes } from "react-router-dom";
// import { Admin } from "./Admin/Admin";
// import { Home } from "./Home/Home";

import { PPLGamingPage } from "./PPLGaming/PPLGaming";

export const Base = () => {
  return (
    // <Routes>
    //   <Route path="/admin/*" element={<Admin />} />
    //   <Route path="/*" element={<Home />} />
    //   <Route path="*" element={<Navigate to="/" replace />} />
    // </Routes>
    <PPLGamingPage/>
  );
};
