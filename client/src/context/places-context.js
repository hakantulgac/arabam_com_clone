import React, { createContext, useEffect, useState } from "react";
import { getRequest } from "../service/data-service";

const PlacesContext = createContext();

const PlacesContextProvider = ({ children }) => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState();
    const [districts, setDistricts] = useState([]);

    useEffect(() => {
        getRequest("/city")
            .then(res => {
                setCities(res)
            })
    }, [])

    useEffect(()=> {
        if(selectedCity && selectedCity !== "0"){
            getRequest("/district/"+selectedCity)
                .then(res => {
                    setDistricts(res[0].districts)
                })
        }else{
            setDistricts([])
        }
    }, [selectedCity])

    return (
        <PlacesContext.Provider value={{cities, districts, setSelectedCity}}>
            {children}
        </PlacesContext.Provider>
    )
}

export { PlacesContext, PlacesContextProvider }