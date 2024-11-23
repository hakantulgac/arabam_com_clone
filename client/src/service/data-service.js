import { httpGet } from "./http-client";

const getRequest = async (url) => {
    const response = await httpGet(url);
    
    if(response){
        return response;
    }else{
        return [];
    }
}

export {getRequest};