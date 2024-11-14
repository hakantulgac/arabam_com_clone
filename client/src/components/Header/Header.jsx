import React, { useState } from 'react'
import { headerDropItems } from '../../data/data-provider';
import { useNavigate } from 'react-router-dom';
import Navigation from './navigation';
import ModalMenu from './modal_menu/modal-menu';
import ModalSearch from './modal_menu/modal-search';

const Header = () => {
    const [dropVisible, setDropVisible] = useState({ navBar: { id: null, status: false }, actionAd: false });
    const navigate = useNavigate();

    return (
        <div>
            <div className="page-top-ad">
                <img src={require("../../image/page-top-ad.png")} alt="" />
            </div>
            <nav className='no-place-for-mobile'>
                <Navigation headerDropItems={headerDropItems} dropVisible={dropVisible} setDropVisible={setDropVisible} />
            </nav>
            <div className="header-container">
                <div className='row'>
                    <div style={{ zIndex: 9999 }} className='header-modal-menu col my-auto'>
                        <ModalMenu />
                    </div>
                    <div className="logo-header col" onClick={() => navigate("/")}>
                        <img src={require("../../image/logo-header-icon.gif")} alt="" />
                    </div>
                </div>
                <div className="search-header">
                    <div className="search-bar no-place-for-mobile">
                        <input type="text" placeholder="Kelime, galeri adı veya ilan no ile ara" />
                    </div>
                    <div className="search-button no-place-for-mobile"></div>
                </div>
                <div className="actions-header no-place-for-mobile">
                    <div className="actions-user">
                        <span id="login">Giriş Yap</span> / <span id="register">Üye Ol</span>
                    </div>
                    <div
                        onMouseOver={() => setDropVisible({ navBar: { id: null, status: false }, actionAd: true })}
                        onMouseOut={() => setDropVisible({ navBar: { id: null, status: false }, actionAd: false })}
                    >
                        <div className="actions-ad">
                            Ücretsiz İlan Ver
                            <span className="triangle">&nbsp;&nbsp;▼</span>
                        </div>
                        {dropVisible.actionAd &&
                            <div className='actions-ad-drop-container'>
                                <div className='actions-ad-drop'>
                                    <div className='actions-ad-drop-left'>
                                        <img src={require("../../image/action-ad-left-img.png")} alt="" />
                                        <p href="">Ücretsiz İlan Ver</p>
                                    </div>
                                    <div className='actions-ad-drop-right'>
                                        <img src={require("../../image/action-ad-right-img.png")} alt="" />
                                        <p href="">Trink Sat</p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='just-mobile'>
                    <ModalSearch/>
                </div>
            </div>

        </div>
    )
}

export default Header