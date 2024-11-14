import { Card } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { CompareContext } from '../../../context/compare-context'
import { createImageUrl } from '../../../service/useful-functions';

const PopoverContent = () => {
    const { compareItems, setCompareItems } = useContext(CompareContext);
    const [key, setKey] = useState(0);

    useEffect(() => {
        localStorage.setItem("compareItems",JSON.stringify(compareItems));
        setKey(k => k + 1);
    }, [compareItems])

    const compareItemDelete = (id) => {
        setCompareItems(compareItems.filter(i=>i.id!==id));
        localStorage.setItem("compareItems",JSON.stringify(compareItems.filter(i=>i.id!==id)));
    }

    const formattedPrice = (price) => {
        const stringPrice = price.toLocaleString();
        const result = stringPrice.replace(",", ".");
        return result.replace(",", ".");
    }

    return (
        <Card
            key={key}
            title={<p className='px-2'>İlanları Karşılaştır</p>}
            bordered={false}
            style={{ width: 370, borderTop: "3px solid red" }}
        >
            <div className='px-2'>
                {compareItems.length < 2 ?
                    <p
                        style={{ fontSize: "12px", color: "gray" }}
                    >
                        Karşılaştırmak için en az 2 ilan eklemelisiniz
                    </p>:
                    ""
                }
                {compareItems.map((item, index) => (
                    <Card key={index} className='mt-2 bg-light'>
                        <div className='row p-3 justify-content-start'>
                            <div className="col col-3">
                                <img
                                    src={createImageUrl(item.name)}
                                    style={{ height: "40px" }} className='rounded'
                                    alt="" />
                            </div>
                            <div className="col col-8 fw-bold">
                                <p
                                    style={{ fontSize: "12px" }}
                                >
                                    {item.name}
                                </p>
                                <p className='text-danger'>{formattedPrice(item.price)} TL</p>
                            </div>
                            <div 
                                className="col col-1 p-2 text-center compare-item-delete"
                                onClick={()=>compareItemDelete(item.id)}
                            >
                                <div className='bg-white'>
                                    <i className="bi bi-trash3"></i>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
                <hr />
                {compareItems.length === 3 ?
                    <Card className='mt-2 bg-secondary text-white'>
                        <div className='row py-2'>
                        <div className="col col-1"><i className="bi bi-exclamation-octagon px-2"></i></div>
                            <div className="col col-11">
                                Maksimum 3 ilan karşılaştırma sayısına ulaştınız.
                            </div>
                        </div>
                    </Card>:
                    ""
                }
                <div 
                    className={"btn btn-danger w-100 my-2" + (compareItems.length<2 ? " disabled":"")}
                >
                    Karşılaştır
                </div>
            </div>
        </Card>
    )
}

export default PopoverContent