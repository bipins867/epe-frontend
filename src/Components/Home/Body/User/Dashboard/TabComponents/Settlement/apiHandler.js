

import { apiRequest, handleErrors } from "../../../../../../../Utils/apiHandler";




export const getSettlementDetailsHandler = async (setIsLoading, showAlert) => {
    //above authentication will be here --
  
  
    const token = localStorage.getItem('userToken')
    const url = "/user/piggyBox/settlement/bankDetailsInfo";
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


  
export const updateSettlementDetailsHandler = async (formData,setIsLoading, showAlert) => {
    //above authentication will be here --
  
  
    const token = localStorage.getItem('userToken')
    const url = "/user/piggyBox/settlement/updateBankDetails";
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


  