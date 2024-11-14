import { createContext, useEffect, useState } from "react";

const CompareContext = createContext();

const CompareContextProvider = ({children}) => {
    const [compareItems, setCompareItems] = useState([]);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [hiddenItems, setHiddenItems] = useState([]);
    
    const localData = localStorage.getItem("compareItems");

    useEffect(()=>{
        localData ?
            Array.isArray(JSON.parse(localData)) ?
                setCompareItems(JSON.parse(localData))
            :
                setCompareItems([])    
        :
            setCompareItems([])
    },[localData])

    return(
        <CompareContext.Provider value={{
            compareItems, 
            setCompareItems, 
            popoverOpen, 
            setPopoverOpen,
            hiddenItems, 
            setHiddenItems
        }}>
            {children}
        </CompareContext.Provider>
    )
}

export {CompareContext, CompareContextProvider}