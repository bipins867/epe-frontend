import { apiRequest, handleErrors } from "../../../../../../../../Utils/apiHandler";




export const fetchTicketInfoHandler = async (ticketTitle,setIsLoading, showAlert) => {
    //above authentication will be here --
  
  
    const token = localStorage.getItem('userToken')
    const url = "/user/subhDhanLabh/getUserTicketReferral";
    const obj = {ticketTitle};
  
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


  
export const activateTicketHandler = async (ticketTitle,setIsLoading, showAlert) => {
    //above authentication will be here --
  
  
    const token = localStorage.getItem('userToken')
    const url = "/user/subhDhanLabh/activateTicketCard";
    const obj = {ticketTitle};
  
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


  