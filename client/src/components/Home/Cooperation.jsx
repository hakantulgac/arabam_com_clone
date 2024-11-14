import React from 'react'
import { coopItems } from '../../data/data-provider'

const Cooperation = () => {
    return (
        <section className="cooperation">
            <h1 className="fw-bold">arabam.com ile, İşini Bir Adım İleri Taşı!</h1>
            <div className="coop-content">
                {coopItems.map((item, index) => (
                    <div key={index} className="coop-item">
                        <div className="coop-item-image-content">
                            <img src={require("../../image/"+item.image)} alt="" />
                        </div>
                        <div className="coop-item-description">
                            {item.text}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Cooperation