import { Popover } from 'antd'
import React, { useContext } from 'react'
import PopoverContent from './popover-content'
import { CompareContext } from '../../../context/compare-context';

const CompareVehicles = () => {
    const { popoverOpen, setPopoverOpen } = useContext(CompareContext);

    const openChangeHandler = (e) => {
        setPopoverOpen(e)
    }

    return (
        <Popover
            trigger="click" 
            placement="bottomRight" 
            content={<PopoverContent/>} 
            open={popoverOpen}
            onOpenChange={(e)=>openChangeHandler(e)}
        >
            <div>
                <i className="bi bi-arrow-left-right text-danger me-1"></i>
                İlanları Karşılaştır
            </div>
        </Popover>
    )
}

export default CompareVehicles