import React, { createContext, useEffect, useState } from "react";
import { postRequest } from "../service/data-service";
import { createReqBody } from "../service/useful-functions";

const VehicleContext = createContext();

const VehicleContextProvider = ({ children }) => {
    const [vehicleData, setVehicleData] = useState([]);
    const [filterType, setFilterType] = useState(0);
    const [vehicleReqBody, setVehicleReqBody] = useState({});

    const _postRequest = (url, body) => {
        postRequest(url, body)
            .then(res => {
                if(res){
                    setVehicleData(res)
                }
            })
    }

    useEffect(() => {

        if(Object.keys(vehicleReqBody).length !== 0){
            const body = createReqBody(vehicleReqBody);
            _postRequest("/data", body);
        }else{
            _postRequest("/data", vehicleReqBody);
        }

    }, [vehicleReqBody])

    return (
        <VehicleContext.Provider value={{vehicleData, setVehicleData, filterType, setFilterType, vehicleReqBody, setVehicleReqBody}}>
            {children}
        </VehicleContext.Provider>
    )
}

export { VehicleContext, VehicleContextProvider }