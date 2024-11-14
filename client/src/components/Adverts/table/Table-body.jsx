import React, { useContext, useEffect } from 'react'
import DetailView from './table_types/detail-view';
import ListView from './table_types/list-view';
import GridView from './table_types/grid-view';
import { VehicleContext } from '../../../context/vehicle-context';
import SideFilter from '../side-filter';
import MobileView from './table_types/mobile-view';

const TableBody = ({ tableMode, sortMode, setSortMode }) => {
    const { vehicleData, filterType } = useContext(VehicleContext);

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
                />
            )
        } else if (tableMode === "detail") {
            return (
                <DetailView
                    vehicleData={vehicleData.filter(i => i.type === filterType)}
                />
            )
        } else if (tableMode === "grid") {
            return (
                <GridView
                    vehicleData={vehicleData.filter(i => i.type === filterType)}
                />
            )
        } else { return "Error!!" }
    }

    return (
        <>
            <div className='just-mobile'>
                <MobileView
                    vehicleData={vehicleData.filter(i => i.type === filterType)}
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
            <div className="pagination-container">
                <p>
                    Toplam <b>50</b> sayfa içerisinde <b>1.</b> sayfadasınız.
                </p>
                <div>
                    <ul className="pagination-items">
                        <li>{"<"}</li>
                        <li>1</li>
                        <li>2</li>
                        <li>...</li>
                        <li>3</li>
                        <li>{">"}</li>
                    </ul>
                </div>
            </div>
            <div className='just-mobile'>
                <SideFilter />
            </div>
        </>
    )
}

export default TableBody