import { apiRequest, handleErrors } from "../../../../../../Utils/apiHandler";

export const signUpHandler = async (formData, setIsLoading, showAlert) => {
  const obj = { ...formData, otpType: "signUp" };
  const url = "/user/auth/signUp";

  setIsLoading(true);

  try {
    const result = await apiRequest(url, obj, "", "post");
    const data = result.data;

    return { otpToken: data.otpAuthenticationToken, url, otpType:obj.otpType };
  } catch (e) {
    handleErrors(e, showAlert);
  } finally {
    setIsLoading(false);
  }
};

export const verifyReferralHandler = async (
  referralID,
  setIsLoading,
  showAlert
) => {
  const obj = { referralId:referralID };
  const url = "/user/piggyBox/referral/post/userReferralInfo";

  try {
    const result = await apiRequest(url, obj, "", "post");
    const data = result.data;

    return data;
  } catch (e) {
    handleErrors(e, showAlert);
  } finally {
    setIsLoading(false);
  }
};
