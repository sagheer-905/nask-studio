import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { BASE_URL } from '../../constants'
const VendorProfileSection = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}/seller-profile/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  let serviceList = [];
  data?.services?.forEach((item, index) => {
    serviceList.push(
      <div key={index} className="col-md-5 col-xl-4">
       <Link to={`/service-details/${item.id}`}>
        <div
          className="card rounded-4 pt-4 border-0 service-card"
         
        >
          {/* <i className="fa-solid fa-people-group" /> */}
         
          <img
            src={item.image ? item.image : "/images/seller/seller-dummy.png"}
            alt=""
          />
         
          <div className="card-body">
            <h5 className="card-title">
              Price:{" "}
              <span>
                {" "}
                Rs.{item.price}{" "}
              </span>{" "}
            </h5>
            <hp className="card-text">
              {" "}
              {item.title}
            </hp>
          </div>
        </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade mt-4 pt-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../images/vendor-profile-banner/main-banner.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="banner-content">
              <h1 className="text-white">Vendor Profile</h1>
              <p className="text-white" style={{ letterSpacing: "1.2px" }}>
                Use multiple exposures
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="vendor-info mb-5 px-3 px-md-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 col-lg-3 rounded-4 mb-5 mb-md-0">
              <img
                src={
                  data?.seller_image?.img_url
                    ? data?.seller_image?.img_url
                    : "/images/seller/seller-dummy.png"
                }
                alt="...."
                className="img-fluid"
                style={{ minHeight: "450px", objectFit: "contain" }}
              />
            </div>
            <div className="col-md-9 col-lg-9 ps-md-5">
              <h4>{data?.seller_info?.username}</h4>
              <p className="mb-1">Photographer </p>

              <p className="m-0">
                <span>From:</span> {data?.seller_info?.area?.service_area} ,{" "}
                {data?.seller_info?.city?.service_city}
              </p>
              <p className="mb-md-2 mb-xl-4">
                <span>Seller Since:</span> 2020
              </p>
              <p className="lh-lg mb-xl-5" style={{ textAlign: "justify" }}>
                {" "}
                {data?.seller_info?.about}{" "}
              </p>
              <p className="m-0 d-flex align-items-center">
                {
                  data?.seller_rating_percentage_value && <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    isHalf={true}
                    emptyIcon={<i className="bi bi-star-fill"></i>}
                    halfIcon={<i className="bi bi-star-half-alt"></i>}
                    fullIcon={<i className="bi bi-star-fill"></i>}
                    activeColor="#1D1D1B"
                    value={Number(data?.seller_rating_percentage_value / 20).toFixed(2)}
                  />
                }
                {" "}
                <span className="ms-1 pt-1">{data?.completed_order}</span>
              </p>
              <h5 className="mt-3">
                Seller Rating{" "}
                <span
                  style={{
                    fontSize: "25px",
                    color: "483b8b",
                    fontWeight: "700",
                  }}
                >
                  {" "}
                  {Math.floor(data?.seller_rating_percentage_value)}%{" "}
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="marketplace mt-md-0 mt-5 mb-md-5">
        <div className="container text-center">
          <h2 className="fw-bold fs-3 mb-3">Service Info</h2>

          <div className="row gy-4 gap-3 mx-auto service-crads-row mt-4">
            {serviceList}
          </div>
        </div>
      </div>

      <div className="portfolio-slider container mb-5">
        <div className="row">
          <div className="col-12 text-center py-md-3 py-xl-5">
            <h4 style={{ letterSpacing: "2.2px" }}>Recent Photoshoots</h4>
          </div>
        </div>
        <div className="row ">
        {data?.seller_albums?.map((item,index)=>{
           return(
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4 pt-3 rounded-4">
                  <Link to={`/portfolio-details/${item.id}`} className="Ph-hoots-card"> 
                    <div className="card border-0">
                      <img src={item?.main_image} alt="" className="img-fluid" />
                      <div className="card-body text-center">
                        <h6 className="fw-semibold mt-1">{item?.title}</h6>
                      </div>
                    </div>
                  </Link>
              </div>
             
              )})}
              </div>
      </div>

      <div className="client-reviews">
        <div className="container p-3 p-md-5">
          <h5 className="fw-normal mb-4 mb-md-5">Client's Review</h5>
            {data?.service_reviews?.data?.map((item)=>{
              return(
                <div className="row align-items-md-center mb-3 mb-md-5">
            <div className="col-4 col-md-3 col-lg-2 mb-4 mb-md-0">
              <img
                src={item.image?item.image:"../images/vendor-listing-banner/review 3.png"}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-8 col-md-8 col-lg-7">
              <div className=" d-block d-md-flex align-items-center gap-md-5">
                <p className="fw-normal mb-1 mb-md-3">{item.name}</p>
                <p className="date fw-semibold">{new Date(item.created_at).toDateString()}</p>
              </div>
              <p className="review fw-semibold">
              {item.message}
              </p>
            </div>
          </div>
              )
            })}
          
        </div>
      </div>

      <div className="contact-form border-bottom pb-5">
        <div className="container px-3 px-md-5 pb-lg-4">
          <h5 className="fw-normal mb-4 mb-md-5">Send A Message</h5>
          <div className="row">
            <div className="col-sm-10 col-lg-8 col-xl-7">
              <div className="d-sm-flex gap-4">
                <div className="w-100 position-relative">
                  <i className="far fa-user" />
                  <input
                    type="text"
                    className="form-control mb-4 rounded-pill px-4"
                    placeholder="Your Full Name"
                    aria-label="Name"
                  />
                </div>
                <div className="w-100 position-relative">
                  <i className="bi bi-envelope" />
                  <input
                    type="email"
                    className="form-control mb-4 rounded-pill px-4"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="w-100 position-relative">
                <i className="bi bi-pencil-fill" />
                <textarea
                  className="form-control mb-4 rounded-4 px-4"
                  id="exampleFormControlTextarea1"
                  rows={4}
                  placeholder="Write Message"
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn mb-4 rounded-pill px-4">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorProfileSection;
