import React, { createContext, useEffect, useState } from "react";
import { getRequest } from "../service/data-service";

const VehicleContext = createContext();

const VehicleContextProvider = ({ children }) => {
    const [vehicleData, setVehicleData] = useState([]);
    const [filterType, setFilterType] = useState(0);

    useEffect(() => {
        getRequest("/data")
            .then(res => {
                if(res.vehicleData){
                    setVehicleData(res.vehicleData)
                }
            })
    }, [])

    return (
        <VehicleContext.Provider value={{vehicleData, setVehicleData, filterType, setFilterType}}>
            {children}
        </VehicleContext.Provider>
    )
}

export { VehicleContext, VehicleContextProvider }