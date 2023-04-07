import React, { useEffect,useState } from "react";
import { Link, useParams } from 'react-router-dom';
// import { Link } from "react-router-dom";
import { BASE_URL } from '../../constants';
function ServiceDetailSection() {
    const [data, setData]=useState([]);
    const {id} = useParams();

  useEffect(() => {
    const getData = async () => {
      const request = await fetch(`${BASE_URL}/service-details/${id}`);
      const result = await request.json();
      setData(await result);
      console.log(result)
    }
    getData()
    // eslint-disable-next-line
  }, [])

  let itemList=[];
  data?.service_benifits?.forEach((item,index)=>{
  itemList.push(<div key={index} className="row ">
  <div className="col-12 pe-0 attri">
    <h4><i className="fa fa-check" /> {item.benifits}</h4>
     </div>
    </div>)
  })

  let includeList=[];
  data?.service_includes?.forEach((item,index)=>{
    includeList.push(  <div key={index} className="row ">
  <div className="col-12 pe-0 attri">
    <h4><i className="fa fa-check" /> {item.include_service_title}</h4>
     </div>
    </div>)
  })

  let reviewList=[];
  data?.service_reviews?.forEach((item,index)=>{
    reviewList.push( <div key={index} className="row align-items-md-center mb-3 mb-md-5">
 
        <div className="col-4 col-md-3 col-lg-2 mb-4 mb-md-0">
        
          <img src={item.buyer_image?item.buyer_image:"/images/circle-dummy.png"} alt="..." className="rounded-circle" style={{width: '60px',height: '60px'}}/>
        </div>
        <div className="col-8 col-md-8 col-lg-9">
          <div className=" d-block d-md-flex align-items-center gap-md-5">
            <p className="fw-normal mb-1 mb-md-3">{item.buyer_name}</p>
            <p className="date fw-semibold">25 June 2022</p>
          </div>
          <p className="review fw-semibold">{item.message}</p>
        </div>
      </div>)
})

console.log(itemList);
  return (
    <>
        {/*------- Main Site Content Start --------*/}
      <div className="blog-detail-page border-bottom pb-5">
        {/*------- main banner Section Start-------*/}
        <div id="carouselExampleFade" className="carousel slide carousel-fade main-bnr" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="/images/service-banner/service-detail-banner.jpg" className="d-block w-100" alt="..." />
              <div className="banner-content">
                <h1 className="text-white">Service Details</h1>
              </div>
            </div>
          </div>
        </div>
        {/*------- main banner Section end-------*/}
        <div className="container">
          <div className="row gap-4 gap-xl-5 pt-5 justify-content-center ">
            {/*-------- Blog Content Section Start -------*/}
            <div className="col-lg-8 pe-md-4 pe-xl-5 blog-content">
              <img src={"https://cdn.xxl.thumbs.canstockphoto.com/young-happy-man-is-shooting-a-movie-with-a-blonde-young-happy-girl-is-taking-part-in-a-new-movie-picture_csp66898772.jpg"} alt="....." className="img-fluid rounded" style={{minWidth: '700px'}} />
              {/*---- banner footer Start -----*/}
              <div className="row bnr-footer py-4 d-flex">
              {/* <Link to={`/vandor-profiles/${data?.id}`} > */}

                {/* <div className="col-auto">
                  <span><img src={data?.service_seller_image?.img_url} className="rounded-circle" style={{width: '60px',height: '60px'}}/>
                    <p> {data?.service_seller_name} </p></span>
                </div> */}
                {/* </Link> */}
                <div className="col-auto">
                  <p><i className="bi bi-calendar3" /> 25 June 2022</p>
                </div>
                <div className="ms-auto col-auto">
                  <p>Share Now
                    <a href='/'><i className="fa-brands fa-facebook-f" /></a>
                    <a href='/'><i className="fa-brands fa-twitter" /></a>
                    <a href='/'><i className="fa-brands fa-instagram" /></a>
                    <a href='/'><i className="fa-brands fa-google-plus-g" /></a>
                  </p>
                </div>
              </div>
              {/*---- banner footer End -----*/}
              {/*---- Blog detail passage Start -----*/}
              <div className="row blog-passage">
                <div className="col-12">
                  <h4 className="lh-base fw-semibold">Overview Videography</h4>
                  <p className="lh-base pt-2">
                  A Video Studio is an environment to allow for the capture, manipulation and mastering of a video product (i.e. like a movie, a music video, or a stop-motion video).

                  </p>
                  <iframe className="mt-4" style={{width: '100%',minHeight: '400px'}} src="https://media.gettyimages.com/id/1189944560/photo/young-man-using-a-dslr-camera-in-a-forest-in-autumn.jpg?s=612x612&w=gi&k=20&c=D0U9V1v7JQFsGtIO27Nkmj2u0LSs2HpPmfcOjtC8A4g="
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                    />
                </div>
              </div>
              {/*---- Blog detail passage Start -----*/}
              {/*-------- Client Reviews Section Start --------*/}
              <div className="client-reviews mt-5 pt-md-3 ms-md-5">
                <h5 className="fw-normal mb-4 mb-md-5">Client's Review</h5>
                
                  {reviewList}
                
              </div>
              {/*-------- Client Reviews Section End --------*/}
             
            </div>
            {/*-------- Blog Content Section End -------*/}
            {/*-------- Blog Widget Section Start -------*/}
            <div className="col-lg-3 blog-widget">

              <div className="recent-shoots bg-white rounded-5 my-shadow p-4 mb-5">
                <h5 className="mb-3">Service Price <span style={{fontSize: '30px',color: '#483b8b',marginLeft: '20px'}}>Rs.8000</span></h5>
                
               
                <h6 className="mb-3">Service Attributes</h6>
               {itemList}
                <Link to={`/booking`} className="btn btn-secondry mb-4 rounded-pill px-4">
                  <i className="fa fa-shopping-cart" />
                  Buy Service</Link>
              </div>

              <div className="recent-shoots bg-white rounded-5 my-shadow p-4 mb-5">

                <h5 className="mb-3">Service Includes </h5>
                
               {includeList}
               <div  className="row ">
  <div className="col-12 pe-0 attri">
    <h4><i className="fa fa-check" /> Videography</h4>
    <h4><i className="fa fa-check" /> Videography</h4>
    <h4><i className="fa fa-check" /> Videography</h4>
    <h4><i className="fa fa-check" /> Videography</h4>

     </div>
    </div>
               
              </div>
            
              <div className="recent-shoots bg-white rounded-5 my-shadow p-4 mb-5">
                <h5 className="mb-3">About Seller</h5>
                <h3 className="mb-3 text-center">Mark<img className="rounded mt-3" src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" alt="..." style={{width:'220px'}}/> </h3>
                <h4> Seller Rating <span className="pt-3" style={{fontSize:'25px',color:'#483b8b'}}>{data?.seller_rating}%</span></h4>
              </div>


              <div className="services-page-tags">
                <h4><i className="fa fa-check" /> Orders Completed {data?.seller_complete_order}</h4>
              </div>
              <div className="services-page-tags">
                <h4><i className="fa fa-star" />Service Rating {data?.order_completion_rate}%</h4>
              </div>
            </div>
            {/*-------- Blog Widget Section End -------*/}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceDetailSection;
