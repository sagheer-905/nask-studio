import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
const BannerBox = ({categories}) => {
    const [data, setData]=useState([]);
    useEffect(()=>{
     setData(categories)
    },[categories]);
  return (
    <>
        <div className="row mt-4 justify-content-center align-items-center">
            {
                data?.filter(item =>item.is_featured == 1).map((items,index) =>
                <div className="col-auto" key={index}>
                <Link to={`/services/${items.id}`} >
                    <div className="card pt-3 border-0 rounded-4" style={{minWidth: '6rem'}}> <i className="fa-solid fa-camera-retro" />
                        <div className="card-body px-1 py-2">
                            <p className="card-text">{items.name}</p>
                        </div>
                    </div>
                    </Link>
                </div>
                )
            }
            {/* <div className="col-auto">
                <div className="card pt-3 border-0 rounded-4" style={{width: '4.5rem'}}> <i className="fa-solid fa-archway" />
                    <div className="card-body px-1 py-2">
                        <p className="card-text">Set Rental</p>
                    </div>
                </div>
            </div>
            <div className="col-auto">
                <div className="card pt-3 border-0 rounded-4" style={{width: '4.5rem'}}> <i className="fa-solid fa-photo-film" />
                    <div className="card-body px-1 py-2">
                        <p className="card-text">Artist</p>
                    </div>
                </div>
            </div> */}
        </div>
    </>
  )
}

export default BannerBox
