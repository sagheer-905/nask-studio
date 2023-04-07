import React from 'react'
import Navbar from '../Navbar'
import img from '../../image/Path13.jpg'
import img2 from '../../image/Contact.webp'
function BannerSection() {
  return (
    <div>
        <div className="position-relative" style={{height: '600px'}}>
                <div className="banner" style={{ backgroundImage: `url(${img})`, height: '500px', backgroundSize: 'cover' }} >
                    <Navbar/>
                    <div className="container"  style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover' }}>
                        <div className="row gap-xl-5 align-items-center">
                            <div className="col-12 col-md-7 col-xl-6 pt-5">
                            <h1 className="text-white">Contact Us</h1>
                        <p className="text-white" style={{letterSpacing: '1.2px'}}>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default BannerSection
