import React from 'react';
import React, { useEffect,useState } from "react";
import { BASE_URL } from '../../constants'

const ServiceCard = (props) => {
  const [data, setData]=useState([]);
  useEffect(()=>{
    fetch(`${BASE_URL}/service-list/all-services`).then((result)=>{
      result.json().then((resp)=>{
        setData(resp)
      })
    })
  },[]);
  console.warn(data);
  return (
    <>
      {
        data.map((items) =>
        <div className="row align-items-center justify-content-center my-md-5 px-xl-5 mb-5">
          <div className="col-7 col-md-3">
            <img src="images/service-banner/_Linked File_.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-5 col-xl-6 my-3 my-md-0">
            <h5 className="m-0 fw-semibold">M.Rehman</h5>
            <p className="text-capitalize m-0">Photographer</p>
            <p className="text-capitalize m-0"></p>
            <div className="hstack gap-3 mt-xl-5 pt-md-5 pt-3">
              <div>
                <h5 className="m-0 fw-semibold">5 Years</h5>
                <p className="m-0">Experience</p>
              </div>
              <div className="vr" />
              <div>
                <h5 className="m-0 fw-semibold">Expertise</h5>
                <p className="m-0">Choosing and setting up locations</p>
              </div>
            </div>
          </div>
          <div className="col-7 col-md-3 col-xl-2 p-0">
            <div className="vstack gap-3">
              <button type="button" className="btn">View Profile</button>
              <button type="button" className="btn py-2 mb-3 mb-md-0">Booking for Photoshot</button>
            </div>
          </div>
        </div>
  
        )

      }
    </>
  )
}

export default ServiceCard;
