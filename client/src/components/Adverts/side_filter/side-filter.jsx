import React, { useContext, useState } from 'react'
import { PlacesContext } from '../../../context/places-context';
import FilterPopover from './filter-popover';
import { VehicleContext } from '../../../context/vehicle-context';

const SideFilter = () => {
    const { cities, districts, setDistricts, setSelectedCity } = useContext(PlacesContext);
    const { vehicleReqBody, setVehicleReqBody } = useContext(VehicleContext);

    const [reqBodyTemp, setReqBodyTemp] = useState({});

    const filterItems = [
        { text: "Yıl", content: "year" },
        { text: "İlan Tarihi", content: "advertDate" },
        { text: "Anahtar Kelime", content: "keyWord" }
    ]

    const onChangeCity = (e) => {
        const city = e.target.value.split(",");
        setSelectedCity(city[0])
        setReqBodyTemp({ ...reqBodyTemp, city: city[1] })
    }

    const onChangeDistrict = (e) => {
        setReqBodyTemp({ ...reqBodyTemp, district: e.target.value })
    }

    const onClickSearch = () => {
        setVehicleReqBody(reqBodyTemp)
        setReqBodyTemp({})
        setDistricts([])
    }

    return (
        <div
            key={Object.keys(vehicleReqBody).length}
            className='side-filter justify-content-center'
        >
            <FilterPopover text="Fiyat" content="price" reqBodyTemp={reqBodyTemp} setReqBodyTemp={setReqBodyTemp} />

            <div className='filter-title border-bottom-0'>Adres</div>
            <div className='border-bottom'>
                <select
                    onChange={(e) => onChangeCity(e)}
                    className="form-select mx-auto my-2 w-75"
                    aria-label="Default select example"
                >
                    <option key={0} value={0}>Tüm İller</option>
                    {cities.map((item, index) => (
                        <option key={index + 1} value={[index + 1, item.name]}>{item.name}</option>
                    ))}
                </select>

                <select
                    onChange={(e) => onChangeDistrict(e)}
                    className="form-select mx-auto my-2 w-75"
                    aria-label="Default select example"
                >
                    {districts.length === 0 ?
                        <option key="0" value="">İl Seç</option> :
                        <>
                            <option key={0} value={0}>Tüm İlçeler</option>
                            {districts.map((item, index) => (
                                <option key={index + 1} value={item}>{item}</option>
                            ))}
                        </>
                    }
                </select>
            </div>

            {filterItems.map((item, index) => (
                <FilterPopover key={index} text={item.text} content={item.content} reqBodyTemp={reqBodyTemp} setReqBodyTemp={setReqBodyTemp} />
            ))}
            <div className='p-2'>
                <button onClick={onClickSearch} className='btn btn-danger w-100'>
                    Ara
                </button>
            </div>
        </div>
    )
}

export default SideFilter