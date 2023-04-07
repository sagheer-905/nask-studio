import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants";
const ShootBlogSection = () => {

    const [data, setData]=useState([])

    useEffect(()=>{
      fetch(`${BASE_URL}/all-blogs`).then((result)=>{
        result.json().then((resp)=>{
          setData(resp)
        })
    })
  },[]);
console.log(data)

  return (
    <>
        <div className="bottom-section">
            <div className="shoot-gallery mt-5 pt-md-5">
            <div className="container">
                <h2 className="text-center fw-semibold mb-4 mb-md-5">Our Shoot Gallery</h2>
                <div className="grid row justify-content-center">
                <div className="col-md-7">
                    <div className="row">
                    <div className="col-md-6 mb-2 mb-md-0">
                        <img src="images/Blog-banners/g-grid1.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 mb-2 mb-md-0">
                        <img src="images/Blog-banners/g-grid2.jpg" alt="" className="img-fluid" />
                    </div>
                    </div>
                    <div className="row mt-md-4">
                    <div className="col-12 mb-2 mb-md-0">
                        <img src="images/Blog-banners/g-grid3.jpg" alt="" className="img-fluid" />
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src="images/Blog-banners/g-grid4.jpg" alt="" className="img-fluid" />
                </div>
                </div>
            </div>
            </div>

            <div className="blog-update mt-5 pt-md-5 pb-5">
            <div className="container">
                <h2 className="text-center fw-semibold">Blog Updated</h2>
                <p className="text-center mb-4 mb-md-5">Our stories from groom and bride</p>
                <div className="row justify-content-center gap-xl-4 align-items-center">

                    {
                          data.map((items)=>

                        <div className="col-md-4 col-lg-3 mb-3">
                            <Link to={`/blog-details/${items.id}`} > 
                                <img src={items.image?items.image:"images/Blog-banners/b-update1.jpg"} alt="...." className="img-fluid " style={{minHeight:'250px',objectFit:'cover'}}/>
                            </Link>
                            <div className="row gap-xl-2 mt-3">
                            <div className="col-4 border-end text-center">
                                <h1 className="fw-semibold m-0">18 </h1>
                                <span>Jan 2022 </span>
                            </div>
                            <div className="col-8 vstack justify-content-around">
                                <span className="text-uppercase">outdoor { items.title }</span>
                                <h6 className="fw-semibold m-0">Memorable moments</h6>
                            </div>
                            </div>
                        </div>

                        )
                    }

                   
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default ShootBlogSection