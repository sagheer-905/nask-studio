import React from 'react'

const BannerSection = () => {
  return (
    <>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="images/vendor-listing-banner/main banner.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption container px-0">
                <h4>Photographers for best photoshoots.</h4>
                </div>
                <div className="banner-content">
                <h1 className="text-white">Our Vendors</h1>
                <p className="text-white" style={{letterSpacing: '1.2px'}}>Use a lens that matches your needs</p>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default BannerSection