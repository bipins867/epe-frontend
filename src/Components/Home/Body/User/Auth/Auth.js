import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./Login/Login";
import { SignUpPage } from "./SignUp/SignUp";
import { OtpPage } from "./Otp/Otp";
import { ForgotCustomerIdPage } from "./ForgotCustomerId/ForgotCustomerId";
import { ResetPasswordPage } from "./ResetPassword/ResetPassword";
import { ActivateAccountPage } from "./ActivateAccount/ActivateAccount";

export const Auth = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="signUp" element={<SignUpPage />} />
        <Route path="otp" element={<OtpPage />} />
        <Route path="forgotCustomerId" element={<ForgotCustomerIdPage />} />
        <Route path="resetPassword" element={<ResetPasswordPage />} />
        <Route path="activateAccount" element={<ActivateAccountPage />} />
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes>
    </>
  );
};
