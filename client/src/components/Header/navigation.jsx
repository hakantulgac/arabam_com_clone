import React from 'react'

const Navigation = ({ headerDropItems, dropVisible, setDropVisible }) => {
    return (
        <>
            <ul>
                {headerDropItems.map((item, index) => (
                    <li
                        key={index}
                        onMouseOver={() => setDropVisible({ navBar: { id: index, status: true }, actionAd: false })}
                        onMouseOut={() => setDropVisible({ navBar: { id: index, status: false }, actionAd: false })}
                    >
                        <p className='drop-menu-text'>{item.itemTitle} <span className="triangle">▼</span></p>
                        {dropVisible.navBar.status && dropVisible.navBar.id === index && (
                            <div className='drop-alt-menu'>
                                <ul>
                                    {item.dropItems.map((item, index) => (
                                        <li key={index}> {item} </li>
                                    ))}
                                </ul>
                            </div>)}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Navigation