import React from 'react'
import { createImageUrl, formattedPrice } from '../../service/useful-functions';

const VehiclesGrid = ({ vehicleData }) => {
    return (
        <>
        <div className="showcase-vehicles">
            {vehicleData.filter((i, index) => index < 24).map((item, index) => (
                <div key={index} className="showcase-vehicle">
                    <div className="vehicle-image-content">
                        <img src={createImageUrl(item.name)} alt="" />
                    </div>
                    <div className="vehicle-title">
                        <div className="vehicle-city">
                            {item.city}
                        </div>
                        <div className="vehicle-year">
                            {item.productionYear}
                        </div>
                    </div>
                    <div className="vehicle-desc" style={{ height: "48px" }}>{item.name}</div>
                    <div className="vehicle-price">{formattedPrice(item.price)} TL</div>
                </div>
            ))}
        </div>
        </>
    )
}

export default VehiclesGrid