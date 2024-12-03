

import { apiRequest, handleErrors } from "../../../../../../../Utils/apiHandler";




export const getPiggyBoxDetailsHandler = async (setIsLoading, showAlert) => {
    //above authentication will be here --
  
  
    const token = localStorage.getItem('userToken')
    const url = "/user/piggyBox/transferMoney/getTransferInfo";
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
  

export const verifyCustomerHandler=async (candidateId,setIsLoading, showAlert) => {
    //above authentication will be here --
  
  
    const token = localStorage.getItem('userToken')
    const url = "/user/piggyBox/transferMoney/getTransferUserInfo";
    const obj = {candidateId};
  
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


export const transferMoneyHanlder=async (candidateId,amount,name,userRemark,setIsLoading, showAlert) => {
    //above authentication will be here --
  
  
    const token = localStorage.getItem('userToken')
    const url = "/user/piggyBox/transferMoney/transferMoney";
    const obj = {candidateId,amount,name,userRemark};
  
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

export const fetchTransactionHistoryHandler=async (setIsLoading, showAlert) => {
    //above authentication will be here --
  
  
    const token = localStorage.getItem('userToken')
    const url = "/user/piggyBox/transferMoney/getTopTransactionHistory";
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

