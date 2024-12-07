import {
  apiRequest,
  apiUploadRequest,
  handleErrors,
} from "../../../../../../../Utils/apiHandler";



export const getKycDetailsHandler = async (setIsLoading, showAlert) => {
  //above authentication will be here --

  const token = localStorage.getItem("userToken");
  const url = "/user/kycAndPan/kycInfo";
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

export const getPanDetailsHandler = async (setIsLoading, showAlert) => {
  //above authentication will be here --

  const token = localStorage.getItem("userToken");
  const url = "/user/kycAndPan/panInfo";
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

export const updateKycDetailsHandler = async (
  formData,
  setIsLoading,
  showAlert
) => {
  //above authentication will be here --

  const token = localStorage.getItem("userToken");
  const url = "/user/kycAndPan/kycSubmit";
  const obj = formData;

  setIsLoading(true);

  try {
    const result = await apiUploadRequest(url, obj, token);
    const data = result.data;

    return data;
  } catch (e) {
    handleErrors(e, showAlert);
  } finally {
    setIsLoading(false);
  }
};

export const updatePanDetailsHandler = async (
  formData,
  setIsLoading,
  showAlert
) => {
  //above authentication will be here --

  const token = localStorage.getItem("userToken");
  const url = "/user/kycAndPan/panSubmit";
  const obj = formData;

  setIsLoading(true);

  try {
    const result = await apiUploadRequest(url, obj, token);
    const data = result.data;

    return data;
  } catch (e) {
    handleErrors(e, showAlert);
  } finally {
    setIsLoading(false);
  }
};

export const acceptKycAggrementHandler = async (setIsLoading, showAlert) => {
  //above authentication will be here --

  const token = localStorage.getItem("userToken");
  const url = "/user/kycAndPan/acceptUserAgreement";
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
