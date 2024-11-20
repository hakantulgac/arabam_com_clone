import React, { useContext } from 'react'
import { CompareContext } from '../../../../context/compare-context';
import { createImageUrl, customizeDate, formattedPrice } from '../../../../service/useful-functions';

const ListView = ({ vehicleData, sortMode, setSortMode, currentPage }) => {
    const { compareItems, setCompareItems, setPopoverOpen, setHiddenItems } = useContext(CompareContext);

    const compareClickHandler = (item) => {
        setPopoverOpen(true)
        if (compareItems.find(i => i.id === item.id)) {
            setCompareItems(compareItems.filter(i=>i.id!==item.id));
            localStorage.setItem("compareItems",JSON.stringify(compareItems.filter(i=>i.id!==item.id)));
        } else {
            if (compareItems.length < 3) {
                setCompareItems(
                    prev => [...prev, {
                        id: item.id, name: item.name, price: item.price
                    }]
                )
            }
        }
    }

    const hiddenClickHandler = (id) => {
        setHiddenItems(prev=>[...prev, id]);
    }

    return (
        <>
            <div className="table-container">
                <div className="container text-center table-props">
                    <div className="row align-items-start">
                        <div className="col col-4">
                            Model
                        </div>
                        <div className="col col-4">
                            İlan Başlığı
                        </div>
                        <div
                            onClick={() => setSortMode("productionYear")}
                            className="col col-1 sorter-items"
                            style={{
                                cursor: "pointer",
                                fontWeight: sortMode === "productionYear" ? "bold" : ""
                            }}
                        >
                            Yıl
                            <i className="bi bi-sort-down"></i>
                        </div>
                        <div
                            onClick={() => setSortMode("price")}
                            className="col col-1 sorter-items"
                            style={{
                                cursor: "pointer",
                                fontWeight: sortMode === "price" ? "bold" : ""
                            }}
                        >
                            Fiyat
                            <i className="bi bi-sort-down"></i>
                        </div>
                        <div
                            onClick={() => setSortMode("advertDate")}
                            className="col col-1 sorter-items"
                            style={{
                                cursor: "pointer",
                                fontWeight: sortMode === "advertDate" ? "bold" : ""
                            }}
                        >
                            Tarih
                            <i className="bi bi-sort-down"></i>
                        </div>
                        <div className="col col-1">
                            İl / İlçe
                        </div>
                    </div>
                </div>
                <img
                    src={require("../../../../image/cars_list_ad.png")}
                    alt=""
                    style={{ width: "100%" }}
                />
                <ul>
                    {vehicleData.filter((item, i)=>(currentPage-1)*50<=i && i<currentPage*50).map((item, index) => (
                        <li
                            key={index} 
                            className='text-center'
                        >
                            <div className="row align-items-start vehicle-item w-100">
                                <div className="col col-2">
                                    <img
                                        className='vehicle-list-image'
                                        src={createImageUrl(item.name)}
                                        alt=""
                                    />
                                </div>
                                <div className="col col-2">
                                    {item.name}
                                </div>
                                <div className="col col-4">
                                    {item.description}
                                </div>
                                <div className="col col-1">
                                    {item.productionYear}
                                </div>
                                <div className="col col-1 text-danger">
                                    <b>{formattedPrice(item.price)} TL</b>
                                    <div
                                        className='compare-item'
                                        onClick={() => compareClickHandler(item)}
                                    >
                                        <i className="bi bi-arrow-left-right"></i>
                                        {compareItems.find(i => i.id === item.id) ?
                                            "Çıkar"
                                            :
                                            "Karşılaştır"
                                        }
                                    </div>
                                </div>
                                <div className="col col-1">
                                    {`
                                        ${customizeDate(item.advertDate).day} ${customizeDate(item.advertDate).month}
                                        ${customizeDate(item.advertDate).year}
                                    `}
                                    <div className='compare-item'>
                                        <i className="bi bi-star"></i>
                                        Favori
                                    </div>
                                </div>
                                <div className="col col-1">
                                    {`
                                        ${item.city}
                                        ${item.district}
                                    `}
                                    <div 
                                        className='compare-item'
                                        onClick={()=>hiddenClickHandler(item.id)}
                                    >
                                        <i className="bi bi-eye"></i>
                                        Gizle
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                    }
                </ul>
            </div >
            <div
                className='incentive-bar'
                style={{ cursor: "pointer" }}
            >
                Siz de ilanınızın yukarıda yer almasını istiyorsanız tıklayın.
            </div>
        </>
    )
}

export default ListView