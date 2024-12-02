
import {
  apiRequest,
  handleErrors,
} from "../../../../../../../../Utils/apiHandler";

export const getPiggyBoxInfoHandler = async (setIsLoading, showAlert) => {
  //above authentication will be here --


  const token = localStorage.getItem('userToken')
  const url = "/user/piggyBox/getPiggyBoxInfo";
  const obj = {};

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

export const getTransactionHistoryHandler = async (
  fromDate,
  toDate,
  setIsLoading,
  showAlert
) => {
  
  const token = localStorage.getItem('userToken');
  const url = "/user/piggyBox/getTransactionHistory";
  const obj = { fromDate, toDate };

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
