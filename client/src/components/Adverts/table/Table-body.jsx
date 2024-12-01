import React, { useContext, useEffect, useState } from 'react'
import DetailView from './table_types/detail-view';
import ListView from './table_types/list-view';
import GridView from './table_types/grid-view';
import { VehicleContext } from '../../../context/vehicle-context';
import SideFilter from '../side_filter/side-filter';
import MobileView from './table_types/mobile-view';
import Pagination from './pagination';

const TableBody = ({ tableMode, sortMode, setSortMode }) => {
    const { vehicleData, filterType } = useContext(VehicleContext);
    const [ currentPage, setCurrentPage ] = useState(1);

    useEffect(() => {
        sortMode !== "" ?
            sortMode === "advertDate" ?
                vehicleData.sort((a, b) => getTs(b.advertDate) - getTs(a.advertDate))
                :
                vehicleData.sort((a, b) => b[sortMode] - a[sortMode])
            :
            vehicleData.sort((a, b) => a.id - b.id)
    }, [sortMode, vehicleData])

    const getTs = (dateString) => {
        const result = new Date(dateString);
        return result;
    }

    const dynamicTable = () => {
        if (tableMode === "list") {
            return (
                <ListView
                    vehicleData={vehicleData.filter(i => i.type === filterType)}
                    sortMode={sortMode}
                    setSortMode={setSortMode}
                    currentPage={currentPage}
                />
            )
        } else if (tableMode === "detail") {
            return (
                <DetailView
                    vehicleData={vehicleData.filter(i => i.type === filterType)}
                    currentPage={currentPage}
                />
            )
        } else if (tableMode === "grid") {
            return (
                <GridView
                    vehicleData={vehicleData.filter(i => i.type === filterType)}
                    currentPage={currentPage}
                />
            )
        } else { return "Error!!" }
    }

    return (
        <>
            <div className='just-mobile'>
                <MobileView
                    vehicleData={vehicleData.filter(i => i.type === filterType)}
                    currentPage={currentPage}
                />
            </div>
            <div className='no-place-for-mobile'>
                {vehicleData.length === 0 ?
                    <div className="text-center my-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    dynamicTable()
                }
            </div>
                <Pagination 
                    currentPage={currentPage} 
                    setCurrentPage={setCurrentPage} 
                    dataLength={vehicleData.filter(i => i.type === filterType).length}
                />
            <div className='just-mobile'>
                <SideFilter />
            </div>
        </>
    )
}

export default TableBody