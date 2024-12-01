import { apiRequest } from "../../../../../../Utils/apiHandler";


export const loginHandler=async (phone,password,setIsLoading)=>{

    //above authentication will be here --

    const obj={phone,password}
    const url='/user/auth/post/login'


    setIsLoading(true);

    try{
        const data=await apiRequest(url,obj,'','post');
        console.log(data);
    }
    catch(e){
        console.log(e);
    }
    finally{
        setIsLoading(false);
    }
}