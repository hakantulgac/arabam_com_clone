import React from 'react'
import { newsComponents } from '../../data/data-provider'

const setMaxChar = (string, count) => {
    let result = "";
    for (let i=0; i<string.length; i++) {
        if(i===count){
            return result + "...";
        }
        result += string[i];
    }
    return result;
}

const News = () => {
    return (
        <section className="news">
            {newsComponents.map((item, index) => (
                <div key={index} className="news-component">
                    <div className="news-title text-nowrap">
                        <p>{item.title}</p>
                        <div className="solid-line"></div>
                    </div>
                    <div 
                        className="news-image-content"
                        style={{ backgroundImage:`url(${require("../../image/"+item.header.background_image)})`}}
                    >
                        <div className="image-description">
                            <p>{item.header.header_title}</p>
                            <p>{item.header.header_text}</p>
                        </div>
                    </div>
                    <div className="news-items">
                        {item.items.map((i, key) => (
                            <div key={key} className="news-item">
                                <div className="item-image-content">
                                    <img src={require("../../image/"+i.item_image)} alt="" />
                                </div>
                                <div className="item-description">
                                    <p>{setMaxChar(i.item_title, 45)}</p>
                                    <p>{setMaxChar(i.item_text, 80)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="news-footer">
                        {item.footer}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default News