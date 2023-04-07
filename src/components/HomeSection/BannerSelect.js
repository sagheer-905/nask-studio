import React, { useEffect,useState } from "react";
const BannerSelect = ({areas}) => {
    const [data, setData]=useState([]);
  
        useEffect(()=>{
            setData(areas)
        },[areas]);
   
    
  return (
    <>
        <select className="ps-4 ps-lg-2 form-select border-0 bg-transparent rounded-0" aria-label="Default select example">
            <option>Select Location</option>
            {
                data?.map((items,index) =>
                <option value={items.id} key={index}>{ items.service_area }</option>
                )
            }
        </select>
    </>
  )
}

export default BannerSelect
