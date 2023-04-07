import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from '../../constants'
import { Loader } from "../Loader";

const PotfolioSection = () => {

  const [data, setData]=useState([])
  const [loader, setLoader] = useState(false);
  useEffect(()=>{
    setLoader(true)
    fetch(`${BASE_URL}/all-album`).then((result)=>{
      result.json().then((resp)=>{
        setLoader(false)
        setData(resp)
      })
  })
},[]);

  return (
    <>
        <div className="masonary-grid container px-4 px-sm-0">
            <div className="row" data-masonry="{&quot;percentPosition&quot;: true }">
            {loader && <Loader/>}
            {  data.map((items)=>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4 pt-3 rounded-4">
                  <Link to={`/portfolio-details/${items.id}`} > 
                    <div className="card border-0">
                      <img src={items?.main_image} alt="" className="img-fluid" />
                      <div className="card-body text-center">
                        <img src={items?.seller?.image? items?.seller?.image:"images/portfolio-page/outdoor-1.png"} alt="" className="img-fluid" />
                        <h6 className="fw-semibold mt-3">{items?.title}</h6>
                        <div className="hstack justify-content-center gap-2">
                          <p className="m-0 border-end border-2 pe-2">{items?.type}</p>
                          <p className="m-0">{items?.seller?.name}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
               )
            }   
            </div>
        </div>
    </>
  )
}

export default PotfolioSection