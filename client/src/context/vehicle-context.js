import React, { createContext, useEffect, useState } from "react";
import { getVehicleData } from "../service/data-service";

const VehicleContext = createContext();

const VehicleContextProvider = ({ children }) => {
    const [vehicleData, setVehicleData] = useState([]);
    const [filterType, setFilterType] = useState(0);

    useEffect(() => {
        getVehicleData("/data")
            .then(res => {
                setVehicleData(res)
            })
    }, [])

    return (
        <VehicleContext.Provider value={{vehicleData, setVehicleData, filterType, setFilterType}}>
            {children}
        </VehicleContext.Provider>
    )
}

export { VehicleContext, VehicleContextProvider }