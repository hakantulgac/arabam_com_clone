import React from 'react'
import { createImageUrl, formattedPrice } from '../../../../service/useful-functions'

const GridView = ({ vehicleData, currentPage }) => {
  return (
    <div>
      <div className="row">
        {vehicleData.filter((item, i)=>(currentPage-1)*50<=i && i<currentPage*50).map((item, index) => (
          <div key={index} className="col col-4 py-3">
            <div className='grid-view-item'>
              <div className='grid-view-img-container'>
                <img src={createImageUrl(item.name)} alt="" />
              </div>
              <div className='row mt-1'>
                <div className='col text-start fw-bold'>{item.city}</div>
                <div className='col text-end'>{formattedPrice(item.distance)} km</div>
              </div>
              <p
                className='text-start fs-4 overflow-x-hidden text-nowrap text-truncate'
              >{item.name}</p>
              <p className='text-end fs-5 fw-bold text-danger'>{formattedPrice(item.price)} TL</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GridView