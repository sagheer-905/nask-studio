import React from 'react'
import parse from 'html-react-parser';
const ContentSection = ({data}) => {
  return (
    <>
        <div className="contact-page container">
            <div className="row my-5 pt-xl-5 align-items-center justify-content-center">
            <div className="col-md-5">
                <h1 className="mb-4">{data?.data?.page_title}</h1>
                <p className="fw-semibold pe-xl-5" style={{textAlign: 'justify'}}>{data?.data?.page_des}</p>
            </div>
            <div className="col-md-7">
                <img src={data?.page_bg_image?.img_url} alt="...." className="img-fluid" />
            </div>
            </div>
    
            <div className="contactForm mb-5 position-relative">
            <img src="images/contact-page/map-banner1.png" alt="..." className="img-fluid" />
            <div className="row justify-content-between">
                <div className="col-md-5 pe-lg-5">
                <form>
                    <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="mb-3">
                    <textarea className="form-control" rows={7} placeholder="Message" defaultValue={""} />
                    </div>
                    <div className="mb-3">
                    <button type="submit" className="btn w-100">SUBMIT</button>
                    </div>
                </form>
                </div>
                <div className="col-md-7 ps-lg-5 position-relative mt-5 mt-md-0">
                {parse(data?.data?.map??'')}
                <div className="row">
                    <div className="col-6 col-sm-5 col-lg-4">
                    <img src="images/contact-page/side-banner.png" alt="...." className="img-fluid" />
                    </div>
                </div>
                </div>
            </div>
            </div>
    
            <div className="address-section row mb-5 justify-content-evenly px-3 px-md-0 gy-4 gy-md-0">
            <div className="col-12 col-md-3 d-flex gap-3 align-items-center py-3 px-xl-4">
                <div><img src="images/contact-page/location.png" alt="..." className="img-fluid" /></div>
                <div>
                <p><span>{data?.data?.card_title_1}</span><br />
                {data?.data?.card_des_1}
                </p>
                </div>
            </div>
            <div className="col-12 col-md-3 d-flex gap-3 align-items-center py-3 px-xl-4">
                <div><img src="images/contact-page/email.png" alt="..." className="img-fluid" /></div>
                <div>
                <p><span>{data?.data?.card_title_2}</span><br />
                {data?.data?.card_des_2}
                </p>
                </div>
            </div>
            <div className="col-12 col-md-3 d-flex gap-3 align-items-center py-3 px-xl-4">
                <div><img src="images/contact-page/call.png" alt="..." className="img-fluid" /></div>
                <div>
                <p><span>{data?.data?.card_title_3}</span><br />
                {data?.data?.card_des_3}
                </p>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default ContentSection