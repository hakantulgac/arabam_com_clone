import { Input, InputNumber, Popover, Radio, Space } from 'antd'
import React from 'react'

const FilterPopover = ({ text, content, reqBodyTemp, setReqBodyTemp }) => {

    const changeHandler = (key ,e) => {
        setReqBodyTemp({...reqBodyTemp, [key]:e})
    }

    const popoverContent = {
        price: [
            <div>
                <InputNumber onChange={(e)=>changeHandler("minTl", e)} placeholder='Min TL' />
                <InputNumber onChange={(e)=>changeHandler("maxTl", e)} placeholder='Max TL' />
            </div>, 
            reqBodyTemp.minTl && reqBodyTemp.maxTl ? `${reqBodyTemp.minTl}-${reqBodyTemp.maxTl}` : ''
        ],
        year: [
            <div>
                <InputNumber onChange={(e)=>changeHandler("minYear", e)} placeholder='Min' />
                <InputNumber onChange={(e)=>changeHandler("maxYear", e)} placeholder='Max' />
            </div>, 
            reqBodyTemp.minYear && reqBodyTemp.maxYear ? `${reqBodyTemp.minYear}-${reqBodyTemp.maxYear}` : ''
        ],
        advertDate: [
            <div className='p-2'>
                <Radio.Group onChange={(e)=>changeHandler("day", e.target.value)}>
                    <Space direction="vertical">
                        <Radio value={1}>Son 1 Gün</Radio>
                        <Radio value={2}>Son 2 Gün</Radio>
                        <Radio value={3}>Son 3 Gün</Radio>
                        <Radio value={7}>Son 7 Gün</Radio>
                        <Radio value={30}>Son 30 Gün</Radio>
                    </Space>
                </Radio.Group>
            </div>,
            reqBodyTemp.day ? `${reqBodyTemp.day} Gün` : ''
        ],
        keyWord: [
            <div>
                <Input onChange={(e)=>changeHandler("keyWord", e.target.value)} placeholder='Kelime giriniz...' />
            </div>,
            reqBodyTemp.keyWord ? `${reqBodyTemp.keyWord}` : ''
        ]
    }

    return (
        <Popover trigger="click" placement="bottomLeft" content={popoverContent[content][0]}>
            <div 
                className='filter-title d-flex justify-content-between'
                style={{cursor: "pointer"}}
            >
                <p>{text}</p> <span style={{ fontSize: "9px", color: "#1677FF" }}>{popoverContent[content][1]}</span>
                <i className="bi bi-chevron-down"></i>
            </div>
        </Popover>
    )
}

export default FilterPopover