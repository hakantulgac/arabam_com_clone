import React from 'react'
import { useNavigate } from 'react-router-dom';

const MenuItems = ({sideMenuItems, mobile}) => {
    const navigate = useNavigate();
    return (
        <ul className={mobile ? "" : "no-place-for-mobile"}>
            {sideMenuItems.map((item, index) => (
                <li key={index} onClick={() => navigate("/tüm-ilanlar")}>
                    {item.title} <span className="vehicle-count"> {item.count} </span>
                </li>
            ))}
        </ul>
    )
}

export default MenuItems