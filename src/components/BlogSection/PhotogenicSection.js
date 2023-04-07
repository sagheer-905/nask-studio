import React from 'react'

const PhotogenicSection = () => {
  return (
    <>
        <div className="photogenic">
            <div className="container">
                <div className="row justify-content-md-evenly justify-content-xl-between px-3 px-md-0">
                    <div className="col-md-7 position-relative mb-4 mb-md-0">
                    <img src="images/Blog-banners/img-1.jpg" alt="...." className="img-fluid" />
                    <div className="row">
                        <div className="col-11 col-md-10 px-2 px-md-5 py-2">
                        <h1 className="text-white px-lg-4">Be Photogenic</h1>
                        <p className="text-white px-lg-4">A photograph shouldn't be just
                            a picture,
                            it should be a philosophy.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <img src="images/Blog-banners/img-2.jpg" alt="...." className="img-fluid" />
                    <div className="row py-3">
                        <div className="col-10" style={{width: '80%'}}>
                        <h4>Capture your best<br />moments</h4>
                        </div>
                        <div className="col-1">
                        <i className="bi bi-caret-left-fill" />
                        </div>
                        <div className="col-1">
                        <i className="bi bi-caret-right-fill" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PhotogenicSection