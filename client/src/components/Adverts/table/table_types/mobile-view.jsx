import React from 'react'
import { createImageUrl, formattedPrice } from '../../../../service/useful-functions'

const MobileView = ({ vehicleData }) => {
    return (
        <div className='mobile-view-container'>
            {vehicleData.map((item, index) => (
                <div key={index} className='mobile-view-item'>
                    <div className='mobile-view-img-container'>
                        <img className='w-100' src={createImageUrl(item.name)} alt="" />
                    </div>
                    <div className='mobile-view-desc-container'>
                        <div className='mobile-view-desc-title'>
                            <div className='mobile-view-desc-city'>{item.city}</div>
                            <div className='mobile-view-desc-distance'>{formattedPrice(item.distance)} km</div>
                        </div>
                        <p className='mobile-view-desc-name'>{item.name}</p>
                        <p className='mobile-view-desc-price'>{formattedPrice(item.price)} TL</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MobileView