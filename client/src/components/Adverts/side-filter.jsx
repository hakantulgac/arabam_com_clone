import React, { useContext } from 'react'
import { PlacesContext } from '../../context/places-context';

const SideFilter = () => {
    const { cities, districts, setSelectedCity } = useContext(PlacesContext);

    return (
        <div className='side-filter justify-content-center'>
            <div className='filter-title'>Fiyat</div>
            <div className='filter-title'>Adres</div>

            <select
                onChange={(e)=>setSelectedCity(e.target.value)} 
                className="form-select mx-auto my-2 w-75" 
                aria-label="Default select example"
            > 
                <option key={0} value={0}>Tüm İller</option>
                {cities.map((item,index)=>(
                    <option key={index+1} value={index+1}>{item.name}</option>
                ))}
            </select>

            <select className="form-select mx-auto my-2 w-75" aria-label="Default select example">
                {districts.length === 0 ?
                    <option key="0" value="">İl Seç</option>:
                    districts.map((item,index)=>(
                        <option key={index+1} value={item}>{item}</option>
                    ))
                }
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