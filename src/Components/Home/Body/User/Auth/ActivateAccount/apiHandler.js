import { apiRequest, handleErrors } from "../../../../../../Utils/apiHandler";

export const activateAccountHandler = async (
  phone,
  setIsLoading,
  showAlert
) => {
  const otpType = "activateAccount";
  const obj = { phone, otpType };
  const url = "/user/auth/activateAccount";

  setIsLoading(true);

  try {
    const result = await apiRequest(url, obj, "", "post");
    const data = result.data;

    return { otpToken: data.otpAuthenticationToken, url, otpType };
  } catch (e) {
    handleErrors(e, showAlert);
  } finally {
    setIsLoading(false);
  }
};
