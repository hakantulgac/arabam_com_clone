import React, { useContext, useEffect, useState } from 'react'
import { sideMenuItems, vehicleTitles } from '../data/data-provider';
import TableBody from '../components/Adverts/table/Table-body';
import { VehicleContext } from "../context/vehicle-context";
import CompareVehicles from '../components/Adverts/compare/compare-vehicles';
import SideFilter from '../components/Adverts/side_filter/side-filter';

const Adverts = () => {
  const [tableMode, setTableMode] = useState("list");
  const [sortMode, setSortMode] = useState("");
  const [key, setKey] = useState(0);

  const {vehicleData, filterType, setFilterType} = useContext(VehicleContext);

  const changeTableMode = (tableName) => {
    setTableMode(tableName);
  }

  useEffect(() => {
    setKey(k => k + 1);
  }, [sortMode]);

  return (
    <div>
      <section className='alt-menu-container sticky-top no-place-for-mobile'>
        <div className="alt-menu">
          <div className='alt-left'>
            <i className="bi bi-house-door fs-6 me-3"></i>
            İkinci El
          </div>
          <div className="alt-right">
            <div>
              <i className="bi bi-star text-danger me-1"></i>
              Favori İlanlarım
            </div>
            <div>
              <i className="bi bi-file-earmark-medical text-danger me-1"></i>
              Favori Aramalarım
            </div>
            <CompareVehicles/>
          </div>
        </div>
      </section>
      <main className='adverts-page-container'>
        <section className='side-options-container'>
          <div className='side-options'>
            <div className="side-options-title">
              Tüm 2. El
            </div>
            <ul>
              {sideMenuItems.map((item, index) => (
                <li key={index}>
                  {item.title} <span className="vehicle-count"> {item.count} </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SideFilter/>
          </div>
        </section>
        <section key={key} className='adverts-container'>
          <div className="adverts-head">
            <div className='results-detail'>
              {vehicleTitles[filterType].id === 0 ?
                "Satılık 2. El Araba Fiyatları ve Modelleri ":
                `${vehicleTitles[filterType].title} ` 
              } 
              <strong>
                ({vehicleData.filter(i=>i.type===filterType).length} Sonuç)
              </strong>
            </div>
            <div className='save-option'>
              <i className="bi bi-search m-2 text-danger"></i>
              Aramayı Kaydet
            </div>
          </div>
          <div className="list-options">
            <ul>
              {vehicleTitles.map((item, index)=>(
                <li
                  onClick={()=>setFilterType(item.id)} 
                  key={index}
                  className={item.id === filterType ? "text-black bg-white border-bottom border-warning": ""}
                >
                  {item.title}
                </li>
              ))}
            </ul>
            <div className="order-options">
              <div className="list-view-options">
                <p className='me-2'>Görünüm: </p>
                <i
                  className="bi bi-list-task view-options-icon"
                  onClick={() => changeTableMode("list")}
                  style={tableMode === "list" ? { background: "gray", color: "white" } : {}}
                ></i>
                <i
                  className="bi bi-view-list view-options-icon"
                  onClick={() => changeTableMode("detail")}
                  style={tableMode === "detail" ? { background: "gray", color: "white" } : {}}
                ></i>
                <i
                  className="bi bi-grid view-options-icon"
                  onClick={() => changeTableMode("grid")}
                  style={tableMode === "grid" ? { background: "gray", color: "white" } : {}}
                ></i>
              </div>
              <div className='list-order'>
                <select
                  defaultValue={sortMode}
                  onChange={(e) => setSortMode(e.target.value)}
                  className="form-select order-select"
                  id="floatingSelect"
                  aria-label="Gelişmiş Sıralama"
                >
                  <option value="">Gelişmiş Sıralama</option>
                  <option value="productionYear">Yıl</option>
                  <option value="price">Fiyat</option>
                  <option value="advertDate">Tarih</option>
                </select>
              </div>
            </div>
          </div>
          <TableBody sortMode={sortMode} setSortMode={setSortMode} tableMode={tableMode} />
          <div className="suggestion-container">
            <div className='suggestion-avatar'>
              <img src={require("../image/suggestion-avatar.png")} alt="" />
            </div>
            <div className='suggestion-banner'>
              <strong>Sana en uygun ilanları bulmana yardımcı olmamı ister misin?</strong>
              <p>Bana Araç Öner</p>
            </div>
            <div className='suggestion-bg'>
              <img
                src={require("../image/suggestion-bg.png")}
                alt=""
                height={"80px"}
              />
            </div>
          </div>
          <div className="save-search-container">
            <img src={require("../image/save-search.png")} alt="" />
            <p>Aramanı kaydederek yeni ilanlardan haberdar olabilirsin.</p>
            <button className='btn btn-danger save-search-btn'>Aramayı Kaydet</button>
          </div>
          <div className='last-update'>
            <p>Bu sayfa en son 07 Kasım 2024 00:19 tarihinde güncellenmiştir.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Adverts;