import React, { useEffect} from "react";
import {
  Link,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { BASE_URL } from "../../constants";

const ServiceSection = (props) => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const subCategoryId = searchParams.get("subCategoryId");
    if (id && id === "all") {
      fetch(`${BASE_URL}/service-list/all-services`).then((result) => {
        result.json().then((resp) => {
        });
      });
    }
    if (id && id !== "all" && !subCategoryId) {
      fetch(`${BASE_URL}/service-list/search-by-category/${id}`).then(
        (result) => {
          result.json().then((resp) => {
          });
        }
      );
    }
    if (id && id !== "all" && subCategoryId) {
      fetch(
        `${BASE_URL}/service-list/category-subcategory-search/${id}/${subCategoryId}`
      ).then((result) => {
        result.json().then((resp) => {
        });
      });
    }
  }, [searchParams, id]);

  return (
    <>
      <section className="services">
        <div className="container px-4 px-md-0">
          
       
              <div
            
                className="row  align-items-center my-md-5  mb-5"
              >
                <div className="col-12  col-md-3">
                  <Link
                    to={`/service-details`}
                    className="navbar-brand"
                  >
                    <img
                      src={
                         "https://cdn.xxl.thumbs.canstockphoto.com/young-happy-man-is-shooting-a-movie-with-a-blonde-young-happy-girl-is-taking-part-in-a-new-movie-picture_csp66898772.jpg"
                      }
                      alt=""
                      className="img-fluid"
                      style={{ minHeight: "250px", objectFit: "cover" }}
                    />
                  </Link>
                </div>
                <div className="col-12 col-md-5 col-xl-6 my-3 my-md-0">
                  <h5 className="m-0 fw-semibold pb-2 pt-2">Videography</h5>
                  <p className="text-capitalize m-0">Indoor Shoot</p>
                  <p className="text-capitalize m-0 price-color">
                    Price: 8000 PKR
                  </p>
                  <div className="hstack gap-3 mt-xl-5 pt-md-5 pt-3">
                    <div>
                      <h5 className="m-0 fw-semibold">Delivery In</h5>
                      <p className="m-0">2 Days</p>
                    </div>
                    <div className="vr" />
                    <div>
                      <h5 className="m-0 fw-semibold">
                        DHA Phase 8 Paerk View 
                      </h5>
                      <p className="m-0"></p>
                    </div>
                  </div>
                </div>
                <div className="col-7 col-md-3 col-xl-2 p-0">
                  <div className="vstack gap-3">
                    <Link to={'/service-details'} className="btn">View Profile</Link>
                    <Link
                      to={`/booking/`}
                      className="btn py-2 mb-3 mb-md-0"
                    >
                      Booking for Photoshot
                    </Link>
                    {/* <button type="button" className="btn py-2 mb-3 mb-md-0">Booking for Photoshot</button> */}
                  </div>
                </div>
              </div>
              <div
            
                className="row  align-items-center my-md-5  mb-5"
              >
                <div className="col-12  col-md-3">
                  <Link
                    to={`/service-details`}
                    className="navbar-brand"
                  >
                    <img
                      src={
                         "https://cdn.xxl.thumbs.canstockphoto.com/young-happy-man-is-shooting-a-movie-with-a-blonde-young-happy-girl-is-taking-part-in-a-new-movie-picture_csp66898772.jpg"
                      }
                      alt=""
                      className="img-fluid"
                      style={{ minHeight: "250px", objectFit: "cover" }}
                    />
                  </Link>
                </div>
                <div className="col-12 col-md-5 col-xl-6 my-3 my-md-0">
                  <h5 className="m-0 fw-semibold pb-2 pt-2">Videography</h5>
                  <p className="text-capitalize m-0">Indoor Shoot</p>
                  <p className="text-capitalize m-0 price-color">
                    Price: 8000 PKR
                  </p>
                  <div className="hstack gap-3 mt-xl-5 pt-md-5 pt-3">
                    <div>
                      <h5 className="m-0 fw-semibold">Delivery In</h5>
                      <p className="m-0">2 Days</p>
                    </div>
                    <div className="vr" />
                    <div>
                      <h5 className="m-0 fw-semibold">
                        DHA Phase 8 Paerk View 
                      </h5>
                      <p className="m-0"></p>
                    </div>
                  </div>
                </div>
                <div className="col-7 col-md-3 col-xl-2 p-0">
                  <div className="vstack gap-3">
                    <Link to={`/service-details`} className="btn">View Profile</Link>
                    <Link to={`/booking/`}className="btn py-2 mb-3 mb-md-0">
                      Booking for Photoshot
                    </Link>
                    {/* <button type="button" className="btn py-2 mb-3 mb-md-0">Booking for Photoshot</button> */}
                  </div>
                </div>
              </div>
              <div
                className="row  align-items-center my-md-5  mb-5"
              >
                <div className="col-12  col-md-3">
                  <Link
                    to={`/service-details`}
                    className="navbar-brand"
                  >
                    <img
                      src={
                         "https://cdn.xxl.thumbs.canstockphoto.com/young-happy-man-is-shooting-a-movie-with-a-blonde-young-happy-girl-is-taking-part-in-a-new-movie-picture_csp66898772.jpg"
                      }
                      alt=""
                      className="img-fluid"
                      style={{ minHeight: "250px", objectFit: "cover" }}
                    />
                  </Link>
                </div>
                <div className="col-12 col-md-5 col-xl-6 my-3 my-md-0">
                  <h5 className="m-0 fw-semibold pb-2 pt-2">Videography</h5>
                  <p className="text-capitalize m-0">Indoor Shoot</p>
                  <p className="text-capitalize m-0 price-color">
                    Price: 8000 PKR
                  </p>
                  <div className="hstack gap-3 mt-xl-5 pt-md-5 pt-3">
                    <div>
                      <h5 className="m-0 fw-semibold">Delivery In</h5>
                      <p className="m-0">2 Days</p>
                    </div>
                    <div className="vr" />
                    <div>
                      <h5 className="m-0 fw-semibold">
                        DHA Phase 8 Paerk View 
                      </h5>
                      <p className="m-0"></p>
                    </div>
                  </div>
                </div>
                <div className="col-7 col-md-3 col-xl-2 p-0">
                  <div className="vstack gap-3">
                    <Link to={'/service-details'} className="btn">View Profile</Link>
                    <Link
                      to={`/booking/`}
                      className="btn py-2 mb-3 mb-md-0"
                    >
                      Booking for Photoshot
                    </Link>
                    {/* <button type="button" className="btn py-2 mb-3 mb-md-0">Booking for Photoshot</button> */}
                  </div>
                </div>
              </div>
              <div
            
                className="row  align-items-center my-md-5  mb-5"
              >
                <div className="col-12  col-md-3">
                  <Link
                    to={`/service-details`}
                    className="navbar-brand"
                  >
                    <img
                      src={
                         "https://cdn.xxl.thumbs.canstockphoto.com/young-happy-man-is-shooting-a-movie-with-a-blonde-young-happy-girl-is-taking-part-in-a-new-movie-picture_csp66898772.jpg"
                      }
                      alt=""
                      className="img-fluid"
                      style={{ minHeight: "250px", objectFit: "cover" }}
                    />
                  </Link>
                </div>
                <div className="col-12 col-md-5 col-xl-6 my-3 my-md-0">
                  <h5 className="m-0 fw-semibold pb-2 pt-2">Videography</h5>
                  <p className="text-capitalize m-0">Indoor Shoot</p>
                  <p className="text-capitalize m-0 price-color">
                    Price: 8000 PKR
                  </p>
                  <div className="hstack gap-3 mt-xl-5 pt-md-5 pt-3">
                    <div>
                      <h5 className="m-0 fw-semibold">Delivery In</h5>
                      <p className="m-0">2 Days</p>
                    </div>
                    <div className="vr" />
                    <div>
                      <h5 className="m-0 fw-semibold">
                        DHA Phase 8 Paerk View 
                      </h5>
                      <p className="m-0"></p>
                    </div>
                  </div>
                </div>
                <div className="col-7 col-md-3 col-xl-2 p-0">
                  <div className="vstack gap-3">
                    <Link to={'/service-details'} className="btn">View Profile</Link>
                    <Link
                      to={`/booking/`}
                      className="btn py-2 mb-3 mb-md-0"
                    >
                      Booking for Photoshot
                    </Link>
                    {/* <button type="button" className="btn py-2 mb-3 mb-md-0">Booking for Photoshot</button> */}
                  </div>
                </div>
              </div>
              <div
            
                className="row  align-items-center my-md-5  mb-5"
              >
                <div className="col-12  col-md-3">
                  <Link
                    to={`/service-details`}
                    className="navbar-brand"
                  >
                    <img
                      src={
                         "https://cdn.xxl.thumbs.canstockphoto.com/young-happy-man-is-shooting-a-movie-with-a-blonde-young-happy-girl-is-taking-part-in-a-new-movie-picture_csp66898772.jpg"
                      }
                      alt=""
                      className="img-fluid"
                      style={{ minHeight: "250px", objectFit: "cover" }}
                    />
                  </Link>
                </div>
                <div className="col-12 col-md-5 col-xl-6 my-3 my-md-0">
                  <h5 className="m-0 fw-semibold pb-2 pt-2">Videography</h5>
                  <p className="text-capitalize m-0">Indoor Shoot</p>
                  <p className="text-capitalize m-0 price-color">
                    Price: 8000 PKR
                  </p>
                  <div className="hstack gap-3 mt-xl-5 pt-md-5 pt-3">
                    <div>
                      <h5 className="m-0 fw-semibold">Delivery In</h5>
                      <p className="m-0">2 Days</p>
                    </div>
                    <div className="vr" />
                    <div>
                      <h5 className="m-0 fw-semibold">
                        DHA Phase 8 Paerk View 
                      </h5>
                      <p className="m-0"></p>
                    </div>
                  </div>
                </div>
                <div className="col-7 col-md-3 col-xl-2 p-0">
                  <div className="vstack gap-3">
                    <Link to={'/service-details'} className="btn">View Profile</Link>
                    <Link
                      to={`/booking/`}
                      className="btn py-2 mb-3 mb-md-0"
                    >
                      Booking for Photoshot
                    </Link>
                    {/* <button type="button" className="btn py-2 mb-3 mb-md-0">Booking for Photoshot</button> */}
                  </div>
                </div>
              </div>

        </div>
      </section>
    </>
  );
};

export default ServiceSection;
