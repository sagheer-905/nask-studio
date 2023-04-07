import React from 'react'
import Navbar from '../Navbar'
import img from '../../image/Path13.jpg'
import img2 from '../../image/Aboutus.webp'
const BannerSection = ({data}) => {
  return (
    <>
     
            
          <div className="position-relative" style={{height: '600px'}}>
                <div className="banner" style={{ backgroundImage: `url(${img})`, height: '500px', backgroundSize: 'cover' }} >
                    <Navbar/>
                    <div className="container"  style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover' }}>
                        <div className="row gap-xl-5 align-items-center">
                            <div className="col-12 col-md-7 col-xl-6 pt-5">
                            <h1 className="text-white">{data?.data?.page_title}</h1>
                <p className="text-white" style={{letterSpacing: '1.2px'}}>Photography is about capturing moments you will want to<br /> remember forever</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default BannerSection