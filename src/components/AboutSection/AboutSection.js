import React from 'react'
import img from '../../image/Group470.jpg'
const AboutSection = ({data}) => {
  return (
    <>
            
        <div className="about">
          <div className="container">
            <h2 className="py-2 p-lg-5 p-md-3 text-center fw-bold fs-3">About Nask Studio</h2>
            <div className="row text-align-start">
              <div className="col-md-6 ms-auto">
                <h2 className="fw-bold fs-3">{data?.data?.abt_title}</h2>
                <p className="fw-normal">We do not delay our service delivery and take much less time providing solutions for your queries. We have a management team to pre-examine about your order or a query, and then they decide about the final service you need in less time.We do not delay our service delivery and take much less time providing solutions for your queries. We have a management team to pre-examine about your order or a query, and then they decide about the final service you need in less time.</p>
                <button className="btn rounded-pill text-white px-3 readmorebtn mb-lg-5 mb-2">Read More <i className="fa-solid fa-angle-down text-white" /></button>
                <div className="row">
                  <div className="col-auto">
                    <h4 className="fw-bold">{data?.data?.counter_1}</h4>
                    <p>{data?.data?.counter_1_txt}</p>
                  </div>
                  <div className="col-auto">
                    <h4 className="fw-bold">{data?.data?.counter_2}</h4>
                    <p>{data?.data?.counter_2_txt}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 about_imgContain">
                <img src={img} alt="About" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
       
        <div className="marketplace mt-md-0 mt-5 mb-md-5">
          <div className="container text-center">
            <div className="row gy-4 gap-3 mx-auto justify-content-center mt-4">
              <div className="col-md-5 col-xl-3">
                <div className="card rounded-4 pt-4 border-0">
                  <i className="fa-solid fa-people-group" />
                  <div className="card-body">
                    <h5 className="card-title">Nask Studio</h5>
                    <p className="card-text" style={{fontSize: '14px'}}>We do not delay our service delivery and take much less time providing solutions for your queries. We have a management team to pre-examine about your order or a query, and then they decide about the final service you need in less time.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-xl-3">
                <div className="card rounded-4 pt-4 border-0">
                  <i className="fa-solid fa-users-gear" />
                  <div className="card-body">
                    <h5 className="card-title">Nask Studio</h5>
                    <p className="card-text" style={{fontSize: '14px'}}>We do not delay our service delivery and take much less time providing solutions for your queries. We have a management team to pre-examine about your order or a query, and then they decide about the final service you need in less time.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-xl-3">
                <div className="card rounded-4 pt-4 border-0">
                  <i className="fa-solid fa-magnifying-glass-chart" />
                  <div className="card-body">
                    <h5 className="card-title">Nask Studio</h5>
                    <p className="card-text" style={{fontSize: '14px'}}>We do not delay our service delivery and take much less time providing solutions for your queries. We have a management team to pre-examine about your order or a query, and then they decide about the final service you need in less time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default AboutSection