import React from 'react'

const Banner = () => {
  return (
    <>
        <div id="carouselExampleFade" className="carousel slide carousel-fade main-bnr" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/Blog-detail-page/Main-Banner.jpg" className="d-block w-100" alt="..." />
                    <div className="banner-content">
                    <h1 className="text-white">Blog Details</h1>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner