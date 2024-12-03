import { apiRequest, handleErrors } from "../../../../../../../../Utils/apiHandler";

export const addFundsHandler = async (amount, setIsLoading, showAlert) => {
  const obj = { amount };
  const url = "/user/piggyBox/addFunds";
  const token = localStorage.getItem("userToken");

  setIsLoading(true);
  try {
    const result = await apiRequest(url, obj, token, "post");
    const data = result.data;

    return data;
  } catch (e) {
    handleErrors(e, showAlert);
  } finally {
    setIsLoading(false);
  }
};
