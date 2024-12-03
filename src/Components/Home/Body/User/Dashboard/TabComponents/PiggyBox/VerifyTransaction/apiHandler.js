import { apiRequest, handleErrors } from "../../../../../../../../Utils/apiHandler";

export const verifyTransactionHandler = async (merchantTransactionId, setIsLoading, showAlert) => {
  const obj = { merchantTransactionId };
  const url = "/user/piggyBox/checkPaymentStatus";
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
