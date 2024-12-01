import { apiRequest, handleErrors } from "../../../../../../Utils/apiHandler";

export const otpAuthHandler = async (
  userPhoneOtp,
  otpAuthenticationToken,
  otpType,
  url,
  setIsLoading,
  showAlert
) => {
  const obj = { otpAuthenticationToken, userPhoneOtp, otpType };

  setIsLoading(true);

  try {
    const response= await apiRequest(url, obj, "", "post");
    return response;
  } catch (e) {
    
    handleErrors(e, showAlert);
  } finally {
    setIsLoading(false);
  }
};

export const resentOtpHandler = async (
  otpAuthenticationToken,
  otpType,
  showAlert
) => {
  const obj = { otpAuthenticationToken, otpType };
  const url = "/user/auth/resendOtp";

  try {
    await apiRequest(url, obj, "", "post");
    showAlert('info','Info!','Otp Resent Successfully!')
  } catch (e) {
    handleErrors(e, showAlert);
  } finally {
  }
};
