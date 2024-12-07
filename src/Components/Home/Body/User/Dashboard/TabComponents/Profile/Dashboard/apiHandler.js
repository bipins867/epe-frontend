import {
  apiRequest,
  handleErrors,
} from "../../../../../../../../Utils/apiHandler";

export const getUserDetails = async (setIsLoading, showAlert) => {
  //above authentication will be here --

  const token = localStorage.getItem("userToken");
  const url = "/user/dashboard/getUserDetails";
  const obj = {};

  setIsLoading(true);

  try {
    const result = await apiRequest(url, obj, token, "get");
    const data = result.data;

    return data;
  } catch (e) {
    handleErrors(e, showAlert);
  } finally {
    setIsLoading(false);
  }
};

export const updateUserDetails = async (formData, setIsLoading, showAlert) => {
  //above authentication will be here --

  const token = localStorage.getItem("userToken");
  const url = "/user/dashboard/updateUserDetails";
  const obj = formData;

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
