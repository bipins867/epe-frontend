

import { apiRequest, handleErrors } from "../../../../../../../Utils/apiHandler";




export const getUserActivityHandler = async (filters={},setIsLoading, showAlert) => {
    //above authentication will be here --
  
  
    const token = localStorage.getItem('userToken')
    const url = "/user/piggyBox/userActivity/getUserActivity";
    const obj = filters;
  
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
  

  