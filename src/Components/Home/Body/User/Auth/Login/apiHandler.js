import { apiRequest, handleErrors } from "../../../../../../Utils/apiHandler";

export const loginHandler = async (
  phone,
  password,
  setIsLoading,
  showAlert
) => {
  //above authentication will be here --
const otpType='login';
  const obj = { phone, password,otpType };
  const url = "/user/auth/login";

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