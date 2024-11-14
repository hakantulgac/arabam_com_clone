import React from 'react'
import { createImageUrl, formattedPrice, customizeDate } from "../../../../service/useful-functions";

const DetailView = ({ vehicleData }) => {
  return (
    <div>
      {vehicleData.map((item, index) => (
        <div key={index} className='detail-view-item'>
          <div className='vehicle-image-container'>
            <img src={createImageUrl(item.name)} alt="" />
          </div>
          <div className='container p-0'>
            <div className='row'>
              <div className='col col-9 text-start'>
                <p className='text-body-secondary' style={{ fontSize: "14px" }}>İlan No: <span>27013672</span></p>
                <p className='fs-5 fw-bold mb-2'>{item.name}</p>
              </div>
              <div className='col col-3 text-end' style={{ fontSize: "13px" }}>
                <p className='fw-bold'>{item.city} / {item.district}</p>
                <p>
                  {`
                    ${customizeDate(item.advertDate).day} ${customizeDate(item.advertDate).month}
                    ${customizeDate(item.advertDate).year}
                  `}
                </p>
              </div>
            </div>
            <p className='text-start'>{item.description}</p>
            <div style={{ fontSize: "14px" }} className='text-start mt-3 text-body-secondary'>

              {item.properties.filter((i, index) => index % 3 === 0).map((i, index) => {
                const key = item.properties.indexOf(i);
                const eachItems = [item.properties[key], item.properties[key + 1], item.properties[key + 2]];
                return (
                  <div key={index} className="row mt-1">
                    {
                      eachItems.map((item, index) => (
                        <div key={index} className="col">
                          <i className="bi bi-caret-right text-danger"></i>&nbsp;
                          {item}
                        </div>
                      ))
                    }
                  </div>
                )
              })}

            </div>
            <p className='text-end text-danger fs-5 fw-bold mt-3'>{formattedPrice(item.price)} TL</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DetailView