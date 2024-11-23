import React from 'react'
import MenuItems from './menu-items'
import { Button, Popover } from 'antd'

const SideMenu = ({ sideMenuItems }) => (
    <Popover 
        className='just-mobile mx-2'
        placement="bottomRight" trigger="click" 
        content={<MenuItems sideMenuItems={sideMenuItems} mobile={true}/>}
    >
        <Button><i className="bi bi-list"></i></Button>
    </Popover>
)

export default SideMenu