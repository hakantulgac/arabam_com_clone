import React from 'react'

const SideFilter = () => {
    return (
        <div className='side-filter justify-content-center'>
            <div className='filter-title'>Fiyat</div>
            <div className='filter-title'>Adres</div>

            <select className="form-select mx-auto my-2 w-75" aria-label="Default select example">
                <option value="1">İl</option>
            </select>

            <select className="form-select mx-auto my-2 w-75" aria-label="Default select example">
                <option value="1">İlçe</option>
            </select>

            <div className='filter-title'>Yıl</div>
            <div className='filter-title'>İlan Sahibi</div>
            <div className='filter-title'>İlan Tarihi</div>
            <div className='filter-title'>Özel İlanlar</div>
            <div className='filter-title'>Bana Araç Öner</div>
            <div className='filter-title'>Anahtar Kelime</div>
            <div className='p-2'>
                <button className='btn btn-danger w-100'>Ara</button>
            </div>
        </div>
    )
}

export default SideFilter