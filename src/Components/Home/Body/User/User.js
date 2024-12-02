import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
import { useEffect } from "react";
import { Auth } from "./Auth/Auth";
import { Dashboard } from "./Dashboard/Dashboard";
import { setUserAuthToken, userLogin } from "../../../../Store/User/auth";


export const User = () => {
  const isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn); // Get isLoggedIn from Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the user token exists in localStorage
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
      // Update Redux state if token exists
      dispatch(userLogin()); // Set isLoggedIn to true
      dispatch(setUserAuthToken(userToken)); // Update the token in Redux
    }
  }, [dispatch]);

  return (
    <Routes>
      {/* If user is logged in and tries to access /auth, redirect to dashboard */}
      <Route
        path="auth/*"
        element={isLoggedIn ? <Navigate to="/user/" replace /> : <Auth />} // Redirect if logged in
      />
      {/* If not logged in and tries to access other routes, redirect to auth */}
      <Route
        path="/*"
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/user/auth" replace />}
      />
      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
