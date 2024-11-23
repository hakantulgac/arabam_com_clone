import React from 'react'

const Pagination = ({currentPage, setCurrentPage, dataLength}) => {
    const pageNumber = Math.floor(dataLength/50)+1;

    const paginationItems = [];

    for(let i=1; i<=pageNumber; i++) paginationItems.push(
        <li 
            style={currentPage === i ? {backgroundColor:"#F4011B", color:"#FFFFFF"}:{}}
            onClick={()=>setCurrentPage(i)}
        >{i}</li>
    )

    return (
        <div className="pagination-container">
            <p>
                Toplam <b>{pageNumber}</b> sayfa içerisinde <b>{currentPage}.</b> sayfadasınız.
            </p>
            <div>
                <ul className="pagination-items">
                    <li
                        style={currentPage===1? {display: "none"}:{}}
                        onClick={()=>setCurrentPage(prev=>prev-1)}
                    >{"<"}</li>
                        {paginationItems.map((i, index)=>(
                            <span key={index}>{i}</span>
                        ))}
                    <li
                        style={currentPage===pageNumber? {display: "none"}:{}}
                        onClick={()=>setCurrentPage(prev=>prev+1)}
                    >{">"}</li>
                </ul>
            </div>
        </div>
    )
}

export default Pagination