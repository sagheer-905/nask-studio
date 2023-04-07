import React, { useEffect, useState } from "react";

import { Link, useParams } from 'react-router-dom';
import moment from "moment";


const PortfolioDetails = () => {

    const [data, setData] = useState([]);
    const { id, portfolio } = useParams();
  
    useEffect(() => {
      const getData = async () => {
        const request = await fetch(`https://naskstudio.com/admin/api/v1/album-details/${portfolio}`);
        const result = await request.json();
        setData(await result);
        console.log(result)
      }
      getData()
    }, [])
  
    let itemList = [];
    data?.service_benifits?.forEach((item, index) => {
      itemList.push(<div key={index} className="row ">
        <div className="col-12 pe-0 attri">
          <h4><i className="fa fa-check" /> {item.benifits}</h4>
        </div>
      </div>)
    })
  
    let includeList = [];
    data?.service_includes?.forEach((item, index) => {
      includeList.push(<div key={index} className="row ">
        <div className="col-12 pe-0 attri">
          <h4><i className="fa fa-check" /> {item.include_service_title}</h4>
        </div>
      </div>)
    })
  
  


  return (
    <>
        <div className="container">
            <div className="row gap-4 gap-xl-5 pt-5 justify-content-center">
              
              
              {/*-------- Blog Content Section Start -------*/}
              <div className="col-lg-8 pe-md-4 pe-xl-5 blog-content">
                <img src={ data?.blog_image?.img_url } alt="....." className="img-fluid" />
                {/*---- banner footer Start -----*/}
                <div className="row bnr-footer py-4">
                  <div className="col-auto">
                    <p><i className="fa-solid fa-user-tie" /> Daniele Custor</p>
                  </div>
                  <div className="col-auto">
                    <p><i className="bi bi-calendar3" /> 25 June 2022</p>
                  </div>
                  <div className="ms-auto col-auto">
                    <p>Share Now
                      <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                      <a href="#"><i className="fa-brands fa-twitter" /></a>
                      <a href="#"><i className="fa-brands fa-instagram" /></a>
                      <a href="#"><i className="fa-brands fa-google-plus-g" /></a>
                    </p>
                  </div>
                </div>
                {/*---- banner footer End -----*/}
                {/*---- Blog detail passage Start -----*/}
                <div className="row blog-passage">
                  <div className="col-12">
                    <h4 className="lh-base fw-semibold">Photography is about capturing moments you’ll want to
                      remember forever { data?.blog_info?.title } </h4>
                    <p className="lh-base pt-2">
                    {data?.blog_info?.blog_content} 
                    
                    </p>
                    <p className="lh-base pt-3">
                      I know how hard it can be to come up with new ideas all the time, and I’ve
                      learned quite a bit about the industry, so I compiled this list of blog post ideas
                      for photographers, no matter your niche.
                    </p>
                    <blockquote className="lh-lg px-4 py-2 mt-5">
                      The one thing you can’t replace is your memories. Don’t let them fade
                      away from overexposure. Capture life’s moments candidly.
                      <span className="my-2">Tony R.Francois</span>
                    </blockquote>
                    <p className="p-3 Tags"><span className="fw-semibold">Popular Tags: </span>Photography, Photoshoot,
                      Exclusiveshots</p>
                    <div className="row passage-btn justify-content-evenly p-4">
                      <div className="col-md-5 p-4 mb-3 mb-md-0">
                        <h6 className="fw-semibold text-white lh-base">Building Pub Sub Service Using Node And
                          Redis</h6>
                      </div>
                      <div className="col-md-5 p-4">
                        <h6 className="fw-semibold lh-base">Once Upon Time Use Story For Better Engagement</h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/*---- Blog detail passage Start -----*/}
                {/*-------- Client Reviews Section Start --------*/}
                <div className="client-reviews mt-5 pt-md-3 ms-md-5">
                  <h5 className="fw-normal mb-4 mb-md-5">Client's Review</h5>
                  <div className="row align-items-md-center mb-3 mb-md-5">
                    <div className="col-4 col-md-3 col-lg-2 mb-4 mb-md-0">
                      <img src="images/vendor-listing-banner/review 1.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-8 col-md-8 col-lg-9">
                      <div className=" d-block d-md-flex align-items-center gap-md-5">
                        <p className="fw-normal mb-1 mb-md-3">Alexzeder Alex</p>
                        <p className="date fw-semibold">25 June 2022</p>
                      </div>
                      <p className="review fw-semibold">Great service, efficient communication and a really easy
                        way to
                        get a mortgage with lots of help
                        and support to get the right deal.</p>
                    </div>
                  </div>
                  <div className="row align-items-md-center mb-3 mb-md-5 ms-md-5">
                    <div className="col-4 col-md-3 col-lg-2 mb-4 mb-md-0">
                      <img src="images/vendor-listing-banner/review 2.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-8 col-md-8 col-lg-9">
                      <div className=" d-block d-md-flex align-items-center gap-md-5">
                        <p className="fw-normal mb-1 mb-md-3">John F.Medina</p>
                        <p className="date fw-semibold">26 June 2022</p>
                      </div>
                      <p className="review fw-semibold">Great service, efficient communication and a really easy
                        way to
                        get a mortgage with lots of help
                        and support to get the right deal.</p>
                    </div>
                  </div>
                  <div className="row align-items-md-center mb-md-5">
                    <div className="col-4 col-md-3 col-lg-2 mb-4 mb-md-0">
                      <img src="images/vendor-listing-banner/review 3.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-8 col-md-8 col-lg-9">
                      <div className=" d-block d-md-flex align-items-center gap-md-5">
                        <p className="fw-normal mb-1 mb-md-3">Caroline</p>
                        <p className="date fw-semibold">27 June 2022</p>
                      </div>
                      <p className="review fw-semibold">Great service, efficient communication and a really easy
                        way to
                        get a mortgage with lots of help
                        and support to get the right deal.</p>
                    </div>
                  </div>
                </div>
                {/*-------- Client Reviews Section End --------*/}
                {/*------- Contact form Section Satrt --------*/}
                <div className="contact-form pt-5 pb-3">
                  <div className="container px-3 px-md-5 pb-lg-4">
                    <h5 className="fw-normal mb-4 mb-md-5">Send A Message</h5>
                    <div className="row">
                      <div className="col-xl-11">
                        <div className="d-sm-flex gap-4">
                          <div className="w-100 position-relative">
                            <i className="far fa-user" />
                            <input type="text" className="form-control mb-4 rounded-pill px-4" placeholder="Your Full Name" aria-label="Name" />
                          </div>
                          <div className="w-100 position-relative">
                            <i className="bi bi-envelope" />
                            <input type="email" className="form-control mb-4 rounded-pill px-4" placeholder="Your Email" />
                          </div>
                        </div>
                        <div className="w-100 position-relative">
                          <i className="bi bi-pencil-fill" />
                          <textarea className="form-control mb-4 rounded-4 px-4" id="exampleFormControlTextarea1" rows={4} placeholder="Write Message" defaultValue={""} />
                        </div>
                        <button type="submit" className="btn mb-4 rounded-pill px-4">Send Message</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/*------- Contact form Section Satrt --------*/}
              </div>
              {/*-------- Blog Content Section End -------*/}




              {/*-------- Blog Widget Section Start -------*/}
              <div className="col-lg-3 blog-widget">
                {/*------- Search Bar Start -----*/}
                <div className="row search-form mb-5">
                  <div className="col-12 position-relative">
                    <input type="text" className="form-control rounded-pill border-0 shadow-sm px-4 py-3" placeholder="Search" />
                    <i className="bi bi-search" />
                  </div>
                </div>
                {/*------ Search Bar End -----*/}
                {/*----- Recent Shoots Section Start -------*/}
                <div className="recent-shoots bg-white rounded-5 shadow-sm p-4 mb-5">
                  <h5 className="mb-3">Recent Shoots</h5>
                  <div className="row gap-3 border-bottom mx-1 py-3 mb-4">
                    <div className="col-3 p-0">
                      <img src="images/Blog-detail-page/post-1.png" alt="" />
                    </div>
                    <div className="col-8 pe-0">
                      <h6>Outdoor Photoshoot</h6>
                      <p>Capture the beauty in simplicity</p>
                      <span>15th June 2022</span>
                    </div>
                  </div>
                  <div className="row gap-3 border-bottom mx-1 py-3 mb-4">
                    <div className="col-3 p-0">
                      <img src="images/Blog-detail-page/post-2.png" alt="" />
                    </div>
                    <div className="col-8 pe-0">
                      <h6>Wedding Photoshoot</h6>
                      <p>Capturing your special moments</p>
                      <span>23rd June 2022</span>
                    </div>
                  </div>
                  <div className="row gap-3 border-bottom mx-1 py-3 mb-5">
                    <div className="col-3 p-0">
                      <img src="images/Blog-detail-page/post-3.png" alt="" />
                    </div>
                    <div className="col-8 pe-0">
                      <h6>Couple Photoshoot</h6>
                      <p>Photographing your moments forever</p>
                      <span>24th June 2022</span>
                    </div>
                  </div>
                </div>
                {/*----- Recent Shoots Section End --------*/}
                {/*------- Category Section Start ---------*/}
                <div className="category-section bg-white rounded-5 shadow-sm p-4 mb-5">
                  <h5 className="mb-3">Category</h5>
                  <ul className="list-unstyled pb-3">
                    <li><a href="#">Outdoor Shoot</a></li>
                    <li><a href="#">Indoor Shoot</a></li>
                    <li><a href="#">Studio Shoot</a></li>
                    <li><a href="#">Product Shoot</a></li>
                    <li><a href="#">Wedding Shoot</a></li>
                    <li><a href="#">Couple Shoot</a></li>
                    <li><a href="#">Birthday Shoot</a></li>
                  </ul>
                </div>
                {/*------- Category Section End ---------*/}
                {/*------- Widget Contact Us banner Start -----*/}
                <div className="widget-bnr position-relative">
                  <img src="images/Blog-detail-page/post-widget-bnr.jpg" alt="..." className="img-fluid" />
                  <div className="bnr-content p-4">
                    <h2 className="fw-normal text-white">Work Together</h2>
                    <p className="text-white fw-light">Bur wemust ipsum dolor sit amet
                      consectetur adipisicing elit sed
                      eiusmod tempor incididunt ut
                      labore</p>
                    <button type="button" className="btn btn-outline-light rounded-pill fw-semibold px-4 py-2">Contact Now <i className="fa-solid fa-angles-right text-white" /></button>
                  </div>
                </div>
                {/*------- Widget Contact Us banner Start -----*/}
              </div>
              {/* Blog Widget Section End  */}
            </div>
        </div>
    </>
  )
}

export default PortfolioDetails
