import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import ReactStars from "react-rating-stars-component";
import { BASE_URL } from "../../constants";
import { Loader } from "../Loader";
const ListingSection = (props) => {

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setLoader(true)
        fetch(`${BASE_URL}/seller-list`).then((result) => {
            result.json().then((resp) => {
                setLoader(false)
                setData(resp)
            })
        })
    }, []);

    return (
        <>
            <div className="vendors-list px-3 px-md-0">
                <div className="container">
                {loader && <Loader/>}
                    {
                        data.map((items, index) =>
                            <div key={index} className="row align-items-center justify-content-center my-md-5 py-5 px-3 px-md-0 p-lg-5 gy-3 gy-lg-0">
                                <div className="col-md-4 col-lg-2 text-center">
                                    <img src={items.image ? items.image : "/images/seller/seller-dummy.png"} alt="..." className="img-fluid" />
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <h5 className="fw-semibold">{items.username}</h5>
                                    {/* <p className="mb-2">Creative Photography { items.country.country }</p> */}
                                    <p className="m-0"><span>From:</span> Pakistan</p>
                                    <p className="mb-3"><span>Seller Since:</span> {moment(items.created_at).format('YYYY-MM-DD hh:mm:ssA')}</p>
                                    <p className="m-0 d-flex align-items-center" >
                                        <span className="me-2">
                                            <ReactStars
                                                
                                                count={5}
                                                size={24}
                                                edit={false}
                                                isHalf={true}
                                                emptyIcon={<i className="bi bi-star-fill"></i>}
                                                halfIcon={<i className="bi bi-star-fill"></i>}
                                                fullIcon={<i className="bi bi-star-fill"></i>}
                                                activeColor="#1D1D1B"
                                                value={Number(items?.seller_rating_percentage_value / 20).toFixed(2)}
                                            />
                                        </span><span className="pt-1 text-dark">({items?.completed_order})</span></p>
                                </div>
                                <div className="col-md-3 col-lg-2">
                                    <div className="vstack text-center justify-content-center">
                                        <i className="bi bi-check-circle-fill text-white" />
                                        <h5 className="fw-semibold text-white m-0">{items?.completed_order}</h5>
                                        <p className="text-white m-0">Order Completed</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-lg-2">
                                    <div className="vstack text-center justify-content-center">
                                        <i className="bi bi-star-fill" />
                                        <h5 className="fw-semibold text-white m-0">{Math.floor(items?.seller_rating_percentage_value)}%</h5>
                                        <p className="text-white m-0">Seller Rating</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-3 ps-md-5">
                                    <div className="vstack gap-3">
                                        <Link to={`/vandor-profiles/${items.id}`} className="btn">View Profile</Link>
                                        <button type="button" className='btn py-2 mb-3 mb-md-0'>Booking for Photoshot</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default ListingSection;