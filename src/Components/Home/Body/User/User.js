import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector and useDispatch

import { Auth } from "./Auth/Auth";
import { Dashboard } from "./Dashboard/Dashboard";


export const User = () => {
  const isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn); // Get isLoggedIn from Redux store
 
  

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