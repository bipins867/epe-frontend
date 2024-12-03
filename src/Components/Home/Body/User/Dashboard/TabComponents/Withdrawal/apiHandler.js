import { apiRequest, handleErrors } from "../../../../../../../Utils/apiHandler";


  export const getWithdralInfoHandler = async (setIsLoading, showAlert) => {
    //above authentication will be here --
  
  
    const token = localStorage.getItem('userToken')
    const url = "/user/piggyBox/requestWithdrawal/withdrawalInfo";
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
  


  export const addWithdrawalRequestHandler=async(amount,userRemark,setIsLoading,showAlert)=>{

    const token = localStorage.getItem('userToken')
    const url = "/user/piggyBox/requestWithdrawal/addWithdrawalRequest";
    const obj = {amount,userRemark};
  
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
  }


  export const cancelWithdrawalRequestHandler=async(setIsLoading,showAlert)=>{

    const token = localStorage.getItem('userToken')
    const url = "/user/piggyBox/requestWithdrawal/cancelWithdrawalRequest";
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
  }