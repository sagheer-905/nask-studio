import React from 'react'

const BannerSection = () => {
  return (
    <>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/vendor-profile-banner/main banner.jpg" className="d-block w-100" alt="..." />
                    <div className="banner-content">
                    <h1 className="text-white">Vendor Profile</h1>
                    <p className="text-white" style={{letterSpacing: '1.2px'}}>Use multiple exposures</p>
                    </div>
                </div>
            </div>
        </div>

        
    </>
  )
}

export default BannerSection