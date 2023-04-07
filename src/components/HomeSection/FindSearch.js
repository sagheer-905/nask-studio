import React, { useEffect,useState } from "react";
import { BASE_URL } from "../../constants";
const FindSearch = (props) => {

    const [data, setData]=useState([]);
    useEffect(()=>{
      fetch(`${BASE_URL}/category`).then((result)=>{
        result.json().then((resp)=>{
          setData(resp)
        })
      })
    },[]);
    console.warn(data);

  return (
    <>
       <div className="col-8 col-md-auto text-start px-0 px-lg-2 select select-2">
            <select className="ps-4 ps-lg-2 form-select border-0 bg-transparent rounded-0" aria-label="Default select example" style={{marginLeft: '10px'}}>
                <option selected>Find Service</option>
                {
                    data?.map((items) =>
                    <option value={items.id}>{ items.name }</option>
                    )
                }
                
            </select>
        </div>
    </>
  )
}

export default FindSearch;
