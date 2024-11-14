import { httpGet } from "./http-client";

const getVehicleData = async (url) => {
    const response = await httpGet(url);
    
    if(response && response.vehicleData){
        return response.vehicleData;
    }else{
        return [];
    }
}

export {getVehicleData};