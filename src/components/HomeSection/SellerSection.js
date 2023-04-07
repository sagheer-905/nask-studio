import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import img from '../../image/img1.jpg'
import img1 from '../../image/img2.jpg'
import img2 from '../../image/img3.jpg'
import img3 from '../../image/img4.jpg'
import { Carousel } from './Carousel'

const SellerSection = ({data}) => {
  const [category, setCategory] = useState([])
    
  useEffect(() => {
      if(data?.categories){
          setCategory(data?.categories)
      }
      
  }, [data]);
  return (
    <>
   <div className="about">
          <div className="container">
            <h2 className="py-2 p-lg-5 p-md-3 text-center fw-bold fs-3">{data?.home?.data?.abt_bg_title}</h2>
                <h2 className="fw-bold fs-3 text-center Servise_heading">Our <span>Service</span></h2>
            <div className="row text-align-start">
            <div className="col-md-6  servise_box">
               <div className='servise_box_img'>
                <img src={img} alt="..."/>
               </div>
               <div className='servise_box_img'>
               <img src={img1} alt="..."/>

               </div>
               <div className='servise_box_img'>
               <img src={img2} alt="..."/>

               </div>
               <div className='servise_box_img'>
               <img src={img3} alt="..."/>

               </div>

               </div>
              <div className="col-md-6 ms-auto">
                <p className="fw-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                {/* <button className="btn rounded-pill text-white px-3 readmorebtn mb-lg-5 mb-2">Read More <i className="fa-solid fa-angle-down text-white" /></button> */}
                <div className="row">
                  <div className="col-auto">
                    <h4 className="fw-bold"></h4>
                    <p>{data?.home?.data?.abt_counter_1_txt}</p>
                  </div>
                  <div className="col-auto">
                    <h4 className="fw-bold">{data?.home?.data?.abt_counter_2}</h4>
                    <p>{data?.home?.data?.abt_counter_2_txt}</p>
                  </div>
                </div>
                      <div className="container multiSliderContainer">
            <Carousel categories={category} />
            </div>
              </div>
             
            </div>
          </div>
      </div>
    </>
  )
}

export default SellerSection