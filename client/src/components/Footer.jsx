import React, { useState } from 'react'
import { footerBrands, footerContactLinks, footerLeftMenuItems, footerMenuItems } from '../data/data-provider'

const Footer = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState(0);
    const { application, social } = footerContactLinks;


    return (
        <div>
            <section className="contact-bar">
                <div className="application-links">
                    {
                        application.map((item, index) => (
                            <div key={index} className="application-link">
                                <i className={"bi fs-6 " + item.class}></i>
                                <div>
                                    <strong>
                                        {item.label}
                                    </strong>
                                    <p>indirebilirsiniz.</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="contact">
                    {
                        social.map((item, index) => (
                            <div key={index}>
                                <i className={"bi fs-5 "+item}></i>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="foot-menu">
                <div className="left-menu">
                    <strong>Kurumsal</strong>
                    {
                        footerLeftMenuItems.map((item, index) => (
                            <p key={index}> {item} </p>
                        ))
                    }
                </div>
                <div className="right-menu">
                    <div className="menu-titles">
                        {
                            footerMenuItems.map((item,index)=>(
                                <div 
                                    key={index} 
                                    className="menu-title"
                                    onClick={()=>setSelectedMenuItem(index)}
                                    style={{background: index === selectedMenuItem ? "white": "#F7F7F7"}}
                                >{item.title}</div>
                            ))
                        }
                    </div>
                    <div className="menu-table">
                        {
                            footerMenuItems.filter(item=> item.id === selectedMenuItem)[0].list.map((item, index) => (
                                <p className='overflow-x-hidden text-nowrap text-truncate' key={index}> {item} </p>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="copyright-bar">
                <div className="contact-number">
                    <p>Müşteri Hizmetleri</p>
                    <p>0 850 759 90 00</p>
                </div>
                <div className="copyright-title">
                    <div> © 2000-2024 arabam.com (Eğitim amaçlıdır)</div>
                    <img src={require("../image/footer-qr.jpg")} alt="" />
                </div>
            </section>
            <section className="footer">
                <div className="footer-content">
                    <div className="introduction">
                        arabam.com bir
                        <img src={require("../image/ilab_icon.png")} alt="" />
                        grup şirketidir.
                    </div>
                    <div className="brands">
                        {
                            footerBrands.map((item, index) => (
                                <p style={{cursor: "pointer"}} key={index}> {item} </p>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;