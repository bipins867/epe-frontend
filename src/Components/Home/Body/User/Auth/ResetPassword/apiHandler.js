import { apiRequest, handleErrors } from "../../../../../../Utils/apiHandler";

export const resetPasswordHandler = async (
    candidateId,
  phone,
  password,
  setIsLoading,
  showAlert
) => {
  //above authentication will be here --
const otpType='resetPassword';
  const obj = { phone,candidateId, password,otpType };
  const url = "/user/auth/changeUserPassword";

  setIsLoading(true);

  try {
    const result = await apiRequest(url, obj, "", "post");
    const data=result.data;
    
    return { otpToken: data.otpAuthenticationToken, url,otpType };
  } catch (e) {
    handleErrors(e, showAlert);
  } finally {
    setIsLoading(false);
  }
};
