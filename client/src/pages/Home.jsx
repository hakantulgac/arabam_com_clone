import React, { useContext, useState } from 'react'
import { highlightItems, mainMenuItems, sideMenuItems } from '../data/data-provider';
import { VehicleContext } from '../context/vehicle-context';
import VehiclesGrid from '../components/Home/Vehicles-grid';
import SideMenu from '../components/Home/side_menu/side-menu';
import MenuItems from '../components/Home/side_menu/menu-items';
import Cooperation from '../components/Home/Cooperation';
import News from '../components/Home/News';

const Home = () => {
    const [showMenuUnderText, setShowMenuUnderText] = useState({ id: null, active: false });
    const [showHighlightUnderText, setShowHighlightUnderText] = useState({ id: null, active: false });

    const { vehicleData } = useContext(VehicleContext);

    return (
        <div>
            <main>
                <section className="main-content">
                    <div className="side-menu">
                        <div className="side-menu-up">
                            <p>
                                <span id="last-24-hours">Son 24 Saat</span> /{" "}
                                <span id="last-24-hours">48 Saat</span>
                            </p>
                            <p id="urgent">Acil İlanlar</p>
                            <p id="falling-price">Fiyatı Düşenler</p>
                        </div>
                        <div className="side-menu-down">
                            <SideMenu sideMenuItems={sideMenuItems}/>
                            <MenuItems sideMenuItems={sideMenuItems} mobile={false}/>
                        </div>
                    </div>
                    <div className="main-menu">
                        <div className="main-image-area">
                            <img src={require("../image/home-page-main-image.png")} alt="" />
                        </div>
                        <div className="main-menu-contents">
                            <ul>
                                {
                                    mainMenuItems.map((item, index) => (
                                        <li
                                            onMouseOver={() => setShowMenuUnderText({ id: index, active: true })}
                                            onMouseOut={() => setShowMenuUnderText({ id: index, active: false })}
                                            key={index}
                                        >
                                            <img src={require("../image/" + item.img)} alt="" />
                                            <div>
                                                <b>{item.title}</b>
                                                <p>
                                                    {item.text}
                                                    <span>{item.point}</span>
                                                </p>
                                            </div>
                                            {
                                                showMenuUnderText.active && showMenuUnderText.id === index &&
                                                <p className='mt-1 fw-medium'>
                                                    <a href="./" className={'text-black link-underline-' + item.textColor}>
                                                        {item.underLineText}
                                                    </a>
                                                </p>
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </section>
                <section className='expertise-image'>
                    <img
                        src={require("../image/expertise-home-location-bireysel.png")}
                        alt={""}
                    />
                </section>
                <section className="highlights">
                    <h1 className='fw-bold my-3'>Öne Çıkan Satıcılar</h1>
                    <div className="highlights-contents">
                        <ul>
                            {
                                highlightItems.map((item, index) => (
                                    <li
                                        onMouseOver={() => setShowHighlightUnderText({ id: index, active: true })}
                                        onMouseOut={() => setShowHighlightUnderText({ id: index, active: false })}
                                        key={index}
                                    >
                                        <div className="highlight-image">
                                            <img src={require("../image/" + item.img)} alt="" />
                                        </div>
                                        <div className="highlight-title">
                                            {item.title}
                                            {
                                                showHighlightUnderText.active && showHighlightUnderText.id === index &&
                                                <p style={{ fontSize: "12px" }} className='mt-1 fw-medium'>
                                                    <a href="./" className='text-dark link-underline-warning'>
                                                        Tüm İlanlar
                                                    </a>
                                                </p>
                                            }
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </section>
                <section className="showcase">
                    <div className="showcase-title">
                        <h1 className='fw-bold'>Vitrin</h1>
                    </div>
                    <div className="showcase-rest-view">Tüm Vitrini Gör</div>
                    {vehicleData.length === 0 ?
                        <div className="text-center my-">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        :
                        <VehiclesGrid vehicleData={vehicleData} />
                    }
                    <h1 className="advice-title fw-bold">Sizin İçin Önerilenler</h1>
                    {vehicleData.length === 0 ?
                        <div className="text-center my-5">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        :
                        <VehiclesGrid vehicleData={vehicleData} />
                    }
                </section>
                <Cooperation/>
                <News/>
            </main>
        </div>
    )
}

export default Home;