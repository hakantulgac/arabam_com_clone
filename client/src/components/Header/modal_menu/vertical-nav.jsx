import { List } from 'antd'
import React from 'react'
import { headerDropItems } from '../../../data/data-provider'

const VerticalNav = () => {
    return (
        <div>
            <div className="accordion" id="accordionExample">
                {headerDropItems.map((item, index) => (
                    <div key={index} className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+index} aria-expanded="false" aria-controls={"collapse"+index}>
                                {item.itemTitle}
                            </button>
                        </h2>
                        <div id={"collapse"+index} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body p-0">
                                <List>
                                    {item.dropItems.map((item, index)=>(
                                        <List.Item key={index} className='bg-light px-4'>
                                            {item}
                                        </List.Item>
                                    ))}
                                </List>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default VerticalNav