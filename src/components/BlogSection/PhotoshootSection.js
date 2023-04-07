import React from 'react'

const PhotoshootSection = () => {
  return (
    <>
        <div className="photoshoots mt-5 pt-md-5">
            <div className="container">
            <h2 className="text-center fw-semibold mb-4 mb-md-5">Taking Photo Shoots</h2>
            <div className="row">
                <div className="col-md-6 col-lg-3 px-lg-2 text-center">
                <img src="images/Blog-banners/birthday-shoot.png" alt="...." className="img-fluid" />
                <h5 className="my-3">Birthday Shoot</h5>
                </div>
                <div className="col-md-6 col-lg-3 px-lg-2 text-center">
                <img src="images/Blog-banners/wedding-shoot.jpg" alt="...." className="img-fluid" />
                <h5 className="my-3">Wedding Shoot</h5>
                </div>
                <div className="col-md-6 col-lg-3 px-lg-2 text-center">
                <img src="images/Blog-banners/studio-shoot.jpg" alt="...." className="img-fluid" />
                <h5 className="my-3">Studio Shoot</h5>
                </div>
                <div className="col-md-6 col-lg-3 px-lg-2 text-center">
                <img src="images/Blog-banners/outdoor-shoot.jpg" alt="...." className="img-fluid" />
                <h5 className="my-3">Outdoor Shoot</h5>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default PhotoshootSection