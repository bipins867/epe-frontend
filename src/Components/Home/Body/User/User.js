import { Navigate, Route, Routes } from "react-router-dom";
//import { useDispatch } from "react-redux"; // Import useSelector and useDispatch
//import { useEffect } from "react";
import { Auth } from "./Auth/Auth";
import { Dashboard } from "./Dashboard/Dashboard";
//import { setUserAuthToken, userLogin } from "../../../../Store/User/auth";

export const User = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // Check if the user token exists in localStorage
  //   const userToken = localStorage.getItem("userToken");

  //   if (userToken) {
  //     // Update Redux state if token exists
  //     dispatch(userLogin()); // Set isLoggedIn to true
  //     dispatch(setUserAuthToken(userToken)); // Update the token in Redux
  //   }
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="auth/*" element={<Auth />} />
      <Route path="/*" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
